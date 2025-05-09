import React, { useState, useEffect } from 'react';
import './Quizzes.css';

const quizzes = [
  {
    id: 1,
    title: 'HTML Basics Quiz',
    questions: [
      {
        question: 'What does HTML stand for?',
        options: ['HyperText Markup Language', 'HighText Machine Language', 'HyperText Managing Language'],
        answer: 0,
      },
      {
        question: 'Which tag is used to define an HTML document?',
        options: ['<html>', '<body>', '<head>'],
        answer: 0,
      },
    ],
  },
  {
    id: 2,
    title: 'CSS Fundamentals Quiz',
    questions: [
      {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Creative Styling Sheets', 'Computer Style Sheets'],
        answer: 0,
      },
      {
        question: 'Which property is used to change the font size in CSS?',
        options: ['font-size', 'text-size', 'font-style'],
        answer: 0,
      },
    ],
  },
];

function Quizzes() {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // Timer in seconds (10 minutes)
  const [quizInProgress, setQuizInProgress] = useState(false);

  useEffect(() => {
    let timer;
    if (quizInProgress && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setQuizCompleted(true);  // Automatically mark quiz as complete when time is up
    }
    return () => clearInterval(timer);
  }, [quizInProgress, timeLeft]);

  const startQuiz = (quizId) => {
    const selectedQuiz = quizzes.find((quiz) => quiz.id === quizId);
    if (selectedQuiz) {
      setCurrentQuiz(selectedQuiz);
      setSelectedAnswers(new Array(selectedQuiz.questions.length).fill(null));
      setQuizCompleted(false);
      setQuizInProgress(true);
      setTimeLeft(600); // Reset timer to 10 minutes
    } else {
      console.error('Quiz not found');
    }
  };

  const handleAnswer = (questionIndex, answerIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const submitQuiz = () => {
    setQuizCompleted(true);
  };

  const calculateScore = () => {
    return selectedAnswers.filter(
      (answer, index) => answer === currentQuiz.questions[index].answer
    ).length;
  };

  const progress = (selectedAnswers.length / currentQuiz?.questions.length) * 100;

  return (
    <div className="quizzes-container">
      {!currentQuiz ? (
        <div className="quiz-list">
          <h2>Available Quizzes</h2>
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-card">
              <h3>{quiz.title}</h3>
              <button onClick={() => startQuiz(quiz.id)}>Start Quiz</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="quiz-content">
          <h2>{currentQuiz.title}</h2>

          <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>

          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>

          {currentQuiz.questions.map((question, index) => (
            <div key={index} className="question">
              <p>{question.question}</p>
              <div className="options">
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      checked={selectedAnswers[index] === optionIndex}
                      onChange={() => handleAnswer(index, optionIndex)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={submitQuiz}
            disabled={selectedAnswers.includes(null)}
          >
            Submit Quiz
          </button>

          {quizCompleted && (
            <div className="quiz-result">
              <h3>Quiz Results</h3>
              <p>
                You answered {calculateScore()} out of {currentQuiz.questions.length} questions correctly.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quizzes;
