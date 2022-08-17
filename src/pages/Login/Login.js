import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';
import SignupForm from '../../components/SignupForm';
import './style.css';

const Login = ({typeForm = 'login'}) => {
  return (
    <div className='page page-login'>
      <Navbar/>
      {typeForm === 'login' && <LoginForm/>}
      {typeForm === 'signup' && <SignupForm/>}
      <Footer/>
    </div>
  )
}

export default Login;
