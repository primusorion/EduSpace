import React from 'react';
import { useParams } from 'react-router-dom';
import './ModuleDetails.css';

const moduleDetails = [
  {
    id: 1,
    title: 'Web Development Basics',
    description: 'Learn the fundamentals of web development, including HTML, CSS, and JavaScript.',
    lessons: [
      'Introduction to HTML',
      'Styling with CSS',
      'JavaScript Basics',
    ],
    quizLink: '/quizzes/1',
  },
  {
    id: 2,
    title: 'React for Beginners',
    description: 'Get started with React by understanding its core concepts like components, state, and props.',
    lessons: [
      'Setting up a React App',
      'Understanding JSX',
      'State and Props in React',
    ],
    quizLink: '/quizzes/2',
  },
  {
    id: 3,
    title: 'JavaScript Advanced',
    description: 'Dive deeper into JavaScript with topics like closures, promises, and asynchronous programming.',
    lessons: [
      'Closures in JavaScript',
      'Promises and Async/Await',
      'JavaScript Design Patterns',
    ],
    quizLink: '/quizzes/3',
  },
];

function ModuleDetails() {
  const { id } = useParams();
  const module = moduleDetails.find((module) => module.id === parseInt(id));

  if (!module) {
    return <div>Module not found</div>;
  }

  return (
    <div className="module-details-container">
      <h2>{module.title}</h2>
      <p>{module.description}</p>
      <h3>Lessons</h3>
      <ul>
        {module.lessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
      <a href={module.quizLink} className="start-quiz-button">
        Start Quiz
      </a>
    </div>
  );
}

export default ModuleDetails;
