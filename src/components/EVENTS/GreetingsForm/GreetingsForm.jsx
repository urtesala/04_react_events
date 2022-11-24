import './form.css';
export default function GreetingForm() {
  const h2El = document.getElementById('sveiki');
  return (
    <div className='formDiv'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          h2El.textContent = `Sveiki gyvi ${e.target.name.value} ${e.target.surname.value}`;
        }}
      >
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
        <label htmlFor='surname'>Surname</label>
        <input type='text' id='surname' />
        <input className='submit' type='submit' />
      </form>
      <h2 id='sveiki'></h2>
    </div>
  );
}
