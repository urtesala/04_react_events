// import Button from './components/EVENTS/Button/Button';
// import ButtonOne from './components/EVENTS/ButtonOne/ButtonOne';
// import ButtonThree from './components/EVENTS/ButtonThree/ButtonThree';
// import ButtonTwo from './components/EVENTS/ButtonTwo/ButtonTwo';
// import Form from './components/EVENTS/Form/Form';
// import GreetingForm from './components/EVENTS/GreetingsForm/GreetingsForm';
// import MathButton from './components/EVENTS/MathButton/MathButton';
import Content from './components/LAYOUT/Content/Content';
import Feature from './components/LAYOUT/Feature/Feature';
import Header from './components/LAYOUT/Header/Header';
import Signup from './components/LAYOUT/Signup/Signup';
import './index.css';

function App() {
  return (
    // <div>
    //   <h2>Mouse events</h2>
    //   {/** Mouse events: click, contextmenu, mouseenter, mouseleave, mousemove */}
    //   <Button />

    //   <h2>Form events</h2>
    //   {/** Form events: submit, reset */}
    //   <Form />

    //   <h2>Task One and Two</h2>
    //   <ButtonOne />
    //   <ButtonTwo />
    //   <ButtonThree />
    //   <GreetingForm />

    //   <h2>Addition practise with react events</h2>
    //   <MathButton action={"+"} numbers={[34, 8]} />
    //   <MathButton action={"-"} numbers={[34, 8]} />
    // </div>

    <>
      <header>
        <Header />
      </header>
      <main className='layout'>
        <Content />
        <Signup />
        <Feature backgroundColor={'#F5CF8E'} />
        <Feature backgroundColor={'#F09A9D'} />
        <Feature backgroundColor={'#C8C6FA'} />
      </main>
    </>
  );
}

export default App;
