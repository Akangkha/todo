
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <Navbar />
      <section className="m-16">
        <h1 className="font-bold text-4xl p-4 ">User List</h1>
        <div className="flex flex-wrap gap-12">
          {users.map((user) => (
            <Cards
              key={user.id}
              user={user.name}
              email={user.email}
              id={user.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Dashboard;