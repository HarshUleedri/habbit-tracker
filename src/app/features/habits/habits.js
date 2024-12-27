import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  habits: [{ id: 1, habit: "Drink water", duration: 7 }],
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const habit = {
        id: nanoid(),
        habit: action.payload.habit,
        duration: action.payload.duration,
      };
      state.habits.push(habit);
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload
      );
    },
  },
});

export const { addHabit, removeHabit } = habitsSlice.actions;

export default habitsSlice.reducer;
