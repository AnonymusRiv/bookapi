import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../App";

function Home(){

    const { isLogged, setIsLogged, username, setUsername } = useContext(AuthContext);
    //const checkLogin = async () => {
    //    try {
    //        const response = await axios.get("http://localhost:8000/api/book/isuser/", {});
    //        if (response.data && response.data["no user"] === "no user found") {
    //            setIsLogged(false);
    //        }
    //        else {
    //            setIsLogged(true);
    //        }
    //        console.log(response.data);
    //    } catch (error) {
    //        console.log(error);
    //    }
    //};

    //useEffect(() => {
    //    if (location.state && location.state.username) {
    //        setUsername(location.state.username);
    //        setIsLogged(true);
    //    }
    //}, [location.state]);

    return(
        <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-20 w-auto"
                    src="https://www.uco.es/aulasoftwarelibre/wp-content/uploads/2018/09/logo-cuadrado-transparente-1.png"
                    alt="ASL"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">

                </h2>
                </div>
                <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Welcome to BookAPI
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    The first library of the Aula Software Libre for lends books.
                </p>
                {!isLogged ? (
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/signin"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/register"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Register <span aria-hidden="true"></span>
                    </Link>
                </div>
                ) : null}

                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                />
            </div>
        </div>
        {console.log(isLogged)}
        </div>
    )
}

export default Home