import { useState, useEffect } from "react";
import "./App.css";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState(""); //Input text
  const [todos, setTodos] = useState([]);
  const [showFinshed, setshowFinshed] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = (first) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinshed = (e) => {
    setshowFinshed(!showFinshed);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodos(t[0].todo);

    let newTodos = todos.filter((item) => {
      return item.id != id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id != id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="md:container mx-3 md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
        <h1 className="font-bold text-center text-3xl">
          iTask - Manage Your ToDo's At One place
        </h1>
        <div className="addtodo my-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Add a ToDo</h2>
          <div className="flex">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="w-full rounded-full px-5 py-1 bg-white"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className="bg-violet-800 hover:bg-violet-900 disabled:bg-violet-950 p-4 text-sm font-bold py-2 text-white rounded-full mx-2"
            >
              Save
            </button>
          </div>
        </div>
        <input onChange={toggleFinshed} type="checkbox" checked={showFinshed} />{" "}
        Show Completes ToDo's
        <div className="h-px bg-black "></div>
        <h2 className="text-2xl font-bold">Your ToDo's</h2>
        <div className="todos">
          {todos.length === 0 && (
            <div className="m-5 text-bold"> No ToDo's</div>
          )}
          {todos.map((item) => {
            return (
              (showFinshed || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex w-90% my-3 justify-between"
                >
                  <div className="flex gap-5">
                    <input
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      name={item.id}
                      id=""
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-full mx-1"
                    >
                      <CiEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-violet-800 hover:bg-violet-950 p-2 text-sm font-bold py-1 text-white rounded-full mx-1"
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
