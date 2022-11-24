import Button from './components/Button/Button';
import ButtonOne from './components/ButtonOne/ButtonOne';
import Form from './components/Form/Form';

function App() {
  return (
    <div className='App'>
      <h1>Mouse events</h1>
      {/* Mouse events: click, contextmenu, mouseenter, mouseleave, mousemove */}
      <Button />
      <h2>Form events</h2>
      {/* Form events: submit, reset */}
      <Form />

      <h2>Task One and two</h2>
      <ButtonOne />
    </div>
  );
}

export default App;
