import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import questionController from "../controllers/questionController";
import examController from "../controllers/examController";
import keyController from "../controllers/keyController";
import examAnalystController from "../controllers/examAnalyst";
import examService from "../services/examService";
import multer from "multer";

let router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const uploadFile = multer({ storage: storage });

let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);

  //User
  router.post("/api/login", userController.handleLogin);
  router.post("/api/create-user", userController.handleAddUserController);
  router.patch(
    "/api/change-password",
    userController.handleUpdatePasswordUserController
  );

  //Question
  router.post(
    "/api/create-question",
    questionController.handleAddQuestionController
  );
  router.get(
    "/api/list-questions",
    questionController.handleGetAllQuestionController
  );
  router.get(
    "/api/get-question",
    questionController.handleGetQuestionByIdController
  );
  router.delete(
    "/api/delete-question",
    questionController.handleDeleteQuestionController
  );

  // Exam
  router.get(`/api/get-exam`, examController.handleGetExamByIdController);
  router.get("/api/list-exams", examController.handleGetAllExamsController);

  //Exam Upload file
  router.post(
    "/api/upload-exam",
    uploadFile.single("file"),
    async function (req, res) {
      let subject = req.body.subject;
      let category = req.body.category;
      let questions = req.body.questions;
      let timeLimit = req.body.timeLimit;
      let maxScore = req.body.maxScore;
      let file = req.body.file;
      if (file) res.send(file);
      let newExamData = await examService.handleCreateExamService(
        subject,
        category,
        questions,
        timeLimit,
        maxScore,
        file.name
      );
      const result = {
        errorCode: newExamData.errCode,
        message: newExamData.errMessage,
        exam: newExamData.exam ? newExamData.exam : "",
      };
      console.log("result: ", result);

      //   return result;
    }
  );
  router.post("/api/create-exam", examController.handleCreateExamController);

  // Key Answer
  router.post("/api/create-key", keyController.handleCreateKeyController);
  router.patch(
    "/api/update-question-key",
    keyController.handleUpdateKeyController
  );

  router.get("/api/list-keys", keyController.handleGetAllKeyController);

  // Exam Analyst
  router.post(
    "/api/create-exam-analyst",
    examAnalystController.handleCreateExamAnalystController
  );

  return app.use("/", router);
};

module.exports = initWebRouter;
