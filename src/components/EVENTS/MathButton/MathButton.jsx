// text = math operator, like -, +, :, *
// action - function that handles logic
// numbers = arr of numbers [3,5]

export default function MathButton(text, action, numbers) {
  return (
    <button
      onClick={() => {
        const result = action();
      }}
    >
      Show {numbers[0]} {text} {numbers[1]}answer
    </button>
  );
}
