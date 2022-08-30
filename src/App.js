import { useSelector } from 'react-redux';
import './App.css';


function App() {
  const random = useSelector(state => state.random)
  console.log(random)
  return (
    <container>
      <label>
        <span>Alphabet symbols:</span>
        <input type='checkbox' />
        {`abcdefghijklmop...`}
      </label>
      <label>
        <span>Special symbols:</span>
        <input type='checkbox' />
        {`!@#$%^&*()`}
      </label>
      <button>Generate a new password!</button>
      <a href='https://unsplash.com/photos/P1vXpgpL208' target='_blank'>
        Photo source
      </a>
    </container>
  );
};

export default App;
