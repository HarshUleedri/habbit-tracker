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
  const createdDate = new Date(habit.createdAt);

  const duration = dateAccordingDuration[habit.duration.toLowerCase()];

  // custom hook for progress bar to show progress of habit completion and update progress bar on click of complete button
  const { updateProgressBar, progressBar, currentProgress, isClicked } =
    useProgressBar(duration, habit.id);

  // set current progress in the local storage on every update of progress bar
  localStorage.setItem(`${habit.id}`, currentProgress);

  return (
    <>
      <div key={habit.id} className="px-16 py-16 mb-4 rounded-lg bg-zinc-950">
        <div className="flex justify-between mb-12">
          <p className="text-xs font-thin text-zinc-300">
            Created Date{createdDate.toDateString().slice(4, 15)}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 hover:text-red-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </div>
        <div>
          <h2 className="mb-8 text-3xl font-semibold text-zinc-100">
            {habit.habit}
          </h2>
          <div className="mb-12">{progressBar}</div>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-zinc-300">Duration: {habit.duration}</p>
          {isClicked ? (
            <button
              className="px-4 py-1 rounded-sm bg-zinc-900 text-zinc-300"
              onClick={updateProgressBar}
            >
              today task is done
            </button>
          ) : (
            <button
              className="px-4 py-1 rounded-sm bg-green-950 hover:bg-green-600 hover:text-white text-zinc-300"
              onClick={updateProgressBar}
            >
              Click if completed
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default HabitCard;
