import styles from "./index.module.scss";

export default function Contact({ people, removeContact }) {


  return (
    <div className={styles.contactData}>
        <button onClick={() => removeContact(people.number)}>X</button>
        <p>{people.name} {people.surname}</p>
        <p>{people.number}</p>
    </div>
  )
}
