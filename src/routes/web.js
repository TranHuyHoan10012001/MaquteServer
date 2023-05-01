import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import questionController from "../controllers/questionController";
import examController from "../controllers/examController";
import keyController from "../controllers/keyController";
import examAnalystController from "../controllers/examAnalyst";
let router = express.Router();

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

  // Key Answer
  router.post("/api/create-key", keyController.handleCreateKeyController);
  router.patch(
    "/api/update-question-key",
    keyController.handleUpdateKeyController
  );

  // Exam Analyst
  router.post(
    "/api/create-exam-analyst",
    examAnalystController.handleCreateExamAnalystController
  );

  return app.use("/", router);
};

module.exports = initWebRouter;
