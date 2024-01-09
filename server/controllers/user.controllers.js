import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccesToken } from '../libs/jwt.js';
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
    UserPoints,
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
      UserPoints,
      idPaidPlanForUser
    });

    const allUsers = await User.findAll();
    console.log("Registros en la base de datos:", allUsers);
    
    // Guarda los cambios en la base de datos (CREO QUE NO ES NECESARIO.)
    await newUser.save();

    const token = await createAccesToken({id: newUser._id});
    res.cookie("token", token)
    res.json({
      id: newUser._id,
      UserName: newUser.UserName,
      Email: newUser.Email
    })
  } catch (error) {
    res.status(500).json({message: error.message});
  }

};

export const login = (req, res) => {
  // Lógica de inicio de sesión, si es necesario
  res.send("Iniciando sesión...");
};
