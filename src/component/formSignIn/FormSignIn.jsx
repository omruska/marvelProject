
import { useForm } from 'react-hook-form';
import '../../assets/style/style.scss';
import React, { useEffect } from 'react';


function FormSignIn({ onClose, onSignIn, users}) {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();



    const onSubmit = async (values) => {
        try {
            console.log('Users array:', users);
            await onSignIn(values);
            onClose();
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <label htmlFor="password">Please, enter your password:
                    <input
                        className={errors.password ? 'error' : ''}
                        type="password"
                        placeholder="Password"
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

export default FormSignIn;
