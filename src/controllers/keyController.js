import keyService from "../services/keyService";
const handleCreateKeyController = async (req, res) => {
  let questionId = req.body.questionId;
  let keyAnswer = req.body.keyAnswer;

  let newKeyData = await keyService.handleCreateKeyService(
    questionId,
    keyAnswer
  );

  return res.status(200).json({
    errorCode: newKeyData.errCode,
    message: newKeyData.errMessage,
    key: newKeyData.key,
  });
};

const handleUpdateKeyController = async (req, res) => {
  let questionId = req.body.questionId;
  let keyAnswer = req.body.keyAnswer;

  let newKeyData = await keyService.handleUpdateKeyService(
    questionId,
    keyAnswer
  );

  return res.status(200).json({
    errorCode: newKeyData.errCode,
    message: newKeyData.errMessage,
    newKey: newKeyData.newKey,
  });
};

const handleGetAllKeyController = async (req, res) => {
  let allKeyData = await keyService.handleGetAllKeyService();
  return res.status(200).json({
    errorCode: allKeyData.errCode,
    message: allKeyData.errMessage,
    keys: allKeyData.keys ? allKeyData.keys : "",
  });
};

const handleGetKeyByIdController = async (req, res) => {
  let questionId = req.query.questionId;
  let keyData = await keyService.handleGetKeyByIdService(questionId);
  return res.status(200).json({
    statusCode: keyData.statusCode,
    message: keyData.message,
    keyAnswer: keyData.keyAnswer,
  });
};

module.exports = {
  handleCreateKeyController: handleCreateKeyController,
  handleUpdateKeyController: handleUpdateKeyController,
  handleGetAllKeyController: handleGetAllKeyController,
  handleGetKeyByIdController: handleGetKeyByIdController,
};
