import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccesToken } from '../libs/jwt.js';

export const allUsers = async (req,res) =>{

  const users = await User.findAll();
  res.json(users)
};

export const register = async (req, res) => {

  /*
  
  */

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

    // Crear una nueva instancia del modelo User
    const newUser = await User.create({
      UserName,
      Email,
      Password: passwordHash,
      UserCode,
      Phone,
      CodeReferenced,
      idPaidPlanForUser
    });

    

    const token = await createAccesToken({id: newUser.idUser});
    
    res.json({
      id: newUser.idUser,
      UserName: newUser.UserName,
      Email: newUser.Email,
      Phone:newUser.Phone,
      token: token
    })
  } catch (error) {
    res.status(500).json({message: error.message});
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