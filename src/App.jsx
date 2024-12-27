import CreateHabit from "./pages/Home/component/CreateHabit";
import HabitCard from "./pages/Home/component/HabitCard";
import { useSelector } from "react-redux";

const App = () => {
  const habits = useSelector((state) => state.habits);
  return (
    <div className="bg-zinc-900 h-[100vh] text-zinc-300">
      <CreateHabit />
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default App;
