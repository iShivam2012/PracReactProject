import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userEntered, setUserEntered] = useState({
    userName: "",
    age: "",
  });
  const addUserHandler = (event) => {
    if (
      userEntered.userName.trim().length > 0 &&
      userEntered.age &&
      +userEntered.age > 1
    ) {
      console.log(userEntered);
      setUserEntered({ userName: "", age: "" });
      props.onAddUser(userEntered);
      return event.preventDefault();
    } else {
      return event.preventDefault();
    }
  };
  const userNameHandler = (event) => {
    setUserEntered({ ...userEntered, userName: event.target.value });
  };
  const ageHandler = (event) => {
    setUserEntered({ ...userEntered, age: event.target.value });
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="Username">Username</label>
        <input
          id="username"
          value={userEntered.userName}
          type="text"
          onChange={userNameHandler}
        />
        <label htmlFor="Age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={userEntered.age}
          onChange={ageHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
