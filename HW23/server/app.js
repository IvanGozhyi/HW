import express from "express";
import cors from "cors";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];
let idCounter = 1;


app.get("/tasks", (req, res) => {
    res.json(tasks);
});


app.post("/tasks", (req, res) => {
    const { title, description, difficulty } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }

    const newTask = {
        id: idCounter++,
        title,
        description,
        difficulty: Number(difficulty),
        createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});


app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);
    res.json({ message: "Task deleted" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

