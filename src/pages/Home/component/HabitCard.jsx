import useProgressBar from "../../../Hooks/useProgressBar";

const HabitCard = () => {
  const { updateProgressBar, progressBar } = useProgressBar(7);

  return (
    <>
      {progressBar}
      <button
        className="px-4 py-1 rounded-sm bg-green-950 hover:bg-green-600 hover:text-white text-zinc-300"
        onClick={updateProgressBar}
      >
        completed
      </button>
    </>
  );
};

export default HabitCard;
