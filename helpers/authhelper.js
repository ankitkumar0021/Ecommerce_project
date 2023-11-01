import bcrypt from "bcrypt";

//function for hashpassword
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.log(error);
  }
};
//function for comparePassword
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
