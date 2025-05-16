
import React, { useState } from 'react';
import TaskCard, { Task } from './TaskCard';

export interface Column {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

interface TaskColumnProps {
  column: Column;
  onDrop: (e: React.DragEvent, columnId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onTaskDragStart: (e: React.DragEvent, task: Task) => void;
  onTaskDragEnd: () => void;
  onStatusChange: (taskId: string, newStatus: string) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  column,
  onDrop,
  onDragOver,
  onDragLeave,
  onTaskDragStart,
  onTaskDragEnd,
  onStatusChange
}) => {
  const [isOver, setIsOver] = useState(false);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
    onDragOver(e);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    setIsOver(false);
    onDragLeave(e);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    setIsOver(false);
    onDrop(e, column.id);
  };

  return (
    <div 
      className={`flex flex-col w-72 min-w-72 rounded-lg border border-cosmic-light/10 backdrop-blur-sm transition-all duration-300 ${
        isOver ? 'column-highlight border-cosmic-accent/50' : 'bg-cosmic-light/5'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="p-3 border-b border-cosmic-light/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${getColorClass(column.color)}`}></span>
          <h4 className="font-medium text-sm">{column.title}</h4>
          <span className="text-xs bg-cosmic-light/20 px-2 py-0.5 rounded-full text-cosmic-muted">
            {column.tasks.length}
          </span>
        </div>
        <div className="text-cosmic-muted">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="p-2 flex-1 space-y-2 overflow-auto">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDragStart={onTaskDragStart}
            onDragEnd={onTaskDragEnd}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

// Helper function to get the appropriate color class
function getColorClass(color: string): string {
  switch (color) {
    case 'muted':
      return 'bg-cosmic-muted/50';
    case 'blue':
      return 'bg-blue-400';
    case 'amber':
      return 'bg-amber-400';
    case 'accent':
      return 'bg-cosmic-accent';
    case 'purple':
      return 'bg-purple-400';
    default:
      return 'bg-cosmic-muted';
  }
}

export default TaskColumn;
