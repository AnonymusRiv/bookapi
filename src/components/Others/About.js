import { useContext } from 'react'
import { AuthContext } from "../../App";

function Contact(){

    const { isLogged, username } = useContext(AuthContext);
    const people = [
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ]

    return(
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    El Aula de Software Libre de la Universidad de Córdoba es una entidad universitaria para el fomento y la difusión del  
                    <a href="http://es.wikipedia.org/wiki/Software_libre" target="_blank" rel="noopener"> Software Libre </a>
                    dentro de la comunidad universitaria y en la sociedad en general. Así mismo el aula es el fruto del esfuerzo de un grupo
                    de alumnos y profesores que desde el año 2006 llevan haciendo actividades en pro del software y la cultura libres dentro
                    la Universidad de Córdoba dentro de lo que fue
                    <a href="http://consejo-eps.uco.es/corsario"> El Laboratorio de Software Libre</a>
                    .
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                    <li key={person.name}>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Contact