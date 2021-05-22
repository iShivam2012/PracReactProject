import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userEntered, setUserEntered] = useState({
    userName: "",
    age: "",
  });

  const [error, setError] = useState();

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
      setError({
        title: "Invalid Input",
        message: "Please enter correct input",
      });
      return event.preventDefault();
    }
  };

  const errorHandler = () => {
    setError(null);
  };
  const userNameHandler = (event) => {
    setUserEntered({ ...userEntered, userName: event.target.value });
  };

  const ageHandler = (event) => {
    setUserEntered({ ...userEntered, age: event.target.value });
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
    </div>
  );
};

export default AddUser;
