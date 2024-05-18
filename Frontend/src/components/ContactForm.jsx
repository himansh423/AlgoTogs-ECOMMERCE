import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p  className={styles.smallText}>Don't Be Strangers!</p>
          <p  className={styles.mediumText}>You tell us. We listen.</p>
          <p className={styles.description}>
            Cras elementum finibus lacus nec lacinia. Quisque non convallis
            nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend
            magna vehicula et. Nam mattis est sed tellus.
          </p>
        </div>
        <form className={styles.FormContainer}>
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="SUBJECT" />
            <input type="text" placeholder="EMAIL" />
            <textarea name="MESSAGE" id="TEXTAREA" placeholder="MESSAGE"></textarea>
            <button>SEND MESSAGE</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
