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

module.exports = {
  handleCreateKeyService: handleCreateKeyService,
  handleUpdateKeyService: handleUpdateKeyService,
};