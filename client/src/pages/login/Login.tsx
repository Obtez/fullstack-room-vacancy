import {Link} from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import HeaderLarge from '../../components/header/HeaderLarge'
import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.login}>
      <HeaderLarge />
      <main>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <button type="submit">LOGIN</button>
        </form>
    
        <p>Don't have an account yet?</p>
        <Link to="/register">REGISTER HERE</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Login