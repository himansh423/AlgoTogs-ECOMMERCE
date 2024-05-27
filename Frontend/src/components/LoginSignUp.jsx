import styles from "./LoginSignUp.module.css";

const LoginSignUp = () => {
  return (
    <>
    <div className={styles.loginContainer}>
      <form action="">
        <input type="text" placeholder="Enter Username" />
        <input type="text" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
    
    </>
  )
}


export default LoginSignUp;