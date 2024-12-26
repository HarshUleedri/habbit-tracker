import { useState, useEffect } from "react";
import useDropdown from "../../../Hooks/useDropdown";

const CreateHabit = () => {
  const items = ["One Week", "Two Weeks", "Three Weeks", "Four Weeks"];
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    habit: "",
    duration: "",
  });

  const { element, seletctedItem, setSeletctedItem } = useDropdown(items);

  const [habits, setHabit] = useState(() => {
    return JSON.parse(localStorage.getItem("habits")) || [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }),
    [habits];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.habit || !seletctedItem) {
      setError("please fill all the fields");
      return;
    }
    setHabit((prev) => [
      ...prev,
      { habits: formData.habit, duration: seletctedItem },
    ]);
    setFormData({
      habit: "",
      duration: "",
    });
    setSeletctedItem("");
    setError("");
  };

  return (
    <>
      <div className="w-1/2 p-4 bg-zinc-700">
        <form onSubmit={handleSubmit}>
          <label className="text-lg text-zinc-300">Enter Habbi Name </label>
          <input
            name="habit"
            value={formData.habit}
            onChange={handleChange}
            className="w-full p-1 mb-8 text-xl text-zinc-800"
            type="text"
          />
          <label className="text-lg text-zinc-300">Select Duration </label>
          <div name="Duration" className="mt-2 mb-8">
            {element}
            {habits.map((habit, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-lg text-zinc-300">{habit.habits}</p>
                <p className="text-lg text-zinc-300">{habit.duration}</p>
              </div>
            ))}
          </div>
          {error && <p className="text-base text-red-600">{error}</p>}
          <button className="w-full px-4 py-2 bg-blue-950" type="submit">
            Add Habit
          </button>
        </form>
        {habits.map((habit, index) => (
          <div key={index} className="flex justify-between bg-zinc-800">
            <p className="text-lg text-zinc-300">{habit.habits}</p>
            <p className="text-lg text-zinc-300">{habit.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CreateHabit;
