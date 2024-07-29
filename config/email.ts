const nodemailer=require("nodemailer")


export async function  sendmail(to:string,subject:String, htmltemp:string){

const transporter = nodemailer.createTransport({
  host: "mail.techtutorpro.com",
  port: 465,
  secure: true,
  auth: {
    user: "contact@techtutorpro.com",
    pass: "RAIHANj10205060?",
  },
  tls: {
    rejectUnauthorized: false, // Disable certificate validation
  },
});


let mailOptions = {
  from: 'contact@techtutorpro.com',
  to: to,
  subject: subject,
  html:htmltemp,
};

  const response= await transporter.sendMail(mailOptions)

    return response
}