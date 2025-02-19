import { useState, useEffect, useMemo } from "react";
import List from "./List";
import "./styles.css";
import Toolbar from "./Toolbar";

export interface TaskType {
  name: string;
  estimation: number;
  id: number;
}

const initialTaskList: TaskType[] = [
  {
    name: "Review new PRs.",
    estimation: 8,
    id: new Date().getTime(),
  },
  {
    name: "Daily meeing.",
    estimation: 9,
    id: new Date().getTime() + 1,
  },
];

// Uncomment bellow line to start task 3
const calculateTotalEstimation = (list: TaskType[]) => {
  return list.reduce((sum, task) => sum + Number(task.estimation), 0);
};

export default function App() {
  const [tasks, setTasks] = useState(initialTaskList);
  // Uncomment bellow line to start task 3
  const totalEstimation = useMemo(() => {
    return calculateTotalEstimation(tasks);
  }, [tasks]);

  const addTask = ({
    taskName,
    taskEstimation,
  }: {
    taskName: string;
    taskEstimation: number;
  }) => {
    if (
      !taskName ||
      !taskEstimation ||
      tasks.find((task) => task.name === taskName)
    ) {
      alert("Please input valid Task!");
      return;
    }
    // tasks.unshift({
    //   name: taskName,
    //   estimation: taskEstimation,
    //   id: new Date().getTime(),
    // });

    const newTasks = [
      {
        name: taskName,
        estimation: taskEstimation,
        id: new Date().getTime(),
      },
      ...tasks,
    ];

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Task Management</h1>
      {/* START TOOLBAR */}
      <Toolbar addTask={addTask} />
      {/* END TOOLBAR */}
      {/* START LIST */}
      <List tasks={tasks} />
      {/* END LIST */}
      {/* Uncomment bellow line to start Task 3 */}
      <h4 className="total-estimation">Total Estimation: {totalEstimation}</h4>
    </div>
  );
}
