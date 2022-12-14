export const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>увеличить на 1</button>
      <button onClick={onDecrement}>уменьшить на 1</button>
    </div>
  );
};
