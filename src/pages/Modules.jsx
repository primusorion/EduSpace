import React from 'react';
import { Link } from 'react-router-dom';
import './Modules.css';

const modules = [
  {
    id: 1,
    title: 'Web Development Basics',
    description: 'Learn the fundamentals of web development, including HTML, CSS, and JavaScript.',
  },
  {
    id: 2,
    title: 'React for Beginners',
    description: 'Get started with React by understanding its core concepts like components, state, and props.',
  },
  {
    id: 3,
    title: 'JavaScript Advanced',
    description: 'Dive deeper into JavaScript with topics like closures, promises, and asynchronous programming.',
  },
];

function Modules() {
  return (
    <div className="modules-container">
      <h2>Learning Modules</h2>
      <div className="modules-list">
        {modules.map((module) => (
          <div key={module.id} className="module-card">
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            {/* Removed the change for now and just link to quizzes page */}
            <Link to={`/quizzes`} className="view-button">
              View Quizzes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modules;
