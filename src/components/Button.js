import { useState } from 'react';

const Button = ({ text, hasBackgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? 'var(--teal)' : (hasBackgroundColor ? 'var(--teal)' : 'transparent'),
    border: '2.5px solid var(--teal)',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button 
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default Button;