// controllers/admin.controllers.js
import Admin from '../models/admin.model.js';
import bcrypt from 'bcryptjs';

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

    const allAdmins = await Admin.findAll();
    console.log("Registros en la base de datos:", allAdmins);

    // Guarda los cambios en la base de datos (CREO QUE NO ES NECESARIO.)
    await newUser.save(); //NO SE SI ES NECESARIO

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
  res.send("Bienvenido al sistema de administración");
};
