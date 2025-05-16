
import { useRef } from 'react';
import { Task } from '@/components/TaskCard';

export const useTaskBoard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const createDragImage = (e: React.DragEvent, element: HTMLDivElement | null) => {
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const ghostImage = element.cloneNode(true) as HTMLDivElement;
    ghostImage.style.position = 'absolute';
    ghostImage.style.top = '-1000px';
    ghostImage.style.opacity = '0.8';
    document.body.appendChild(ghostImage);
    e.dataTransfer.setDragImage(ghostImage, rect.width / 2, rect.height / 2);
    
    // Clean up the ghost element after drag
    setTimeout(() => {
      document.body.removeChild(ghostImage);
    }, 0);
  };

  return {
    createDragImage,
    cardRef
  };
};
