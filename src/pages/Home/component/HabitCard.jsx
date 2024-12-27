import { useDispatch } from "react-redux";
import useProgressBar from "../../../Hooks/useProgressBar";
import { removeHabit } from "../../../app/features/habits/habits";

// it takes habit as props and returns a card with habit details

const HabitCard = (props) => {
  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  const dateAccordingDuration = {
    "one week": 7,
    "two weeks": 14,
    "three weeks": 21,
    "four weeks": 28,
  };

  // get habit from props
  const { habit } = props;

  const duration = dateAccordingDuration[habit.duration.toLowerCase()];

  // custom hook for progress bar to show progress of habit completion and update progress bar on click of complete button
  const { updateProgressBar, progressBar, currentProgress } = useProgressBar(
    duration,
    habit.id
  );

  // set current progress in the local storage on every update of progress bar
  localStorage.setItem(`${habit.id}`, currentProgress);

  return (
    <>
      <div>
        <div key={habit.id} className="p-4 my-4 rounded-md bg-zinc-800">
          <div>
            <p>streak {currentProgress}</p>
            <h2 className="text-lg font-semibold">{habit.habit}</h2>
            <p className="text-sm">{habit.duration}</p>
          </div>
          <button
            onClick={() => dispatch(removeHabit(habit.id))}
            className="px-4 py-1 rounded-sm bg-red-950 hover:bg-red-600 hover:text-white text-zinc-300"
          >
            Delete
          </button>
          {progressBar}
          <button
            className="px-4 py-1 rounded-sm bg-green-950 hover:bg-green-600 hover:text-white text-zinc-300"
            onClick={updateProgressBar}
          >
            completed
          </button>
        </div>
      </div>
    </>
  );
};

export default HabitCard;
