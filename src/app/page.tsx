import { getUsers } from "@/db/users";

export default async function HomePage() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>This is my Next.js app</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            <p>
              Address: {user.street}, {user.suite}, {user.city}, {user.zipcode}
            </p>
            <p>Company: {user.companyName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
