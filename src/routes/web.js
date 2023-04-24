import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import questionController from "../controllers/questionController";
import examController from "../controllers/examController";
let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);

  router.post("/api/login", userController.handleLogin);
  router.post("/api/create-user", userController.handleAddUserController);
  router.patch(
    "/api/change-password",
    userController.handleUpdatePasswordUserController
  );

  router.post(
    "/api/create-question",
    questionController.handleAddQuestionController
  );
  router.get(
    "/api/list-questions",
    questionController.handleGetAllQuestionController
  );
  router.delete(
    "/api/delete-question",
    questionController.handleDeleteQuestionController
  );

  router.get(`/api/get-exam`, examController.handleGetExamByIdController);
  router.get("/api/list-exams", examController.handleGetAllExamsController);

  return app.use("/", router);
};

module.exports = initWebRouter;
