const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add', (req, res) => {
    const newTask = req.body.todo;
    tasks.push(newTask);

    res.redirect('/');
});

app.post('/delete/:position', (req, res) => {
    const position = req.params.position;
    if (position >= 0 && position < tasks.length) {
        tasks.splice(position, 1);
    }
    res.redirect('/');
});
app.get('/edit', (req, res) => {
    res.render('edit', { tasks })
})

app.post('/update/:position', (req, res) => {
    const position = req.params.position;
    const editTask = req.body.todo;

    if (position >= 0 && position < tasks.length) {
        tasks[position] = editTask;
    }
    res.redirect('/');
});

console.log(tasks.toString());

const port = 5500
app.listen(port, () => {
    console.log(`Server running on port 5500`);
});
