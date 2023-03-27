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
            userData.errCode = 1;
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
};
