const nodemailer=require("nodemailer")


export async function  sendmail(to:string,subject:String, htmltemp:string){

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alexkrein9@gmail.com',
    pass: 'izir lvtl vkvu wfdr'
  }
});


let mailOptions = {
  from: 'alexkrein9@gmail.com',
  to: to,
  subject: subject,
  html:htmltemp,
};

  const response= await transporter.sendMail(mailOptions)

    return response
}