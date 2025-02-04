import React, { useState } from 'react';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';
import Dashboard from './components/Dashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('counter');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 flex space-x-4">
        {['counter', 'user', 'editor', 'dashboard'].map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)}>{page}</button>
        ))}
      </nav>
      {currentPage === 'counter' ? <Counter /> :
       currentPage === 'user' ? <UserForm /> :
       currentPage === 'editor' ? <RichTextEditor /> : <Dashboard />}
    </div>
  );
};

export default App;