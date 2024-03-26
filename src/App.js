import { useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import FormData from './components/Form_data';

function App() {
  const [contacts, setContacts] = useState([
    {first_name:'Benedict', last_name: 'Olorunda', dob:'1880-12-26', phoneNumber:'08034333157'}
  ])
  return (
    <div >
      <FormData/>
      <Contacts contacts={contacts}/>
    </div>
  );
}

export default App;
