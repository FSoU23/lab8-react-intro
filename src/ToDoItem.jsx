function ToDoItem({ task, removeTask }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        marginBottom: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        transition: 'all 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#f0f0f0';
        e.currentTarget.style.transform = 'translateX(5px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#f9f9f9';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      <span style={{ 
        fontSize: '16px',
        color: '#333'
      }}>
        {task.text}
      </span>
      <button
        onClick={() => removeTask(task.id)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
      >
        Удалить
      </button>
    </li>
  );
}

export default ToDoItem;