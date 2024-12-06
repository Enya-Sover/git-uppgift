import { useState, useRef, useEffect } from "react";

export default function UserList() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [sort, setSort] = useState(false);
  const [users, setUsers] = useState([
    {
      user_id: 0,
      username: "user1",
      password: "password1",
    },
    {
      user_id: 1,
      username: "user2",
      password: "password2",
    },
  ]);

  const deleteUser = (index) => {
    const updatedUsers = users.filter((user, i) => index !== i);
    setUsers(updatedUsers);
  };

  const addUser = () => {
    const newUsername = usernameRef.current.value;
    const newPassword = passwordRef.current.value;
    const id = users.length;
    if (newUsername !== "" && newPassword !== "") {
      const newUser = {
        user_id: id + 1,
        username: newUsername,
        password: newPassword,
      };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      usernameRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      alert("Fields can't be empty");
    }
  };

  const sortById = () => {
    setSort((prev) => !prev);
  };

  useEffect(() => {
    const updatedUsers = [...users].sort((a, b) => {
      return sort ? b.user_id - a.user_id : a.user_id - b.user_id;
    });
    setUsers(updatedUsers);
  }, [sort]);

  return (
    <>
      <h1 className="text-[45px]">User list</h1>
      <section className="flex flex-col gap-[20px] mb-[50px] mt-[50px]">
        <input type="username" placeholder="Enter username" ref={usernameRef} />
        <input type="password" placeholder="Enter password" ref={passwordRef} />
        <button onClick={addUser}>Add user</button>
        <button onClick={sortById}>
          {sort ? "Turn on sort by id" : "Turn off sort by id"}
        </button>
      </section>

      {users.map((user, i) => (
        <>
          <li className="flex flex-col" key={i}>
            <p>UserID: {user.user_id}</p>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
          </li>
          <button onClick={() => deleteUser(i)}>Delete user</button>
        </>
      ))}
    </>
  );
}
