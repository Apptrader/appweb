// controllers/admin.controllers.js
import Admin from '../models/admin.model.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';

export const allAdmins = async (req,res) =>{

  const admins = await Admin.findAll();
  res.json(admins)
};

export const register = async (req, res) => {
  const { AdminName, Email, Password, Phone } = req.body;

  try {
    const passwordHash = await bcrypt.hash(Password, 10)

    // Crea una nueva instancia del modelo Admin
    const newAdmin = await Admin.create({
      AdminName,
      Email,
      Password: passwordHash,
      Phone
    });


    // Guarda los cambios en la base de datos (CREO QUE NO ES NECESARIO.)
    await newAdmin.save(); //NO SE SI ES NECESARIO

    const token = await createAccesToken({id: newAdmin._id});
    res.cookie("token", token)
    res.json({
      id: newAdmin._id,
      UserName: newAdmin.UserName,
      Email: newAdmin.Email
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

  try {
    const adminFound = await Admin.findOne({
      where: {
        Email: Email
      }
    });

    if(!adminFound) return res.status(400).json({message: "User not found"});
    
    const isMatch = await bcrypt.compare(Password, adminFound.Password);
    console.log("Esto es isMatch: ", isMatch)

    if(!isMatch) return res.status(400).json({message: "Incorrect password"});

    const token = await createAccesToken({id: adminFound._id});
  
    res.cookie("token", token)

    res.json({
      id: adminFound._id,
      AdminName: adminFound.UserName,
      Email: adminFound.Email,
      createdAt: adminFound.createdAt,
      updatedAt: adminFound.updatedAt
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }

};
