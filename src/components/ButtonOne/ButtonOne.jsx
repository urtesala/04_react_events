import './btnOne.css';

function ButtonOne() {
  return (
    <button
      className='buttonOne'
      onClick={(e) => {
        const clickedButton = e.target;

        if (clickedButton.className == 'buttonOne')
          clickedButton.className = 'buttonOneInverted';
        else clickedButton.className = 'buttonOne';
      }}
    >
      BUTTON ONE
    </button>
  );
}

export default ButtonOne;
