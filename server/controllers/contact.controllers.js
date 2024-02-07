
import nodemailer from 'nodemailer';


export const sendEmail = async (req, res) =>{
    const { name, email, phone, message } = req.body;

    const contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>User Email: ${email}</li>
        <li>PhoneNumber: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'email@gmail.com',
            pass: 'xxx'
        }
    });
    

    let info = await transporter.sendMail({
        from: '"xxx Server" <email@gmail.com>', // sender address,
        to: 'email@gmail.com',
        subject: 'Website Contact Form',
        // text: 'Hello World'
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

   //res.redirect('/success.html');
}


