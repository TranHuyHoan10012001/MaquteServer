import examService from "../services/examService";

const handleGetExamByIdController = async (req, res) => {
  let examId = req.query.id;
  let examData = await examService.handleGetExamByIdService(examId);
  return res.status(200).json({
    errorCode: examData.errCode,
    message: examData.errMessage,
    exam: examData.exam ? examData.exam : {},
  });
};

const handleGetAllExamsController = async (req, res) => {
  let allExamData = await examService.handleGetAllExams();
  return res.status(200).json({
    errorCode: allExamData.errCode,
    message: allExamData.errMessage,
    listExam: allExamData.listExams ? allExamData.listExams : {},
  });
};
const handleCreateExamController = async (req, res) => {
  let subject = req.body.subject;
  let category = req.body.category;
  let questions = req.body.questions;
  let timeLimit = req.body.timeLimit;
  let maxScore = req.body.maxScore;
  let file = req.file;
  let newExamData = await examService.handleCreateExamService(
    subject,
    category,
    questions,
    timeLimit,
    maxScore,
    file
  );
  return res.status(200).json({
    errorCode: newExamData.errCode,
    message: newExamData.errMessage,
    exam: newExamData.exam ? newExamData.exam : "",
  });
};
module.exports = {
  handleGetExamByIdController: handleGetExamByIdController,
  handleGetAllExamsController: handleGetAllExamsController,
  handleCreateExamController: handleCreateExamController,
};
