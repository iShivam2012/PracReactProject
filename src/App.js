import React, { useState } from "react";
import AddUser from "./User/AddUser";
import UserList from "./User/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const usersData = (userEntered) => {
    setUsers([...users, userEntered]);
  };
  return (
    <div>
      <AddUser onAddUser={usersData} />
      <UserList users={users} />
    </div>
  );
}

export default App;
