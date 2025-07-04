import React, { useState, useEffect } from "react";
import UserTableRow from "./table";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/read");
      if (response.data.success) {
        console.log(response.data.data);
        setUsers(response.data.data);
      } else {
        console.error("Failed to fetch users:", response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <h1 className="p-5 text-green-500">
          Refresh After Updating or Deleting
        </h1>
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-black-900 bg-gray-100 uppercase border-b border-gray-600">
                {/* <th class="px-4 py-3">ID</th> */}
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">GitHub Username</th>
                <th className="px-4 py-3">Your Message</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users &&
                users.map((user) => (
                  <UserTableRow
                    key={user._id}
                    name={user.name}
                    githubUsername={user.githubUsername}
                    yourQuote={user.YourQuote}
                    id={user._id}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserList;
