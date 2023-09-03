import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterUSer(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (event) =>{
        event.preventDefault()

        try{
            const response = await axios.post("http://localhost:8000/api/book/register/", {
                username,
                email,
                firstname,
                lastname,
                password,
            });
            if (response.ok) {
                const data = await response.json();
                if (data.user_create) {
                    // Redirige al usuario a la página de inicio después del registro exitoso
                    // o a cualquier otra página que desees.
                    return (
                        <Link to="/">Redireccionando a la página de inicio...</Link>
                    );
                }
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
                    Register your account
                </h2>
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={username}
                        onChange={({target}) => setUsername(target.value)}
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        autoComplete="firstname"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={firstname}
                        onChange={({target}) => setFirstname(target.value)}
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        autoComplete="lastname"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={lastname}
                        onChange={({target}) => setLastname(target.value)}
                        />
                    </div>
                    </div>
        
                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                        </label>
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
                        Register
                    </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Have an account?{' '}
                    <Link to="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Sign in now
                    </Link>
                </p>
                </div>
            </div>
            </>
        )
    }
    

export default RegisterUSer;