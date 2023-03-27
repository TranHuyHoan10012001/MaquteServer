import userService from "../services/userService";
const handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let userData = await userService.handleUserLogin(email, password);
  if (!email || !password) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing input parameters",
    });
  }
  return res.status(200).json({
    errorCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};
module.exports = {
  handleLogin: handleLogin,
};
