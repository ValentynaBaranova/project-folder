import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tasks = ({ lessonId }) => {
  const [file, setFile] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("homework", file);

    try {
      const response = await fetch(`/api/lessons/${lessonId}/submit`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmissionStatus("Задание успешно отправлено на проверку.");
      } else {
        setSubmissionStatus("Ошибка при отправке задания.");
      }
    } catch (error) {
      console.error("Error submitting homework:", error);
      setSubmissionStatus("Произошла ошибка.");
    }
  };

  return (
    <div>
      <Link to={`/`}>Главная</Link>
      <h2>Домашнее задание</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Отправить</button>
      </form>
      {submissionStatus && <p>{submissionStatus}</p>}
    </div>
  );
};

export default Tasks;
