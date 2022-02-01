const Button = ({ actionOnClick }) => {
  return (
    <button
      type="button"
      className="button button--select"
      onClick={actionOnClick}
    >
      Marcar todos
    </button>
  );
};

export default Button;
