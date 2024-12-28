import { useState } from "react";
import ProgressBar from "../components/common/ProgressBar";

const useProgressBar = (totalProgress = 7, localStorageId) => {
  const datekey = `${localStorageId}-date`;
  // set current progress to 0 if there is no value in local storage
  const [currentProgress, setCurrentProgress] = useState(() => {
    return parseInt(localStorage.getItem(`${localStorageId}`)) || 0;
  });

  // get current date for local storage key to check if the progress is updated today
  const currentDate = new Date().toDateString();
  // check if the progress is updated today or not and set the state accordingly
  const [isClicked, setIsClicked] = useState(() => {
    return localStorage.getItem(datekey) === currentDate;
  });

  // function to update progress bar
  const updateProgressBar = () => {
    const todaysDate = new Date().toDateString();

    if (isClicked) return;

    setCurrentProgress((prev) => {
      return prev >= totalProgress ? totalProgress : prev + 1;
    });
    localStorage.setItem(datekey, todaysDate);
    setIsClicked(true);
  };

  // calculate progress
  const Progress = (currentProgress / totalProgress) * 100;

  // it is a component that shows progress bar
  const progressBar = (
    <div>
      <ProgressBar progress={Progress} />
    </div>
  );

  // it returns the function to update progress bar, progress bar component and current progress for using in the component
  return { updateProgressBar, progressBar, currentProgress, isClicked };
};

export default useProgressBar;
