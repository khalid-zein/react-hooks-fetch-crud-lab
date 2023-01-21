import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function onQuestionUpdate(updatedQuestions) {
    setQuestions(updatedQuestions)
  }
  
  function onAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function onDeleteQuestion(id) {
    const updatedQuestions = questions.filter(question => question.id !== id)
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm 
        questions={questions}
        setQuestions={setQuestions}
        onAddQuestion={onAddQuestion}
      /> : 
      <QuestionList 
      questions={questions}
      setQuestions={setQuestions}
      onQuestionUpdate={onQuestionUpdate}
      onDeleteQuestion={onDeleteQuestion}
      />}
    </main>
  );
}

export default App;
