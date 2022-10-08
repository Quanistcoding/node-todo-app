const model = require('../models/todos');


const showTodos = (req,res) => {
    model.find((err,data)=>{
        if(err)return console.log(err);
        res.status(200).json(data);
    });
};

const showOneTodo = (req,res) => {
    model.findOne({_id:req.params.id},(err,data)=>{
        if(err)return console.log(err);
        res.status(200).json(data);
    });
};

const createTodo = (req,res) => {
    model.create(req.body,(err,data)=>{
        if(err){
           res.status(500).send(err.errors.name.message);
           return;
        }
        res.status(201).send(data);
    });
};

const deleteTodo = (req,res) => {
    model.findOneAndDelete({_id:req.params.id},(err,data)=>{
        if(err)return console.log(err);
        res.send(data);
    });
};

const editTodo = (req,res) => {
    model.findOneAndUpdate({_id:req.params.id},req.body,
      //post config
      {
        new: true,
        runValidators: true,
      },// callback
      (err,data)=>{
        if(err)if(err){
            res.status(500).send(err.errors.name.message);
            return;
         }
        res.send(data);
    });
};

module.exports = {
    showTodos,
    createTodo,
    deleteTodo,
    editTodo,
    showOneTodo
};