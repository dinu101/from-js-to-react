import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 text-gray-900">
      <h3 className="text-3xl font-semibold mb-4">Projects</h3>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">📦 Laravel CRUD Dashboard with Tailwind</li>
        <li className="bg-white p-4 rounded shadow">🔍 Infinite Scroll Feed with Recommendations</li>
        <li className="bg-white p-4 rounded shadow">📱 React Native App connected to Laravel API</li>
      </ul>
    </section>
  );
};

export default Projects;
