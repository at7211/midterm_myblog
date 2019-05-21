const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const questionRoutes = express.Router();
const PORT = 4000;
let Question = require('./models/question');
let Grade = require('./models/grade');
const gradeRoutes = express.Router();

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://jocelyn:0000@cluster0-qns5z.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

questionRoutes.route('/').get(function(req, res) {
  Question.find(function(err, questions) {
      if (err) {
          console.log(err);
          console.log("error");
      } else {
          res.json(questions);
      }
  });
});

questionRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Question.findById(id, function(err, question) {
        res.json(question)
        .catch(err => {
            res.status(420).send("Update not possible");
        });;
    });
});

questionRoutes.route('/update/:id').post(function(req, res) {
    Question.findById(req.params.id, function(err, question) {
        if (!question)
            res.status(404).send("data is not found");
        else
            question.question = req.body.question;
            question.option_a = req.body.option_a;
            question.option_b = req.body.option_b;
            question.option_c = req.body.option_c;
            question.option_d = req.body.option_d;
            question.answer = req.body.answer;
            question.bywhom = req.body.bywhom;
            question.save().then(question => {
                res.json('Question updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
questionRoutes.route('/add').post(function(req, res) {
    let question = new Question(req.body);
    question.save()
        .then(question => {
            res.status(200).json({'question': 'question added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new question failed');
        });
});
questionRoutes.route('/delete/:id').delete(function(req, res) {
    Question.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Todo successfully deleted",
            id: req.params.id
        };
        return res.status(200).send(response);
    });
});
app.use('/questions', questionRoutes);
app.use('/grades', gradeRoutes);

gradeRoutes.route('/').get(function(req, res) {
    Grade.find(function(err, grades) {
        if (err) {
            console.log(err);
            console.log("error");
        } else {
            res.json(grades);
        }
    });
});
gradeRoutes.route('/add').post(function(req, res) {
    let grade = new Grade(req.body);
    grade.save()
        .then(grade => {
            res.status(200).json({'grade': 'grade added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new question failed');
        });
});