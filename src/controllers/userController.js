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
    token: userData.token,
  });
};

const handleUpdatePasswordUserController = async (req, res) => {
  let email = req.body.email;
  let oldPassword = req.body.oldPassword;
  let newPassword = req.body.newPassword;

  let updateUserData = await userService.handleUpdatePasswordUserService(
    email,
    oldPassword,
    newPassword
  );
  if (!email || !oldPassword || !newPassword) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing input parameters",
    });
  }
  return res.status(200).json({
    errorCode: updateUserData.errCode,
    message: updateUserData.errMessage,
    user: updateUserData.user ? updateUserData.user : {},
  });
};

const handleAddUserController = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let newUserData = await userService.handleAddUserService(
    email,
    password,
    firstName,
    lastName
  );
  if (!email || !password || !lastName || !firstName) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing input parameters",
    });
  }
  return res.status(200).json({
    errorCode: newUserData.errCode,
    message: newUserData.errMessage,
    user: newUserData.user ? newUserData.user : {},
  });
};
module.exports = {
  handleLogin: handleLogin,
  handleAddUserController: handleAddUserController,
  handleUpdatePasswordUserController: handleUpdatePasswordUserController,
};
