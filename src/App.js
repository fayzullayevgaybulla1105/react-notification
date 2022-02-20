import React from 'react';
import NewComment from './components/newComment';
import NewConnect from './components/NewConnect';
import NewMessage from './components/newMessage';
import NewUser from './components/newUser';

const App = () => {
  return <div>
    <NewUser/>
    <NewComment/>
    <NewConnect/>
    <NewMessage/>
  </div>;
}


export default App;