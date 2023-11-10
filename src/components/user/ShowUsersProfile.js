import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../App";

function ShowUsersProfile(){
    const navigate = useNavigate();

    const { setIsLogged, username, setUsername, setSuperUser } = useContext(AuthContext);
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) =>{
        event.preventDefault()

        /*try{
            const response = await axios.get("http://localhost:8000/api/book/users/", {
                username,
                password,
            });
            if (response.status === 200 && response.data.user_signin) {
                setIsLogged(true);
                setSuperUser(response.data.is_superuser)
                navigate("/");
            }
        }
        catch (error) {
            console.error("Error al iniciar sesión:", error.response.data);
        }*/
    };

    return(
        <div>Hola</div>
    )
}

export default ShowUsersProfile;