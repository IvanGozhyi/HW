import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from 'url';

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, '..', 'client');
app.use(express.static(clientPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
});

const taskDB = [];

const port = 3000;

app.get('/api/tasks', (request, response) => {
    response.send(taskDB);
});

app.post('/api/tasks', (request, response) => {
    const { title,description,difficulty} = request.body;
    const newTask = {
        id: taskDB.length + 1,
        title,
        description,
        difficulty,
    };
    taskDB.push(newTask);
    response.send(newTask);
});

app.delete('/api/tasks/:id', (request, response) => {
    const {id} = request.params;
    const index = taskDB.findIndex(task => task.id === id);
    if (index === -1){
        return response.sendStatus(400);
    }

    taskDB.splice(index, 1);
    response.send('Task deleted successfully!');
});

app.listen(port, () => {
    console.log('We live on ' + port);
});