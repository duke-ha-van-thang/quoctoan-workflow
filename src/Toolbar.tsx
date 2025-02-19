import { FC, useState } from "react";

const Toolbar: FC<{
  addTask: ({
    taskName,
    taskEstimation,
  }: {
    taskName: string;
    taskEstimation: number;
  }) => void;
}> = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskEstimation, setTaskEstimation] = useState(0);

  return (
    <div>
      <input
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
        placeholder="task name..."
        value={taskName}
      />
      <input
        onChange={(e) => setTaskEstimation(Number(e.target.value))}
        type="number"
        placeholder="task estimation..."
        value={taskEstimation}
      />
      <button onClick={() => addTask({ taskName, taskEstimation })}>Add</button>
    </div>
  );
};

export default Toolbar;
