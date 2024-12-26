import { useState } from "react";
import ProgressBar from "../components/common/ProgressBar";

const useProgressBar = (totalProgress = 7) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  const updateProgressBar = () => {
    setCurrentProgress((prev) => {
      return prev >= totalProgress ? 0 : prev + 1;
    });
  };
  const Progress = (currentProgress / totalProgress) * 100;
  const progressBar = (
    <div>
      <ProgressBar progress={Progress} />
    </div>
  );
  return { updateProgressBar, progressBar };
};

export default useProgressBar;
