import React, { useEffect, useState } from "react";

interface UserData {
  name: string;
  floor: number;
  parent: string | null;
  arank: string;
  afileView: string;
  afileEdit: string;
  aorganizationManipulation: string;
  aworkspaceManipulation: string;
}

const Test = () => {
  const [users, setUsers] = useState<UserData[]>([]); // Use the 'UserData' type

  const fetchUserData = () => {
    fetch("http://pcothub.com/v2/search/organization/rank?organization=group-tester-org")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;
