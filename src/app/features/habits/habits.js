import { createSlice, nanoid } from "@reduxjs/toolkit";

// get data from local storage and parse it if it exists otherwise return empty array
const loadData = () => {
  try {
    const serializedData = localStorage.getItem("habits");
    const parsedData = serializedData
      ? JSON.parse(serializedData)
      : { habits: [] };
    return parsedData.habits ? parsedData : { habits: [] };
  } catch (err) {
    console.error(err);
    return { habits: [] };
  }
};

// set data to local storage after converting it to string
const setData = (data) => {
  try {
    localStorage.setItem("habits", JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

// initial state of the reducer is the data from local storage or empty array
const initialState = loadData();

// create slice for habits reducer with addHabit and removeHabit actions and reducer
const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const habit = {
        id: nanoid(),
        habit: action.payload.habit,
        duration: action.payload.duration,
        createdAt: new Date(),
      };
      state.habits.push(habit);
      setData(state);
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
      setData(state);
    },
  },
});

// export actions from slice to use in components
export const { addHabit, removeHabit } = habitsSlice.actions;

export default habitsSlice.reducer;
