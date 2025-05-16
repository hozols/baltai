
import React from 'react';
import { useTaskContext } from '@/context/TaskContext';
import TaskColumn from './TaskColumn';

interface TaskBoardContentProps {
  className?: string;
}

const TaskBoardContent: React.FC<TaskBoardContentProps> = ({ className }) => {
  const {
    columns,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleDragStart,
    handleDragEnd,
    handleStatusChange
  } = useTaskContext();

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {columns.map(column => (
        <TaskColumn
          key={column.id}
          column={column}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onTaskDragStart={handleDragStart}
          onTaskDragEnd={handleDragEnd}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskBoardContent;
