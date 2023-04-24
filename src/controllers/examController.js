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

module.exports = {
  handleGetExamByIdController: handleGetExamByIdController,
  handleGetAllExamsController: handleGetAllExamsController,
};
