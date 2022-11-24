import Button from './components/Button/Button';
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
    </div>
  );
}

export default App;
