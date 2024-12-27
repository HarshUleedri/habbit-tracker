import { useState } from "react";
import ProgressBar from "../components/common/ProgressBar";

const useProgressBar = (totalProgress = 7, localStorageId) => {
  // set current progress to 0 if there is no value in local storage
  const [currentProgress, setCurrentProgress] = useState(() => {
    return parseInt(localStorage.getItem(`${localStorageId}`)) || 0;
  });

  // function to update progress bar
  const updateProgressBar = () => {
    setCurrentProgress((prev) => {
      return prev >= totalProgress ? totalProgress : prev + 1;
    });
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
  return { updateProgressBar, progressBar, currentProgress };
};

export default useProgressBar;
