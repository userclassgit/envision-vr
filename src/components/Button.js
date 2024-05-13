import { useState } from 'react';

const Button = ({ text, hasBackgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button className={`header-button ${hasBackgroundColor ? 'has-background' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default Button;