var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
        
    service: 'gmail',
    auth: {
        user: 'workhub18@gmail.com',
        pass: 'Workhub2018'           }
   });

   exports.UserAdded = function(email,code,callback){
        var mailOptions = {
            from: '"WorkHub"',
            to: email,
            subject: 'Welcome   to WorkHub',
            html: `<center><h4></string>Hello ${email} thanks for registering with Workhub please verify your Account by inserting this code <strong>${code}</strong> in the verification page</h4>
            <div style="text-align:center; width: 50%; font-family:tahoma; columns: #909090;">
            <div style="background: wheat; padding:8%">
           </div>
            </center>`
        };
        transporter.sendMail(mailOptions, callback); 
        console.log('kk')
   }

