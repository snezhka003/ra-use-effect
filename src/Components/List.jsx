import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function List({ selectUser, selectedUser = [] }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}users.json`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <ul className="List">
      {isError && <li className="List-item">Ошибка загрузки</li>}
      {isLoading && <li className="List-item">Loading...</li>}
      {users.map((item) => {
        return <li key={item.id} className={`${((selectedUser.id === item.id) ? "Active" : '')} List-item`} onClick={selectUser(item)}>{item.name}</li>
      })}
    </ul>
  );
}

List.propTypes = {
  selectUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.any,
}