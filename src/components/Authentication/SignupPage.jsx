import "./SignupPage.scss";
import user from "../../assets/images/user.webp";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import React, {useState} from "react";
import {signUp} from "../services/userServices.js";

const schema = z
    .object({
        name: z
            .string()
            .min(3, {message: "Name should be at least 3 characters."}),
        email: z.string().email({message: "Please enter valid email."}),
        password: z
            .string()
            .min(8, {message: "Password must be at least 8 characters."}),
        confirmPassword: z.string(),
        deliveryAddress: z
            .string()
            .min(15, {message: "Address must be at least 15 characters."}),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Confirm Password does not match Password.",
        path: ["confirmPassword"],
    });

const SignupPage = () => {
    const [profile, setProfile] = useState(null)
    const {register, handleSubmit, formState: {errors}}
        = useForm({resolver: zodResolver(schema)})

    const onSubmit = async data => {

       await signUp(data, profile)

    };
    return (
        <section className='form_page'>
            <form className='authentication_form signup_form' onSubmit={handleSubmit(onSubmit)}>
                <h2>SignUp Form</h2>

                <div className='image_input_section'>
                    <div className='image_preview'>
                        <img src={profile ? URL.createObjectURL(profile) : user} id='file-ip-1-preview'/>
                    </div>
                    <label htmlFor='file-ip-1' className='image_label'>
                        Upload Image
                    </label>
                    <input type='file'
                           onChange={e => setProfile(e.target.files[0])}
                           id='file-ip-1' className='image_input'/>
                </div>

                {/* Form Inputs */}
                <div className='form_inputs signup_form_input'>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            id='name'
                            className='form_text_input'
                            {...register('name')}
                            type='text'
                            placeholder='Enter your name'
                        />
                        {errors.name && <em className="form_error">{errors.name.message}</em>}
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            {...register('email')}
                            id='email'
                            className='form_text_input'
                            type='email'
                            placeholder='Enter your email address'

                        />
                        {errors.email && <em className="form_error">{errors.email.message}</em>}

                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            {...register('password')}
                            id='password'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter your password'
                        />
                        {errors.password && <em className="form_error">{errors.password.message}</em>}

                    </div>

                    <div>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            {...register('confirmPassword')}
                            id='confirmPassword'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter confirm password'
                        />
                        {errors.confirmPassword && <em className="form_error">{errors.confirmPassword.message}</em>}
                    </div>


                    <div className='signup_textares_section'>
                        <label htmlFor='address'>Delivery Address</label>
                        <textarea
                            {...register('deliveryAddress')}
                            id='address'
                            className='input_textarea'
                            placeholder='Enter delivery address'
                        />
                        {errors.deliveryAddress && <em className="form_error">{errors.deliveryAddress.message}</em>}

                    </div>
                </div>

                <button className='search_button form_submit' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default SignupPage;

// name - Name should be at least 3 characters.
// email - Please enter valid email
// password - Password must be at least 8 characters.
// confirmPassword - Confirm Password does not match Password
// deliveryAddress - Address must be at least 15 characters.
