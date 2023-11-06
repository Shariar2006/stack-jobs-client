import '../../../index.css'
import login from '../../../assets/login.jpg'
import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import swal from 'sweetalert';



const Register = () => {

    const { createUser, handleUpdateProfile } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const url = form.url.value
        console.log(name, email, password, url)

        if (password.length < 6) {
            swal("Sorry!", "Your password must be at least 6 characters!", "error");
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            swal("Sorry!", "Your password must be at least one uppercase characters!", "error");
            return
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            swal("Sorry!", "Your password must be at least one special character!", "error");
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(
                    result
                )
                e.target.reset()
                swal("Good job!", "You are successfully Registration!", "success");
                <Navigate to='/login'></Navigate>
                handleUpdateProfile(name, url)
            })
            .catch(() => {      
                swal("Sorry!", "This email already used!", "error");
            })

    }

    return (
        <div className='relative'>

            <div className='absolute flex flex-col justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] min-h-screen right-0 left-0'>
                <form onSubmit={handleRegister} className=" py-8 px-10 rounded-lg login">
                    <p className=' text-[#FFC501] text-4xl text-center font-bold mb-5'>Register now!</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFC501] text-xl font-bold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="inputFild input input-bordered text-[#FFC501] text-lg font-semibold" required />
                    </div>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFC501] text-xl font-bold">Photo URL</span>
                        </label>
                        <input type="url" name='url' placeholder="Photo URL" className="inputFild input
                    text-[#FFC501] text-lg font-semibold input-bordered" required />
                    </div>
                    <div className='bg-[#ffc501] hover:bg-[#053C75] text-center text-[#053C75] hover:text-[#ffc501] py-3 rounded-lg text-xl font-bold w-full my-4'>
                        <input type="submit" value="Register" />
                    </div>

                    <p className='text-[#9CA3AF] text-base font-semibold text-center mt-4'>Already have an account? Please <Link to='/login' className='text-[#ffc501] underline'>Login</Link></p>

                </form>
            </div>
            <img className='h-screen w-full' src={login} alt="" />
        </div>
    );
};

export default Register;