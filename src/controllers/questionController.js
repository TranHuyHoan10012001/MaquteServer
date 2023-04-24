import questionService from "../services/questionService";
const handleAddQuestionController = async (req, res) => {
  let content = req.body.content;
  let subject = req.body.subject;
  let category = req.body.category;
  let level = req.body.level;
  let newQuestionData = await questionService.handleAddQuestionService(
    content,
    subject,
    category,
    level
  );

  if (!content || !subject || !category || !level) {
    return res.status(500).json({
      errorCode: 500,
      message: "Missing input parameters",
    });
  }
  return res.status(200).json({
    errorCode: newQuestionData.errCode,
    message: newQuestionData.errMessage,
    question: newQuestionData.question ? newQuestionData.question : {},
  });
};

const handleGetAllQuestionController = async (req, res) => {
  let allQuestionData = await questionService.handleGetAllQuestionService();
  return res.status(200).json({
    errorCode: allQuestionData.errCode,
    message: allQuestionData.errMessage,
    questions: allQuestionData.questions ? allQuestionData.questions : {},
  });
};

const handleDeleteQuestionController = async (req, res) => {
  if (!req.body) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing userId",
    });
  }
  let message = await questionService.handleDeleteQuestionService(req.body.id);
  return res.status(200).json(message);
};

module.exports = {
  handleAddQuestionController: handleAddQuestionController,
  handleGetAllQuestionController: handleGetAllQuestionController,
  handleDeleteQuestionController: handleDeleteQuestionController,
};
