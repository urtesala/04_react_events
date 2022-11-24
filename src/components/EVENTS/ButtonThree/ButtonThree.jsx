import '../ButtonOne/btnOne.css';

export default function ButtonThree() {
  return (
    <button
      className='buttonOne'
      onClick={(e) => {
        e.target.style.display = 'none';
      }}
    >
      Button Three
    </button>
  );
}
