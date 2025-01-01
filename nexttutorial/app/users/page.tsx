import React from "react";
import UserButton from "../components/UserButton";
interface UserType {
  id: number;
  name: string;
}
const Users = async () => {
  const userResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const userData: UserType[] = await userResponse.json();
  return (
    <div>
      <h1>Look I am a page now</h1>

      <div>
        <ol className="w-1/4">
          {userData.map((data) => (
            <li key={data.id}>
              <div className="flex justify-between">
                <div>
                  <h1>{data.name}</h1>
                </div>
                <div>
                  <UserButton id={data.id}/>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Users;
