const Button = ({ text, hasBackgroundColor }) => {
  const buttonStyle = {
    backgroundColor: hasBackgroundColor ? 'var(--teal)' : 'transparent',
    border: '2.5px solid var(--teal)',
  };

  return (
    <button style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;