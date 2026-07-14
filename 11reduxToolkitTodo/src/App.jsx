import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import { Provider } from "react-redux"
import { Store } from './App/Store'
import "./feature/style/App.scss"

function App() {

  return (
    <Provider store={Store}>
      <h1>Redux Project</h1>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
