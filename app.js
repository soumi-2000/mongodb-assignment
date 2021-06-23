const mongoose = require('mongoose');

//connecting node script with mongodb
mongoose.connect('mongodb://localhost:27017/TasksDB', {useNewUrlParser: true});

//creating a new schema and a model
const taskSchema = new mongoose.Schema({
  description: String,
  completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

//creating new tasks as per the specified schema
const task1 = new Task({
  description: 'Grocery Shopping',
  completed: false
});

const task2 = new Task({
  description: 'Exercise',
  completed: true
});

const task3 = new Task({
  description: 'Studying',
  completed: true
});

const task4 = new Task({
  description: 'Cooking',
  completed: false
});

//saving files to database
Task.insertMany([task1, task2, task3, task4], function(err){
  if(err){
    console.log(err);
  } else {
    console.log('Successfully saved all the tasks in TasksDB');
  }
});

//find and display tasks as per a given condition
Task.find(function(err, tasks){
  if(err){
    console.log(err);
  }
  else{
    tasks.forEach(function(task){
      if (task.completed == false){
        console.log(task.description);
      }
    });
  }
});

//updating tasks by id where complete status is false
Task.updateOne({_id: 60d2d7614a4cbe3ff67bb788}, {completed: true} function(err){
  if(err){
    console.log(err);
  }
  else{
    comsole.log('Successfully updated task');
  }
});

Task.updateOne({_id: 60d2d7614a4cbe3ff67bb78b}, {completed: true} function(err){
  if(err){
    console.log(err);
  }
  else{
    comsole.log('Successfully updated task');
  }
});

//deleting tasks by a specific id only
Task.deleteOne({_id: 60d2d7614a4cbe3ff67bb78a}, function(err){
  if(err){
    console.log(err);
  }
  else{
    comsole.log('Successfully deleted task');
  }
});
