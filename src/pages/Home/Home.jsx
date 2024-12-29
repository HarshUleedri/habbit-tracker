import { useSelector } from "react-redux";
import HabitCard from "./component/HabitCard";
import CreateHabit from "./component/CreateHabit";
const Home = () => {
  const habits = useSelector((state) => state.habits);
  return (
    <>
      <div className="max-w-5xl py-4 mx-auto">
        <div className="mb-12">
          <CreateHabit />
        </div>
        <hr className="my-12 border-t-2 border-zinc-600" />
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </>
  );
};

export default Home;
