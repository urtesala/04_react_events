//^================== HOW TO CALL FUNCTION WITH ARGUMENTS
// function Button() {
//   function showAlert(name) {
//     alert('clicked by' + name);
//   }
//   return (
//     <button
//       onClick={() => {
//         showAlert(' urte');
//       }}
//     >
//       Click me
//     </button>
//   );
// }

// export default Button;

//^================== HOW TO CALL FUNCTION WITHOUT ARGUMENTS

// function Button() {
//   function showAlert() {
//     alert('clicked');
//   }
//   return (
//     <button
//       onClick={() => {
//         showAlert(' urte');
//       }}
//     >
//       Click me
//     </button>
//   );
// }

// export default Button;

function Button() {
  return (
    <button
      onClick={(e) => {
        const clickedButton = e.target;

        clickedButton.style.backgroundColor = 'red';
      }}
    >
      Click me
    </button>
  );
}

export default Button;
