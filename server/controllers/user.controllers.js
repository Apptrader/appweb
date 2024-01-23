import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccesToken } from '../libs/jwt.js';
import sequelize from '../dbconnection.js';

export const allUsers = async (req,res) =>{

  const users = await User.findAll();
  res.json(users)
};



export const register = async (req, res) => {
  const {
    UserName,
    Email,
    Password,
    UserCode,
    Phone,
    CodeReferenced,
    idPaidPlanForUser
  } = req.body;

  try {
    const passwordHash = await bcrypt.hash(Password, 10);

    if (!CodeReferenced) {
      const newUser = await User.create({
        UserName,
        Email,
        Password: passwordHash,
        UserCode,
        Phone,
        CodeReferenced,
        idPaidPlanForUser,
        referralsCount: 0
      });

      const token = await createAccesToken({ id: newUser.idUser });

      res.json({
        id: newUser.idUser,
        UserName: newUser.UserName,
        Email: newUser.Email,
        Phone: newUser.Phone,
        token: token,
        created: 'ok'
      });
      return;
    }

    // Buscar el usuario con el código de referencia
    let referencedUser = await User.findOne({ where: { UserCode: CodeReferenced } });

    if (!referencedUser) {
      return res.status(404).json({ message: "Usuario con el código de referencia no encontrado" });
    }

    
    const newReferralCount = referencedUser.referralsCount + 1;
    let position = '';

    if(newReferralCount %2 === 0){
      position = 'right';
    }else{
      position = 'left';
    }

    let result;

    if (position === 'right'){
      const newPoints = referencedUser.pointsRight + 1000;
      result = await User.update(
        {pointsRight: newPoints,
        referralsCount: newReferralCount},
        {where: { idUser: referencedUser.idUser }},
      )
    }else{
      const newPoints = referencedUser.pointsLeft + 1000;
      result = await User.update(
        {pointsLeft: newPoints,
        referralsCount: newReferralCount},
        {where: { idUser: referencedUser.idUser }},
      )
    }
    
    console.log("este es el update: ", result)

    let user = referencedUser;

    // Proceso de referidos multinivel
    while (user.CodeReferenced) {
      const parentUser = await User.findOne({ where: { UserCode: user.CodeReferenced } });

      if (!parentUser) {
        break; // No se encontró el padre, salir del bucle
      }

      if (user.position === 'right'){
        const newPoints = parentUser.pointsRight + 1000;
        await User.update(
          { pointsRight: newPoints },
          { where: { idUser: parentUser.idUser } }
        );
      }else{
        const newPoints = parentUser.pointsLeft + 1000;
        await User.update(
          { pointsLeft: newPoints },
          { where: { idUser: parentUser.idUser } }
        );
      }
      user = parentUser;
    }

    const newUser = await User.create({
      UserName,
      Email,
      Password: passwordHash,
      UserCode,
      Phone,
      CodeReferenced,
      idPaidPlanForUser,
      referralsCount: 0,
      position: position
    });

    const token = await createAccesToken({ id: newUser.idUser });

    res.json({
      id: newUser.idUser,
      UserName: newUser.UserName,
      Email: newUser.Email,
      Phone: newUser.Phone,
      token: token,
      created: 'ok'
    });

  } catch (error) {
    console.log("este es el error: ", error);
    res.status(500).json({ message: error.message });
  }
};


export const login = async (req, res) => {
  const {
    Email,
    Password
  } = req.body;

  /*
  Siempre en cada controlador que reciba parametro por body tenemos que meter una verificacion
  Si el email o el password estan vacios, mandamos un mensaje de error "Datos incompletos."
  Sino continua el proceso.
  */

  try {
    const userFound = await User.findOne({
      where: {
        Email: Email
      }
    });

    if(!userFound) return res.status(400).json({message: "User not found"});
    
    const isMatch = await bcrypt.compare(Password, userFound.Password);
    

    if(!isMatch) return res.status(400).json({message: "Incorrect password"});
    console.log(userFound, "usuario encontrado")

    const userId = userFound.dataValues.idUser
    console.log(userId)

    const token = await createAccesToken({ id: userId });
  
    //res.cookie("token", token)

    res.json({
      id: userFound._id,
      UserName: userFound.UserName,
      Email: userFound.Email,
      token: token
    });

  } catch (error) {
    res.status(500).json({message: error.message});
  }

};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {

  const userFound = await User.findOne(req.user.idUser)
  console.log("Esto es user found: ", userFound)
  if(!userFound) return res.status(400).json({message: "User not found"});

  return res.json({
    id: userFound._id,
    UserName: userFound.UserName,
    Email: userFound.Email
  })

}


export const getReferralTree = async (req, res) => {
  const userId = req.user.id;
  console.log(req.user);

  try {
    const user = await User.findOne({
      where: {
        idUser: userId
      }
    });

    if (user) {
      const firstGen = await User.findAll({
        where: {
          CodeReferenced: user.UserCode
        }
      });

      const referralTree = await getGenerations(user, firstGen);

      res.json({ referralTree });
    } else {
      res.status(500).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el árbol de referidos.' });
  }
};

const getGenerations = async (user, generation) => {
  const referralTree = [];
  for (const referent of generation) {
    const usersInGeneration = await User.findAll({
      where: {
        CodeReferenced: referent.UserCode
      }
    });

    referralTree.push({
      referent,
      children: await getGenerations(referent, usersInGeneration)
    });
  }
  return referralTree;
};



