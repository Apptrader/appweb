import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccesToken } from '../libs/jwt.js';
import sequelize from '../dbconnection.js';
import Rank from '../models/rank.model.js';
import PaidPlan from '../models/paidplans.model.js';
import nodemailer from 'nodemailer';

export const allUsers = async (req,res) =>{

  const users = await User.findAll();
  res.json(users)
};

export const sendEmailRegister = async (email, code, name) => {
  const contentHTML = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
</head>
<body>
    <table style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; border-collapse: collapse;">
        <tr>
            <td style="background-color: #4299e1; color: white; padding: 20px; text-align: center;">
                <h2>Welcome to AIQ Academy!</h2>
                <p>Thank you for registering!</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f8fafc; padding: 20px;">
                <h3>Great to see you ${name}, this is your User Information</h3>
                <ul>
                    <li><strong>User Email:</strong> ${email}</li>
                    <li><strong>AIQ code:</strong> ${code}</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f8fafc; padding: 20px; text-align: center;">
                <p>If you have any questions, feel free to contact us.</p>
                <p class="text-gray-700">Best regards,</p>
                <p class="text-gray-700">AIQ Team</p>
            </td>
        </tr>
    </table>
</body>
</html>
  `;

  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
      auth: {
          user: 'ramiro.alet@hotmail.com',
          pass: 'luciana.11'
      }
  });
  
  try {
    let info = await transporter.sendMail({
      from: 'aiqacount19921@outlook.es',
      to: email,
      subject: 'Welcome to Our Website!',
      html: contentHTML
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log("Error sending email:", error);
  }
}

export const register = async (req, res) => {
  const {
    UserName,
    Email,
    Password,
    Phone,
  } = req.body;

  try {
    const passwordHash = await bcrypt.hash(Password, 10);


      const newUser = await User.create({
        UserName,
        Email,
        Password: passwordHash,
        Phone,
        referralsCount: 0,
        status: 0
      });

      const token = await createAccesToken({ id: newUser.idUser });


      // Llama a la función sendEmailRegister pasando el correo electrónico del usuario
      await sendEmailRegister(Email, newUser.UserCode, newUser.UserName);

      res.json({
        userFound: newUser,
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
      },
      include: [
        { model: PaidPlan, attributes: ['idPaidPlan', 'planName',]},
        { model: Rank, attributes: ['id', 'name', "right", "left"] }
      ]
    });
    if(!userFound) return res.status(400).json({message: "User not found"});
    
    const isMatch = await bcrypt.compare(Password, userFound.Password);
    

    if(!isMatch) return res.status(400).json({message: "Incorrect password"});
    console.log(userFound, "usuario encontrado")

    const userId = userFound.dataValues.idUser
    

    const token = await createAccesToken({ id: userId });
  
    //res.cookie("token", token)

    res.json({
     token: token,
     userFound
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

  if(!userFound) return res.status(400).json({message: "User not found"});

  return res.json({
    id: userFound._id,
    UserName: userFound.UserName,
    Email: userFound.Email
  })

}


export const getReferralTree = async (req, res) => {
  const userId = req.user.id;


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

export const updateUserPlan = async (req, res) => {
  const {plan} = req.body 
  const {id} = req.user

  console.log(plan, "updateplan")


  try {

    let referencedUser = await User.findOne({ where: { UserCode: plan.referred } });

    if (!referencedUser) {
      const result = await User.update(
        { 
          idPaidPlan: plan.id,
          status: 1,
          position: "",
          CodeReferenced: plan.referred
        },
        { where: { idUser: id } }
      );
  
      const userFound = await User.findOne({
        where: {
          idUser: id
        },
        include: [
          { model: PaidPlan, attributes: ['idPaidPlan', 'planName',]},
          { model: Rank, attributes: ['id', 'name', "right", "left"] }
        ]})

  
      if(result[0] === 1) {
        await sendEmailPaidPlan(userFound.Email, userFound.UserName, plan) 
        res.json({updated: "ok", userFound})
      } else {
        res.json("Error")
      }
    }

    
    const newReferralCount = referencedUser.referralsCount + 1;

    const newPv =  plan.price / 2

    let position = '';

    if(newReferralCount %2 === 0){
      position = 'right';
    }else{
      position = 'left';
    }

    const newPoints = referencedUser.pointsLeft + newPv;

    let enrollmentVolume
      if(referencedUser.enrollmentVolume === null) {
        enrollmentVolume = newPv
      } else {
        enrollmentVolume = referencedUser.enrollmentVolume + newPv
      }

      let newPayAmount
      if(referencedUser.payAmount === null) {
        newPayAmount = newPv
      } else {
        newPayAmount = referencedUser.payAmount + newPv
      }

    if (position === 'right'){
      
     
       await User.update(
        {pointsRight: newPoints,
          payAmount: newPayAmount,
          enrollmentVolume: enrollmentVolume,
          directRight: referencedUser.directRight + 1,
        referralsCount: newReferralCount},
        {where: { idUser: referencedUser.idUser }},
      )
      await assignRank(referencedUser.idUser)

    }else{
     
      await User.update(
        {pointsLeft: newPoints,
          payAmount: newPayAmount,
          enrollmentVolume: enrollmentVolume,
          directLeft: referencedUser.directLeft + 1,
        referralsCount: newReferralCount},
        {where: { idUser: referencedUser.idUser }},
      )
      
      await assignRank(referencedUser.idUser)

    }
    

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

      await assignRank(parentUser.idUser) 
      user = parentUser;
    }


    const result = await User.update(
      { 
        idPaidPlan: plan.id,
        status: 1,
        position: position,
        CodeReferenced: plan.referred
      },
      { where: { idUser: id } }
    );

    const userFound = await User.findOne({
      where: {
        idUser: id
      },
      include: [
        { model: PaidPlan, attributes: ['idPaidPlan', 'planName',]},
        { model: Rank, attributes: ['id', 'name', "right", "left"] }
      ]
    });

   

    if(result[0] === 1) {
     await sendEmailPaidPlan(userFound.Email, userFound.UserName, userFound.idPaidPlan) 
      res.json({updated: "ok", userFound})
    } else {
      res.json("Error")
    }
  } catch (error) {
    console.log(error)
  }

}


const assignRank = async (userId) => {
  try {
    const user = await User.findOne({ where: { idUser: userId } });

    if (!user) {
      console.log("User not found");
      return;
    }

    const userPoints = user.pointsLeft + user.pointsRight;
    console.log(userPoints)

    const ranks = await Rank.findAll({
      order: [['points', 'DESC']]
    });

    let assignedRank = null;

    for (const rank of ranks) {
      if (userPoints >= rank.points) {
        // Assign the rank to the user
        assignedRank = rank;
        await User.update(
          { rank_id: rank.id },
          { where: { idUser: userId } }
        );
        console.log(`User ${userId} assigned rank ${rank.rankName}`);
        break;
      }
    }

    // Check if the assigned rank has a higher id than the current highestRank
    if (assignedRank && assignedRank.id > user.highestRank) {
      // Update the highestRank
      await User.update(
        { highestRank: assignedRank.id },
        { where: { idUser: userId } }
      );
      console.log(`User ${userId} has a new highestRank: ${assignedRank.id}`);
    }
  } catch (error) {
    console.error("Error assigning rank:", error);
  }
};

export const getUserByUserCode = async (req, res) => {

  const {userCode} = req.body

  try {
    const referred = await User.findOne({ where: { UserCode: userCode } })


    res.json(referred)
  } catch (error) {
    console.log(error)
    res.json(error)
  }


}


export const calculate = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Rank, attributes: ['id', 'name', 'commission', 'left', 'right'] }],
    });

    for (const user of users) {
      if (user.rank && user.pointsLeft !== null && user.pointsRight !== null) {

        if (user.directLeft >= user.rank.left && user.directRight >= user.rank.right) {
        const commissionPercentage = user.rank.commission; // Obtén el porcentaje de comisión del rango

        // Determina la pierna con menos puntos
        const weakerLeg = user.pointsLeft < user.pointsRight ? 'pointsLeft' : 'pointsRight';
        const strongerLeg = weakerLeg === 'pointsLeft' ? 'pointsRight' : 'pointsLeft';

        // Calcula el monto de comisión
        const commissionAmount = (user[weakerLeg] * commissionPercentage) / 100;

        // Actualiza el usuario
        await User.update(
          {
            payAmount: user.payAmount + commissionAmount,
            [weakerLeg]: null,
            [strongerLeg]: user[strongerLeg] - user[weakerLeg],
          },
          { where: { idUser: user.idUser } }
        );
        }
      }
    }

    res.json({ success: true, message: 'Cálculos realizados con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error en el servidor.' });
  }
};

export const sendEmailPaidPlan = async (email, name, plan) => {
  const contentHTML = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
</head>
<body>
    <table style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; border-collapse: collapse;">
        <tr>
            <td style="background-color: #4299e1; color: white; padding: 20px; text-align: center;">
                <h2>Congratulations ${name}</h2>
                <p>You are now a ${plan.name} member!</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f8fafc; padding: 20px;">
                <h3>You can access now to the video section and start lerning</h3>
                <p>Remember your plan has a $ ${plan.renewal} monthly renewal</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #f8fafc; padding: 20px; text-align: center;">
                <p>If you have any questions, feel free to contact us.</p>
                <p class="text-gray-700">Best regards,</p>
                <p class="text-gray-700">AIQ Team</p>
            </td>
        </tr>
    </table>
</body>
</html>
  `;

  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
      auth: {
          user: 'ramiro.alet@hotmail.com',
          pass: 'luciana.11'
      }
  });
  
  try {
    let info = await transporter.sendMail({
      from: 'ramiro.alet@hotmail.com',
      to: email,
      subject: 'This is your new Plan!',
      html: contentHTML
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log("Error sending email:", error);
  }
}