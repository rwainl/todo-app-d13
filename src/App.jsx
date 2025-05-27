import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import FilterButton from "./components/FilterButton";
import Toast from "./components/Toast";
import { useTheme } from "./components/ThemeContext";
import useTodoList from "./hooks/TodoList";

function App() {
  const { isDarkMode, toogleTheme } = useTheme();
  const [toastMessage, setToastMessage] = useState("");
  const [filterMode, setFilterMode] = useState("Semua");

  const showToast = (message) => {
    setToastMessage(message);

    setTimeout(() => {
      setToastMessage("");
    }, 2000);
  };

  const {
    todoList,
    setTodoList,
    addHandler,
    statusHandler,
    editHandler,
    deleteHandler,
  } = useTodoList(showToast);

  const filteredList = todoList.filter((items) => {
    if (filterMode === "Selesai") return items.completed;
    if (filterMode === "Belum Selesai") return !items.completed;
    return true;
  });

  return (
    <>
      {/* <div
        className={`transition-colors duration-500 ${
          isDarkMode ? "bg-black min-h-screen" : "bg-white min-h-screen"
        }`}
      >
        <button
          onClick={toogleTheme}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        >
          Toogle Mode
        </button>
        <Link to="/" className="mx-2 text-blue-500">
          Beranda
        </Link>
        <Link to="/tentang" className="mx-2 text-blue-500">
          Tentang
        </Link> */}
        <div className="max-w-xl text-center my-6 mx-auto bg-gray-400 rounded-lg py-2">
          <p className="text-4xl font-bold">To Do App</p>
        </div>
        <ToDoInput onAdd={addHandler} />
        <ToDoList
          list={filteredList}
          setTodoList={setTodoList}
          onStatus={statusHandler}
          onDelete={deleteHandler}
          onEdit={editHandler}
        />
        <FilterButton setFilter={setFilterMode} />
        {toastMessage && <Toast message={toastMessage} />}
      {/* </div> */}
    </>
  );
}

export default App;
