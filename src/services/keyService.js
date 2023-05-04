import db from "../models";

let handleCreateKeyService = (questionId, keyAnswer) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newKeyData = {};
      let newKey = await db.Keys.create({
        questionId: questionId,
        keyAnswer: keyAnswer,
      });
      newKeyData.errCode = 200;
      newKeyData.errMessage = "Create key answer successfully";
      newKeyData.key = newKey;
      resolve(newKeyData);
    } catch (error) {
      reject(error);
    }
  });
};

let handleUpdateKeyService = (questionId, newKeyAnswer) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newKeyData = {};
      let newKey = await db.Keys.update(
        {
          keyAnswer: newKeyAnswer,
        },
        {
          where: {
            questionId,
          },
        }
      );
      newKeyData.errCode = 200;
      newKeyData.errMessage = "Change question successfully";
      newKeyData.newKey = newKey;
      resolve(newKeyData);
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetAllKeyService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let allKeyData = {};
      allKeyData.keys = await db.Keys.findAll();
      allKeyData.errCode = 200;
      allKeyData.errMessage = "Get all keys successfully";
      resolve(allKeyData);
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetKeyByIdService = (questionId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let key = {};
      key.keyAnswer = await db.Keys.findOne({
        where: {
          questionId: questionId,
        },
      });
      key.statusCode = 200;
      key.message = "Get key successfully";
      resolve(key);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  handleCreateKeyService: handleCreateKeyService,
  handleUpdateKeyService: handleUpdateKeyService,
  handleGetAllKeyService: handleGetAllKeyService,
  handleGetKeyByIdService: handleGetKeyByIdService,
};
