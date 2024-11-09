import React from 'react';
import './style.css';
import getDueDateClass from './date';
import { Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';

const ToDoItem = ({ task, onToggle, onDelete, onEdit }) => {
  console.log("taskkkkkkk day nhes ", task);
  console.log("testttt nayf", getDueDateClass('2024-11-20T17:00:00.000Z'))
  const { className: dueDateClass, text: dueDateText } = getDueDateClass(task.due_date);

  return (
    <div className='ToDoItem'>
      <input type='checkbox' checked={task.completed} onChange={() => onToggle(task.id)} />
      <div className={`content ${task.completed ? 'completed' : ''}`}>
        <p className='title'>{task.title}</p>
        <p className='description'>{task.description}</p>
        <p className={`due-date ${dueDateClass}`}><CalendarOutlined /> {dueDateText ? dueDateText : new Date(task.dueDate).toLocaleDateString()}</p>
      </div>
      <button className='edit-btn' onClick={() => onEdit(task)}>
        <EditOutlined />
      </button>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        okText="Yes" 
        onConfirm={() => onDelete(task.id)}
        cancelText="No"
      >
        <Button danger><DeleteOutlined /></Button>
      </Popconfirm>
    </div>
  );
};

export default ToDoItem;