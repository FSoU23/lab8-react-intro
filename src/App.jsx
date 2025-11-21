import { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';
import ToDoList from './ToDoList';

function App() {
  // Загружаем задачи из localStorage при первом рендере
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Сохраняем задачи в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const clearAll = () => {
    if (window.confirm('Вы уверены, что хотите удалить все задачи?')) {
      setTasks([]);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
        padding: '20px'
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          width: '100%',
          padding: '40px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: '#333',
            marginBottom: '30px',
            fontSize: '36px',
            fontWeight: 'bold'
          }}
        >
          📝 Мои задачи
        </h1>

        <AddTaskForm addTask={addTask} />

        <ToDoList tasks={tasks} removeTask={removeTask} />

        {tasks.length > 0 && (
          <>
            <button
              onClick={clearAll}
              style={{
                marginTop: '20px',
                padding: '12px 20px',
                backgroundColor: '#ff9800',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                width: '100%',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f57c00'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ff9800'}
            >
              Очистить всё
            </button>

            <div
              style={{
                marginTop: '15px',
                padding: '12px',
                backgroundColor: '#e3f2fd',
                borderRadius: '8px',
                fontSize: '15px',
                color: '#1976d2',
                textAlign: 'center',
                fontWeight: '500'
              }}
            >
              Всего задач: {tasks.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;