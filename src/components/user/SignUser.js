import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignUser(){
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) =>{
        event.preventDefault()

        try{
            const response = await axios.post("http://localhost:8000/api/book/signin/", {
                username,
                password,
            });
            if (response.status >= 200 && response.status < 300) {
                navigate("/");
            }
        }
        catch (error){
            console.log(error)
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-20 w-auto"
                    src="https://www.uco.es/aulasoftwarelibre/wp-content/uploads/2018/09/logo-cuadrado-transparente-1.png"
                    alt="ASL"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        username
                    </label>
                    <div className="mt-2">
                        <input
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="username"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={username}
                        onChange={({target}) => setUsername(target.value)}
                        />
                    </div>
                    </div>
        
                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
                        <div className="text-sm">
                        <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </Link>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                        />
                    </div>
                    </div>
        
                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                    </div>
                </form>
        
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Register now
                    </Link>
                </p>
                </div>
            </div>
            </>
        )
    }
    

export default SignUser;