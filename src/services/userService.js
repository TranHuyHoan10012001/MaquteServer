import db from "../models";
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkExistEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["email", "id", "password"],
          where: {
            email: email,
          },
        });
        if (user) {
          let hasPassword = await compareUserPassword(email, password);
          if (hasPassword) {
            userData.errCode = 0;
            userData.errMessage = "Ok";
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your emails isn't exist. Please try another email!`;
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

let handleAddUserService = (email, password, firstName, lastName) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newUserData = {};
      let isExist = await checkExistEmail(email);
      if (!isExist) {
        let newUser = await db.User.create({
          firstName,
          lastName,
          email,
          password,
        });
        newUserData.errCode = 0;
        newUserData.errMessage = "Create User Successfully";
        newUserData.user = newUser;
      } else {
        newUserData.errCode = 1;
        newUserData.errMessage = "Email đã được đăng kí";
      }
      resolve(newUserData);
    } catch (error) {
      reject(error);
    }
  });
};

let handleUpdatePasswordUserService = (email, oldPassword, newPassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      let updateUserData = {};
      let isExist = await checkExistEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["email", "id", "password"],
          where: {
            email: email,
          },
        });
        if (user) {
          let hasPassword = await compareUserPassword(email, oldPassword);
          if (hasPassword) {
            updateUserData.errCode = 0;
            updateUserData.errMessage = "Ok";
            let newUser = await db.User.update(
              { password: newPassword },
              { where: { email } }
            );
            updateUserData.user = newUser;
          } else {
            updateUserData.errCode = 3;
            updateUserData.errMessage = "Wrong password";
          }
        }
      } else {
        updateUserData.errCode = 1;
        updateUserData.errMessage = `Your emails isn't exist. Please try another email!`;
      }
      resolve(updateUserData);
    } catch (error) {
      reject(error);
    }
  });
};

let checkExistEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: {
          email: userEmail,
        },
      });
      if (user) resolve(true);
      else resolve(false);
    } catch (error) {
      reject(error);
    }
  });
};

let compareUserPassword = (userEmail, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userPassword = await db.User.findOne({
        where: {
          email: userEmail,
          password: password,
        },
      });
      if (userPassword) resolve(true);
      else resolve(false);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  handleAddUserService: handleAddUserService,
  handleUpdatePasswordUserService: handleUpdatePasswordUserService,
};
