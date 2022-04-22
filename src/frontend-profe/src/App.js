import { useContext } from 'react';
import { Context } from './storage/SharedStorage';
import SignUp from './components/SignUp/SignUp';
import './App.css';
import Chat from './views/Chat/Chat';



function App() {

  const [ store ] = useContext(Context);

  return (
    <div className={"flexColumn"}>
      <h1>Chat</h1>
      { store.id === 0 && <SignUp/> }
      { store.id !== 0 && <Chat/> }
    </div>
  );
}

export default App;
