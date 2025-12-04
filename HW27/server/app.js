import express, { response } from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { projectsMock } from './mockData/projects.js';
import { tasksData } from './mockData/tasks.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/projects', (request, response) => {
  return response.json(projectsMock);
});

app.post('/projects', (request, response) => {
  const data = request.body;
  const newProject = {
    id: uuidv4(),
    ...data,
  };
  projectsMock.push(newProject);
  return response.send(newProject);
});

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;
    const index = projectsMock.findIndex((p) => p.id === id);
    if (index !== -1) {
        const deleted = projectsMock.splice(index, 1);
        return response.json(deleted[0]);
    } else {
        return response.status(404).json({ error: 'Project not found' });
    }
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const data = request.body;

    const index = projectsMock.findIndex((p) => p.id === id);

    if (index === -1) {
        return response.status(404).json({ error: 'Project not found' });
    }

    const updatedProject = { ...projectsMock[index], ...data };
    projectsMock[index] = updatedProject;

    return response.json(updatedProject);
});


app.get('/tasks', (request, response) => {
  return response.json(tasksData);
});

app.get('/tasks/:projectId', (request, response) => {
  const { projectId } = request.params;
  const filtered = tasksData.filter((t) => t.projectId === projectId);
  return response.json(filtered);
});

app.post('/tasks', (request, response) => {
    const data = request.body;
    const newTask = {
        id: uuidv4(),
        ...data,
    };
    tasksData.push(newTask);
    return response.send(newTask);
});

app.delete('/tasks/:taskId', (req, res) => {
    const { taskId } = req.params;
    const index = tasksData.findIndex(t => t.id === taskId);
    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }
    const deleted = tasksData.splice(index, 1);
    res.json(deleted[0]);
});

app.put('/tasks/:taskId', (request, response) => {
    const { taskId } = request.params;
    const data = request.body;
    const index = tasksData.findIndex(t => t.id === taskId);
    if (index === -1) {
        return response.status(404).json({ error: "Task not found" });
    }
    const updatedTask = { ...tasksData[index], ...data };
    tasksData[index] = updatedTask;
    return response.json(updatedTask);
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});