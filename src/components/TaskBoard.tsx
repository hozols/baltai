
import React from 'react';
import { TaskProvider } from '@/context/TaskContext';
import TaskBoardContent from './TaskBoardContent';

interface TaskBoardProps {
  className?: string;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ className }) => {
  return (
    <TaskProvider>
      <TaskBoardContent className={className} />
    </TaskProvider>
  );
};

export default TaskBoard;
