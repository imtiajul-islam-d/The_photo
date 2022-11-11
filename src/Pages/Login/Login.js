import { LockClosedIcon } from "@heroicons/react/20/solid";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { GiPhotoCamera } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

// creating google provider
const googleProvider = new GoogleAuthProvider();

export default function Example() {
  useTitle("The Photo || Login")
  const { emailLogin, googleAuthLogin } = useContext(AuthContext);
  const [error, setError] = useState('')
  // this section is for navigation
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  // handling password login
  const handleEmailPasswordLogin = (event) => {
    setError('')
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    emailLogin(email, password)
    .then(result => {
      // calling for jwt token start
      const user = result.user;
      const currentUser = {
        email: user.email
      }
      fetch('https://personal-review-server.vercel.app/jwt', {
        method: "POST",
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('photoGrapher-token', data.token)
        navigate(from, {replace: true})
      })
      // calling for jwt token end
 
      form.reset()
    })
    .catch(err => {
      setError(err.message);
    })
    
  };
  // google login
  const googlePopupLogin = () => {
    setError('')
    googleAuthLogin(googleProvider)
    .then((result) => {
        // calling for jwt token start
        const user = result.user;
        const currentUser = {
          email: user.email
        }
        fetch('https://personal-review-server.vercel.app/jwt', {
          method: "POST",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('photoGrapher-token', data.token)
          navigate(from, {replace: true})
        })
        // calling for jwt token end
      })
      .catch((err) => {
        setError(err.message)
      });
  };
  return (
    <>
      <div className="flex min-h-[70vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8">
          <div className="flex items-center justify-center">
            <Link
              className="text-4xl flex items-center space-x-2 font-bold text-orange-400"
              to=""
            >
              <GiPhotoCamera></GiPhotoCamera>
              <span className="text-xl">The Photo</span>
            </Link>
          </div>
          <form
            onSubmit={handleEmailPasswordLogin}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            {
              error && <div className="text-red-600">{error}</div>
            }
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to='/signup' className="underline">Register</Link>
              </div>

              <div className="text-sm">
                <Link
                  to=""
                  className="font-medium text-orange-400 hover:text-orange-400"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-yellow-400 group-hover:text-yellow-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            <div>
              <hr />
              <div>
                <div className="text-center mb-4">Or</div>
                <div className="flex justify-center items-center text-orange-500">
                  <span className="cursor-pointer text-xl" onClick={googlePopupLogin}>
                    <FaGoogle></FaGoogle>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
