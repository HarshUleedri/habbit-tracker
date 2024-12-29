import { useSelector } from "react-redux";
import HabitCard from "./component/HabitCard";
import CreateHabit from "./component/CreateHabit";
const Home = () => {
  const habits = useSelector((state) => state.habits);
  console.log(habits);
  return (
    <>
      <div
        className={`${
          habits.length === 0 ? "h-[100vh]" : "h-full"
        } max-w-5xl py-4 mx-auto`}
      >
        <div className="mb-12">
          <CreateHabit />
        </div>
        <hr className="my-12 border-t-2 border-zinc-600" />
        {habits.length > 0 ? (
          habits.map((habit) => <HabitCard key={habit.id} habit={habit} />)
        ) : (
          <p className="text-4xl text-center capitalize text-zinc-300">
            Add your first habit
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
