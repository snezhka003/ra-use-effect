import { useState } from 'react';
import List from "./List";
import Details from "./Details";

export default function User() {
  const [selectedUser, setSelectedUser] = useState(undefined);
  console.log(selectedUser);

  const selectUser = (user) => {
    return () => {
        setSelectedUser(user);
    }
  }

  return (
    <div className="User">
      <List selectUser={selectUser} selectedUser={selectedUser} />
      <Details info={selectedUser} />
    </div>
  );
}