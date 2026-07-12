import { useState, useEffect } from "react";
import { TodoProvider } from "./context/index"
import { TodoForm, TodoItem } from "./components/index"

function App() {
    const [todos, setTodos] = useState(function () {
        const savedTodos = JSON.parse(localStorage.getItem("todos"))

        return savedTodos || []
    })

    const addTodo = (todo) => {
        setTodos((prev) => {
            return [
                {
                    id: Date.now(),
                    ...todo
                },
                ...prev
            ]
        })
    };

    const updateTodo = (id, todo) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id ? todo : prevTodo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => {
            return prev.filter((prevTodo) => {
                return prevTodo.id !== id
            })
        })
    };

    const toggleTodo = (id) => {
        setTodos((prev) => {
            return prev.map((prevTodo) => {
                if (prevTodo.id === id) {
                    return {
                        ...prevTodo,
                        complete: !prevTodo.complete
                    }
                } else {
                    return prevTodo;
                }
            })
        })
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                            todos.map((todo) => {
                                return <TodoItem key={todo.id} todo={todo} />
                            })
                        }
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
