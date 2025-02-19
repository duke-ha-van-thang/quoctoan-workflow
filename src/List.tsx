import { FC, memo } from "react";
import type { TaskType } from "./App";

const ListItem: FC<{ task: TaskType }> = memo(({ task }) => {
  console.log(task.name);
  return (
    <li>
      <div>{task.id}</div>
      <div>{task.name}</div>
      <div>{task.estimation}</div>
    </li>
  );
});

const List: FC<{ tasks: TaskType[] }> = ({ tasks }) => {
  return (
    <>
      <h3>Task List</h3>
      <ul className="task-list">
        <li>
          <div>ID</div>
          <div>Task name</div>
          <div>Estimation</div>
        </li>
        {tasks.map((task) => (
          <ListItem task={task} key={task.id} />
        ))}
      </ul>
    </>
  );
};

export default List;
