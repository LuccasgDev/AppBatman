export default function generatePass() {
  let password:string = ''
  let characte:string =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+{}[]|\:'

  for (let i = 0; i < 8; i++){
    password += characte.charAt(Math.floor(Math.random() * characte.length))
  }


  return password
}