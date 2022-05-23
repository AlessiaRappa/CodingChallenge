import Contact from "../Contact";
import { useState } from "react";
import AddContact from "../AddContact";
import styles from "./index.module.scss";


const people = [
  { name: "Mario", surname: "Rossi", number: "111 2233444"},
  { name: "Carlo", surname: "Neri", number: "555 6677888"}
];

export default function ContactsList() {

    const [contact, setContact] = useState(people);
    const [searchInput, setSearchInput] = useState('');
    
    const addContact = (value) => {
      const update = contact.concat([value]);
      setContact(update);
    };
  
    const removeContact = (actualNumber) => {
      const filterList = contact.filter(people => people.number !== actualNumber)
      setContact(filterList);
    }

  return (
    <div className={styles.wrapper}>
        <form className= {styles.search} value={searchInput} onChange={(event) => setSearchInput(event.target.value)}>
          <label>
            Cerca:
            <input type="text" name="cerca" placeholder="Ricerca per nome/cognome"/>
          </label>
        </form>
        <ul>
          {contact
            .filter((people) => 
            people.name.toLowerCase().includes(searchInput.toLowerCase())  || 
            people.surname.toLowerCase().includes(searchInput.toLowerCase())) 
            .map((e, index) => (
            <li key = {index}>
              <Contact people={e} removeContact={removeContact} />
            </li>
            ))
            }
        </ul>
      <AddContact addContact={addContact}/>
    </div>
  )
}




