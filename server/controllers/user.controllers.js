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

    const newPoints = referencedUser.UserPoints + 1000;
    const newReferralCount = referencedUser.referralsCount + 1;
    let position = '';

    if(newReferralCount %2 === 0){
      position = 'right';
    }else{
      position = 'left';
    }

    const result = await User.update(
      {UserPoints: newPoints,
      referralsCount: newReferralCount},
      {where: { idUser: referencedUser.idUser }},
    )
    console.log("este es el update: ", result)

    let user = referencedUser;

    // Proceso de referidos multinivel
    while (user.CodeReferenced) {
      const parentUser = await User.findOne({ where: { UserCode: user.CodeReferenced } });

      if (!parentUser) {
        break; // No se encontró el padre, salir del bucle
      }

      const newPoints = parentUser.UserPoints + 1000;
      
      await User.update(
        { UserPoints: newPoints },
        { where: { idUser: parentUser.idUser } }
      );

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

    const token = await createAccesToken({id: userFound._id});
  
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
  res.send("This is your profile.")
}