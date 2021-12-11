import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import HeaderLarge from '../../components/header/HeaderLarge';
import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className={styles.register}>
      <HeaderLarge />
      <main>
        <h1>Register</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <button type="submit">CREATE ACCOUNT</button>
        </form>

        <p>Already have an account?</p>
        <Link to="/login">LOGIN HERE</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Register;