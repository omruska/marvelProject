import React from 'react';
import { useForm } from 'react-hook-form';
import '../../assets/style/style.scss';

function BuyForm({ onClose, onBuyNow, users, onSubmitSuccess }) {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = (values) => {
        console.log(values);
        onBuyNow(values);
        onClose();
    };

    return (
        <>
            <p className='buy'>Please enter your email, we will send you all the details</p>
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
                <button className="form-item" type="submit">
                    Submit
                </button>
            </form>
        </>

    );
}

export default BuyForm;
