const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const students = {
    1: { name: "Sarah", lastName: "Sole", email: "sarahsovi@unisabana.edu.co", id: "0000332205" },
    2: { name: "Sofia", lastName: "Guevara", email: "sofiaguro@unisabana.edu.co", id: "0000324257" }
};

app.get("/user-info/:id", (req, res) => {
    const studentId = req.params.id;

    if (!/^\d+$/.test(studentId) || !students[studentId]) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    res.json(students[studentId]);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}

module.exports = app;