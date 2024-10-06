const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Маршрут для проверки работы сервера
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/learningPlatform", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// models/User.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  progress: [
    {
      lessonId: Number,
      isCompleted: Boolean,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);

// models/Lesson.js
const mongoose = require("mongoose");
const SchemaLessons = mongoose.Schema;

const lessonSchema = new Schema({
  title: String,
  content: String,
  lessonNumber: Number,
});

module.exports = mongoose.model("Lesson", lessonSchema);

app.post("/submit-homework", async (req, res) => {
  const { userId, lessonId, homework } = req.body;

  // Логика проверки домашнего задания
  const isHomeworkCorrect = checkHomework(homework);

  if (isHomeworkCorrect) {
    // Обновляем прогресс пользователя
    await User.findByIdAndUpdate(
      userId,
      {
        $set: { "progress.$[elem].isCompleted": true },
      },
      {
        arrayFilters: [{ "elem.lessonId": lessonId }],
      }
    );

    return res.json({ success: true });
  }

  return res.json({ success: false });
});
