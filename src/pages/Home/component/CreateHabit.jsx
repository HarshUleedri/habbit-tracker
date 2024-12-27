import { useState } from "react";
import useDropdown from "../../../Hooks/useDropdown";
import { useDispatch } from "react-redux";
import { addHabit } from "../../../app/features/habits/habits";

const CreateHabit = () => {
  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // list of dropdown items
  const items = ["One Week", "Two Weeks", "Three Weeks", "Four Weeks"];

  // error for form validation
  const [error, setError] = useState("");

  // holds form data
  const [formData, setFormData] = useState({
    habit: "",
    duration: "",
  });

  // custom hook for dropdown menu
  const { element, seletctedItem, setSeletctedItem } = useDropdown(items);

  // setFormData((prev) => ({
  //   ...prev,
  //   duration: seletctedItem,
  // }));

  // handle change function for form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit function for form data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.habit || !seletctedItem) {
      setError("please fill all the fields");
      return;
    }
    // setHabit((prev) => [
    //   ...prev,
    //   { habits: formData.habit, duration: seletctedItem },
    // ]);

    const updatedFormData = {
      ...formData,
      duration: seletctedItem,
    };
    dispatch(addHabit(updatedFormData));

    // reset form data
    setFormData({
      habit: "",
      duration: "",
    });

    // reset dropdown
    setSeletctedItem("");

    // reset error
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
          </div>
          {error && <p className="text-base text-red-600">{error}</p>}
          <button className="w-full px-4 py-2 bg-blue-950" type="submit">
            Add Habit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateHabit;
