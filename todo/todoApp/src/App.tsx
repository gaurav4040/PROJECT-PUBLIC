import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100"} min-h-screen flex flex-col items-center justify-center transition-colors`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
      <TodoList />
    </div>
  );
};

export default App;
