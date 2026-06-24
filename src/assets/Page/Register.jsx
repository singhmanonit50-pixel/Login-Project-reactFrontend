import { useState } from 'react';
import { registerUser } from '../api/auth';

function Register(){

    const [user,setUser] = useState({
        username:"",
        email:"",
        password:""
    });

    const handleChange = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = async(e)=>{

        e.preventDefault();

        try{

            const response = await registerUser(user);

            alert("User Registered");

            console.log(response.data);

        }

        catch(error){

            alert(error.response?.data);

        }

    }


    return(

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
            />

            <br/>

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <br/>

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />

            <br/>

            <button type="submit">

                Register

            </button>


        </form>

    )

}

export default Register;