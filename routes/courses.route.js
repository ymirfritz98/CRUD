const express = require("express");

const router = express.Router();

const coursesController = require("../controllers/courses.controller");

const { validationSchema } = require("../middlewares/validation.schema");

const verifyToken = require("../middlewares/verifyToken");
const userRoles = require("../utils/userRoles");
const allowedTo = require("../middlewares/allowedTo");

router
  .route("/")
  .get(coursesController.getAllCourses)
  .post(
    verifyToken,
    allowedTo(userRoles.ADMIN, userRoles.MANGER),
    validationSchema(),
    coursesController.addCourse
  );

router
  .route("/:courseId")
  .get(coursesController.getCourse)
  .patch(coursesController.updateCourse)
  .delete(
    verifyToken,
    allowedTo(userRoles.ADMIN, userRoles.MANGER),
    coursesController.deleteCourse
  );

module.exports = router;
