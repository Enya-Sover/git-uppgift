import UserList from "./pages/UserList";
import "./App.css";
import Todo from "./components/Todo";
import Miniräknare from "./pages/Miniräknare";

function App() {
  return (
    <>
      <UserList />
      <Todo />
      <h1>Välkommen till grabbarnas lek</h1>
      <Miniräknare />
    </>
  );
}

export default App;
