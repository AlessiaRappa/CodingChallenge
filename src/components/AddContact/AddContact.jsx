import {useState} from "react";
import styles from "./index.module.scss";

export default function AddContact(props) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [number, setNumber] = useState("")
 

const addNewContact = (e)=>{
    e.preventDefault();
  const obj = {
    name: name,
    surname: surname,
    number: number,
  };
  props.addContact(obj);
  
  setName("");
  setSurname("");
  setNumber("");
  
}


  return (
    <div className= {styles.form}>
        <form onSubmit={addNewContact}>
        <input type="text" name="name" placeholder="Nome..." value={name}  onChange={(e) => setName(e.target.value)} required/>
        <input type="text" name="surname" placeholder="Cognome..." value={surname} onChange={(e) => setSurname(e.target.value)}required/>
        <input type="text" name="number" placeholder="Numero..." value={number} onChange={(e) => setNumber(e.target.value)} required/>
        <button > Aggiungi contatto </button>
        </form>
    </div>
  );
};
