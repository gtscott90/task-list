import Task from "./Task";
export default function Tasks({ tasks, onDelete, onReminder }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onReminder={onReminder}
        />
      ))}
    </div>
  );
}
