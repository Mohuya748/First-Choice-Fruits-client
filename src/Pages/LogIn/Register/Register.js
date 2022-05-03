import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
;


const Register = () => {
      const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const navigate = useNavigate();
    
    const navigateLogin = e => {
        navigate('/login');

    }

    if (user) {
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }
    
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-success text-center mt-2'>Register Now!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control ref={phoneRef} type="number" placeholder="phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" required />
                </Form.Group>
                
                <Button variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Log in here</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;