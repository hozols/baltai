
import React, { useState, useRef } from 'react';

export interface Task {
  id: string;
  title: string;
  description: string;
  tag: {
    color: string;
    label: string;
  };
  dueDate: string;
  assignees: number;
  progress: {
    completed: number;
    total: number;
  };
}

interface TaskCardProps {
  task: Task;
  onDragStart: (e: React.DragEvent, task: Task) => void;
  onDragEnd: () => void;
  onStatusChange: (taskId: string, newStatus: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDragStart, onDragEnd, onStatusChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    
    // Add ghost image effect
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const ghostImage = cardRef.current.cloneNode(true) as HTMLDivElement;
      ghostImage.style.position = 'absolute';
      ghostImage.style.top = '-1000px';
      ghostImage.style.opacity = '0.8';
      document.body.appendChild(ghostImage);
      e.dataTransfer.setDragImage(ghostImage, rect.width / 2, rect.height / 2);
      
      // Clean up the ghost element after drag
      setTimeout(() => {
        document.body.removeChild(ghostImage);
      }, 0);
    }
    
    onDragStart(e, task);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEnd();
  };
  
  // Generate tag background class based on tag color
  const getTagClass = () => {
    switch (task.tag.color) {
      case 'purple':
        return 'bg-purple-400/20 text-purple-300';
      case 'blue':
        return 'bg-blue-400/20 text-blue-300';
      case 'green':
      case 'accent':
        return 'bg-cosmic-accent/20 text-cosmic-accent';
      default:
        return 'bg-cosmic-light/20 text-cosmic-muted';
    }
  };

  return (
    <div
      ref={cardRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`task-card p-3 bg-cosmic-darker rounded-md border border-cosmic-light/10 shadow-sm ${isDragging ? 'dragging' : ''}`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTagClass()}`}>
          {task.tag.label}
        </span>
        <span className="text-cosmic-muted text-xs">{task.dueDate}</span>
      </div>
      
      <h5 className="font-medium mb-1">{task.title}</h5>
      <p className="text-xs text-cosmic-muted mb-3">{task.description}</p>
      
      <div className="flex justify-between items-center">
        <div className="flex -space-x-1">
          {[...Array(task.assignees)].map((_, i) => (
            <div 
              key={i}
              className={`h-6 w-6 rounded-full bg-cosmic-light/${30 - i * 5} border-2 border-cosmic-darker`}
            ></div>
          ))}
        </div>
        
        {task.progress.completed === task.progress.total ? (
          <span className="flex items-center gap-1 text-cosmic-accent text-xs">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {task.progress.completed}/{task.progress.total}
          </span>
        ) : (
          <span className="flex items-center gap-1 text-cosmic-muted text-xs">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12H16M8 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {task.progress.completed}/{task.progress.total}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
