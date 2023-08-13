import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const notify = () => toast.success('Email sent succesfully..', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    const form = useRef();
    const SendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_m3d6the', 'template_4rsy55l', form.current, '3NxtkqDHqQPXuHDUI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact' id='contact'>
            <h1 className='text-center-z'>Contact me</h1>
            <form className=' mt-5 d-flex flex-column justify-content-center align-items-center' ref={form} onSubmit={SendEmail}>
                <label className='contactinput fs-4'>Name</label>
                <input className='mt-2 mb-3 col-10 col-md-3' type="text" name="user_name" />
                <label className='contactinput fs-4'>Email</label>
                <input className='mt-2 mb-3 col-10 col-md-3' type="email" name="user_email" />
                <label className='contactinput fs-4'>Message</label>
                <textarea className='mt-2 mb-3 col-10 col-md-3' name="message" />
                <input onClick={notify} style={{ backgroundColor: "rgb(228, 99, 1)" }} className='col-10 col-md-3 mt-3 btn btn-secondary' type="submit" value="Send" />
                <ToastContainer />
            </form>
        </div>
    )
}

export default Contact
