import db from "../models";

let handleGetExamByIdService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let exam = {};
      exam.exam = await db.Exam.findOne({
        where: {
          id: id,
        },
      });
      exam.errCode = 200;
      exam.errMessage = "Get exam successfully";

      resolve(exam);
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetAllExams = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let allExams = {};
      allExams.listExams = await db.Exam.findAll();
      allExams.errCode = 200;
      allExams.errMessage = "Get all exams successfully";
      resolve(allExams);
    } catch (error) {
      reject(error);
    }
  });
};

let handleCreateExamService = (
  subject,
  category,
  questions,
  timeLimit,
  maxScore,
  file
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newExamData = {};
      let newExam = await db.Exam.create({
        subject,
        category,
        questions,
        timeLimit: 90,
        maxScore: 10,
        file,
      });
      newExamData.errCode = 200;
      newExamData.errMessage = "Create exam successfully";
      newExamData.exam = newExam;
      resolve(newExamData);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleGetExamByIdService: handleGetExamByIdService,
  handleGetAllExams: handleGetAllExams,
  handleCreateExamService: handleCreateExamService,
};
