import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [{
        id: 1,
        todoText: "DSA",
        complete: false
    }],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleTodo: () => {}
})

export const useTodo = () => { return useContext(todoContext)};

export const TodoProvider = todoContext.Provider;
