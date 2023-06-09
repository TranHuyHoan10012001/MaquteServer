import ExamAnalystService from "../services/exam-analyst";
const handleCreateExamAnalystController = async (req, res) => {
  let examId = req.body.examId;
  let highGrade = req.body.highGrade;
  let commonGrade = req.body.commonGrade;
  let lowGrade = req.body.lowGrade;
  let comments = req.body.comments;

  let newCommentData = await ExamAnalystService.handleCreateCommentService(
    examId,
    highGrade,
    commonGrade,
    lowGrade,
    comments
  );

  return res.status(200).json({
    errorCode: newCommentData.errCode,
    message: newCommentData.errMessage,
    examAnalyst: newCommentData.examAnalyst,
  });
};

const handleGetAnalystByIdController = async (req, res) => {
  let examId = req.query.examId;
  let analystData = await ExamAnalystService.getAnalystByIdService(examId);
  return res.status(200).json({
    statusCode: analystData.statusCode,
    message: analystData.message,
    keyAnswer: analystData.analyst,
  });
};

module.exports = {
  handleCreateExamAnalystController: handleCreateExamAnalystController,
  handleGetAnalystByIdController: handleGetAnalystByIdController,
};
