import db from "../models";

let handleAddQuestionService = (
  content,
  key,
  subject,
  category,
  level,
  author
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let newQuestionData = {};
      let newQuestion = await db.Questions.create({
        content: content,
        key: key,
        subject: subject,
        category: category,
        level: level,
        author: author,
      });
      newQuestionData.errCode = 200;
      newQuestionData.errMessage = "Create question successfully";
      newQuestionData.question = newQuestion;
      resolve(newQuestionData);
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetAllQuestionService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let allQuestionData = {};
      allQuestionData.questions = await db.Questions.findAll();
      allQuestionData.errCode = 200;
      allQuestionData.errMessage = "Get all questions successfully";
      resolve(allQuestionData);
    } catch (error) {
      reject(error);
    }
  });
};

let handleDeleteQuestionService = (questionId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Questions.destroy({
        where: { id: questionId },
      });

      resolve({
        errCode: 0,
        message: "Delete question successfully",
      });
    } catch (error) {
      reject(error);
    }
  });
};

let handleGetQuestionByIdService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let question = {};
      question.question = await db.Questions.findOne({
        where: {
          id: id,
        },
      });
      question.errCode = 200;
      question.errMessage = "Get question successfully";
      resolve(question);
    } catch (error) {
      reject(error);
    }
  });
};

let handleUpdateQuestionService = (
  questionId,
  content,
  key,
  subject,
  category,
  level
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let updateQuestionData = {};
      let updateQuestion = await db.Questions.update(
        {
          content,
          key,
          subject,
          category,
          level,
        },
        {
          where: { id: questionId },
        }
      );
      updateQuestionData.statusCode = 200;
      updateQuestionData.message = "Update successfully";
      updateQuestionData.newQuestion = updateQuestion;
      resolve(updateQuestionData);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleAddQuestionService: handleAddQuestionService,
  handleGetAllQuestionService: handleGetAllQuestionService,
  handleGetQuestionByIdService: handleGetQuestionByIdService,
  handleDeleteQuestionService: handleDeleteQuestionService,
  handleUpdateQuestionService: handleUpdateQuestionService,
};
