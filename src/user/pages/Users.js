import React from "react";
import UserList from "../components/UserList";
const Users = () => {
  const USERS = [{ id: "uid1", name: "Milad", image: "https://miladkhajavi.ir/img/20180328_123408.jpg", places: 3 }];
  return <UserList items={USERS} />;
};

export default Users;
