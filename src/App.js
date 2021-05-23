import React, { Fragment, useState } from "react";
import AddUser from "./User/AddUser";
import UserList from "./User/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const usersData = (userEntered) => {
    setUsers([...users, userEntered]);
  };
  return (
    <Fragment>
      <AddUser onAddUser={usersData} />
      <UserList users={users} />
    </Fragment>
  );
}

export default App;
