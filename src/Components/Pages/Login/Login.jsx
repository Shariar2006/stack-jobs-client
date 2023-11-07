import '../../../index.css'
import login from '../../../assets/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { useContext } from 'react';
import swal from 'sweetalert';

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                console.log(
                    result.user
                )
                e.target.reset()
                swal("Good job!", "You are successfully Logged in!", "success");
                navigate(location?.state ? location.state : '/')


            })
            .catch(() => {
                swal("Sorry!", "Your email or password is incorrect!", "error");
            })

    }

    const loginWithGoogle = () => {
        googleLogin()
            .then(() => {

                swal("Good job!", "You are successfully logged in!", "success");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => { console.log(error) })
    }

    return (
        <div className='relative'>

            <div className='absolute flex flex-col justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] min-h-screen right-0 left-0'>
                <form onSubmit={handleLogin} className=" py-8 px-10 rounded-lg login">
                    <p className=' text-[#FFC501] text-4xl text-center font-bold mb-5'>Log In now!</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFC501] text-xl font-bold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Email" className="inputFild input input-bordered text-[#FFC501] text-lg font-semibold" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFC501] text-xl font-bold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="inputFild input
                    text-[#FFC501] text-lg font-semibold input-bordered" required />
                    </div>
                    <div>
                        <input className='btn border-none bg-[#ffc501] hover:bg-[#053C75] text-center text-[#053C75] hover:text-[#ffc501] py-3 rounded-lg text-xl font-bold w-full my-4' type="submit" value="Login" />
                    </div>
                    <p className='text-[#FFC501] text-lg font-semibold text-center'>or Sing Up Using</p>
                    <div onClick={loginWithGoogle} className='flex items-center mt-4 justify-center googleLogin rounded-lg cursor-pointer'>
                        <img className='w-10 h-10 ' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                        <span className='text-[#FFC501] text-sm font-semibold'>Continue With Google</span>
                    </div>

                    <p className='text-[#9CA3AF] text-base font-semibold text-center mt-4'>New to Stack Jobs? Please <Link to='/register' className='text-[#ffc501] underline'>Register</Link></p>

                </form>
            </div>
            <img className='h-screen w-full' src={login} alt="" />
        </div>

    );
};

export default Login;