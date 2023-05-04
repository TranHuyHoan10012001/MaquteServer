import db from "../models";
let handleCreateCommentService = (
  examId,
  highGrade,
  commonGrade,
  lowGrade,
  comments
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newCommentData = {};
      let newComment = await db.ExamAnalysts.create({
        examId,
        highGrade,
        commonGrade,
        lowGrade,
        comments,
      });
      newCommentData.errCode = 200;
      newCommentData.errMessage = "Create Exam Analyst Successfully";
      newCommentData.examAnalyst = newComment;
      resolve(newCommentData);
    } catch (error) {
      reject(error);
    }
  });
};

let getAnalystByIdService = (examId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let analyst = {};
      analyst.analyst = await db.ExamAnalysts.findAll({
        where: {
          examId: examId,
        },
      });
      analyst.statusCode = 200;
      analyst.message = "Get key successfully";
      resolve(analyst);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleCreateCommentService: handleCreateCommentService,
  getAnalystByIdService: getAnalystByIdService,
};
