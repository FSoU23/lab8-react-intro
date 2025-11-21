import ToDoItem from './ToDoItem';

function ToDoList({ tasks, removeTask }) {
  if (tasks.length === 0) {
    return (
      <p style={{ 
        color: '#888', 
        fontStyle: 'italic',
        textAlign: 'center',
        padding: '20px'
      }}>
        Нет задач. Добавьте первую! 🎯
      </p>
    );
  }

  return (
    <ul style={{ 
      listStyle: 'none', 
      padding: 0,
      margin: 0
    }}>
      {tasks.map((task) => (
        <ToDoItem 
          key={task.id} 
          task={task} 
          removeTask={removeTask} 
        />
      ))}
    </ul>
  );
}

export default ToDoList;