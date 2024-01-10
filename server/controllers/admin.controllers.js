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


   

    const token = await createAccesToken({id: newAdmin.idAdmin});

    res.json({
      id: newAdmin.idAdmin,
      UserName: newAdmin.AdminName,
      Email: newAdmin.Email,
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
