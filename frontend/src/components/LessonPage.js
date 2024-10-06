import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import Tasks from "./Tasks";

const LessonPage = () => {
  const { id } = useParams();
  const lessons = useSelector((state) => state.lessons); // Получаем уроки из Redux
  const lesson = lessons.find((lesson) => lesson.id === parseInt(id));

  if (!lesson) {
    return <p>Урок не найден.</p>;
  }

  return (
    <div>
      <h1>{lesson.title}</h1>
      <div>{parse(lesson.content)}</div>
      <Tasks lessonId={lesson.id} />
    </div>
  );
};

export default LessonPage;
