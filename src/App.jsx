import UserList from "./pages/UserList";
import Miniräknare from "./pages/Miniräknare";

import "./App.css";

function App() {
  return (
    <>
      <h1>Välkommen till grabbarnas lek</h1>
      <Miniräknare />
      <UserList />
    </>
  );
}

export default App;
