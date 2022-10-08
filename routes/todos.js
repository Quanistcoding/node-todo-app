const express = require("express");
const router = express.Router();
const {showTodos,showOneTodo,createTodo,deleteTodo,editTodo} = require("../controllers/todos")

router.route("/").get(showTodos).post(createTodo);
router.route("/:id").get(showOneTodo).delete(deleteTodo).put(editTodo);

module.exports = router;

