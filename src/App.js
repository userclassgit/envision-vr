import './css/app.css';
import Header from './components/Header';

/* 
I prefer assigning the component arrow function to a const like this instead of writing a named function.
https://youtu.be/ABQLwlE8MUA?t=4507
Hope this is ok.
*/
const App = () => {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
