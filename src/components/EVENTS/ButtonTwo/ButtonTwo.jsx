import '../ButtonOne/btnOne.css';

export default function ButtonTwo() {
  let counter = 0;
  return (
    <button
      className='buttonOne'
      onClick={(e) => {
        counter++;
        e.target.innerHTML = `Paspaudei ${counter} kartų`;
      }}
    >
      Button two
    </button>
  );
}
