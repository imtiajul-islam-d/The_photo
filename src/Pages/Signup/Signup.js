import React, { useContext, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { GiPhotoCamera } from "react-icons/gi";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import { FaGoogle } from "react-icons/fa";

// creating google provider
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
    const [error, setError] = useState('');
    const {googleAuthLogin, createEmailAccount, updateHandler, logout} = useContext(AuthContext);
    const navigate = useNavigate()
    // implementing email signup
    const handleEmailPasswordRegister = (e) => {
        e.preventDefault();
        setError('')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const imageURL = form.imageURL.value;
        // validating
        if(password === confirm){
            createEmailAccount(email, password)
            .then(user => {
                // if user create and account the following info should be updated
                const updateObject = {
                    displayName: name,
                    photoURL: imageURL
                }
                updateHandler(updateObject)
                .then(() => {
                    form.reset()
                })
                .catch(() => {})
                // after successful register user must need to sign in
                logout()
                .then(() => {
                    navigate('/login')
                    alert("Registration success. Please Login..")
                })
                .then(() => {})
            })
            .catch(err => {
                setError(err)
            })
        }else{
            setError("Password didn't match")
        }
    }
    // google signup
    const googlePopupLogin = () => {
        googleAuthLogin(googleProvider)
          .then((res) => res.json())
          .catch((err) => {
            
          });
      };
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center">
          <Link
            className="text-4xl flex items-center space-x-2 font-bold text-orange-400"
            to=""
          >
            <GiPhotoCamera></GiPhotoCamera>
            <span className="text-xl">The Photo</span>
          </Link>
          <div className="my-3 font-bold">
            Registration
          </div>
        </div>
        <form
          onSubmit={handleEmailPasswordRegister}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400 sm:text-sm"
                placeholder="Your name"
              />
            </div>
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
                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="imageURL" className="sr-only">
                imageURL
              </label>
              <input
                id="imageURL"
                name="imageURL"
                type="text"
                required
                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400 sm:text-sm"
                placeholder="Please enter your image link"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400 sm:text-sm"
                placeholder="Choose a password"
              />
            </div>
            <div>
              <label htmlFor="confirm" className="sr-only">
                Password
              </label>
              <input
                id="confirm"
                name="confirm"
                type="password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400 sm:text-sm"
                placeholder="Confirm password"
              />
            </div>
          </div>
          {error && <div className="text-red-600">{error}</div>}
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
              Register
            </button>
          </div>
          <div>
            <hr />
            <div>
              <div className="text-center mb-4">Or</div>
              <div className="flex justify-center items-center text-orange-500">
                <span
                  className="cursor-pointer text-xl"
                  onClick={googlePopupLogin}
                >
                  <FaGoogle></FaGoogle>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
