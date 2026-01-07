import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";

const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers().then((data: any) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}

      <p>Total users: {users.length}</p>
    </div>
  );
};

export default UsersPage;
