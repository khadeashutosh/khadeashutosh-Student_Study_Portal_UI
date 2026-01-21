import React, { useState } from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Dashboard from '../components/modules/Dashboard/Dashboard';
import NotesList from '../components/modules/Notes/NotesList';
import HomeworkList from '../components/modules/Homework/HomeworkList';
import YouTubeSearch from '../components/modules/YouTube/YouTubeSearch';
import TodoList from '../components/modules/Todo/TodoList';
import BookList from '../components/modules/Books/BookList';
import DictionarySearch from '../components/modules/Dictionary/DictionarySearch';
import WikipediaSearch from '../components/modules/Wikipedia/WikipediaSearch';
import MathConversion from '../components/modules/MathConversion/MathConversion';

const MainDashboard = ({ user, onLogout }) => {
  const [activeModule, setActiveModule] = useState('dashboard');

  const modules = {
    dashboard: Dashboard,
    notes: NotesList,
    homework: HomeworkList,
    youtube: YouTubeSearch,
    todo: TodoList,
    books: BookList,
    dictionary: DictionarySearch,
    wikipedia: WikipediaSearch,
    math: MathConversion,
  };

  const CurrentModule = modules[activeModule] || Dashboard;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        activeModule={activeModule}
        onModuleChange={setActiveModule}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          user={user}
          onLogout={onLogout}
        />

        {/* Module Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <CurrentModule />
        </main>
      </div>
    </div>
  );
};

export default MainDashboard;