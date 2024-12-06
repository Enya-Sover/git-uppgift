import UserList from "./pages/UserList";
import "./App.css";
import Todo from "./components/Todo";
import Miniräknare from "./pages/Miniräknare";

function App() {
  return (
    <>
      <h1>Välkommen till grabbarnas lek</h1>
      <UserList />
      <hr />
      <Todo />
      <hr />
      <Miniräknare />
    </>
  );
}

export default App;
