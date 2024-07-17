import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const AnimatedElement = ({ children, animationClass = 'animate__fadeIn' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`animate__animated ${inView ? animationClass : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedElement;
