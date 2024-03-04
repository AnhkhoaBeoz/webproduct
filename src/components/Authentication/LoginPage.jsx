import React, {useState} from 'react';
import './LoginPage.scss';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa';
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    emai: z.string().min(10).email(),
    username: z.string().min(5),
    password: z.string().min(6)
})

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: zodResolver(schema)});
    const onSubmit = (data) => {
        console.log(data);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="form_page">
            <form onSubmit={handleSubmit(onSubmit)} className="authentication_form">
                <h2 className="authentication_page_heading">LOGIN FORM</h2>
                <div className="form_inputs">
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            {...register("username")}
                            required
                        />
                        {errors.username &&
                            <em className="form_error">{errors.username.message}</em>}

                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type={showPassword ? 'text' : 'password'}

                            id="password"
                            {...register("password")}
                            required
                        />
                        {showPassword ? (
                            <FaRegEyeSlash onClick={togglePasswordVisibility}/>
                        ) : (
                            <FaRegEye onClick={togglePasswordVisibility}/>
                        )}
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default LoginPage;
