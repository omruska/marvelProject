import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import '../../assets/style/style.scss';
import FormSignIn from "../formSignIn/FormSignIn";

function FormSignUp({ onClose, onSignUp }) {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (usersValue) => {
        onSignUp(usersValue);
        onClose();

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-item">
                <label htmlFor="name">Pease, enter your full name:
                    <input
                        className={errors.name ? 'error' : ''}
                        type="text"
                        placeholder="FullName"
                        {...register('name', {
                            required: 'Required',
                            pattern: {
                                value: /(\w|\s|[\.\'-])+/,
                                message: 'Incorrect name',
                            },
                        })}
                    />
                </label>
                <p className={'error-message'}>{errors.name && errors.name.message}</p>
            </div>
            <div className="form-item">
                <label htmlFor="email">Please, enter your email:
                    <input
                        className={errors.email ? 'error' : ''}
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                </label>
                <p className={'error-message'}>{errors.email && errors.email.message}</p>
            </div>
            <div className="form-item">
                <label htmlFor="password">Please, make up a password:
                    <input
                        className={errors.password ? 'error' : ''}
                        type="password"
                        placeholder="password"
                        {...register('password', {
                            required: 'Required',
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\s.'-]{8,16}$/,
                                message: 'Incorrect password',
                            },
                        })}
                    />
                </label>

                <p className={'error-message'}>{errors.password && errors.password.message}</p>
            </div>
            <div className="form-item">
                <p className={'error-message'}>{errors.message && errors.message.message}</p>
            </div>
            <button className="form-item" type="submit">
                Submit
            </button>
        </form>
    );
}

export default FormSignUp;
