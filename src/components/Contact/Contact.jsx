import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vomkjxz', 'template_ii6nl5j', form.current, 'e-2ZXELDeHb1i-Dsv')
          .then((result) => {
              console.log(result.text);
              Swal.fire(
                'Great!',
                'Your Message Has been Sent!',
                'success'
              )
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div>
            <Helmet>
                <title>Taniya || Portfolio || Contact Me</title>

            </Helmet>

            <div>
                <h1 className='my-10 py-5 w-1/2 mx-auto text-5xl text-black font-extrabold border-double border-t-4 border-b-4 border-rose-300'>Contact Me</h1>

                <div className='bg-rose-100 p-20'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-bold">Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="form_name" placeholder="Your Name" className="input mx-auto  bg-white w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-bold">Email</span>
                                </label>
                                <label className="input-group ">
                                    <input
                                        type="email"
                                        name="form_email"
                                        placeholder="Your Email"
                                        className="input mb-5  bg-white w-full"
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black font-bold">Your Message</span>
                                </label>
                                <label className="input-group">

                                    <textarea type="text" name="message" placeholder="Type Your Message Here" className="input mx-auto h-52  bg-white w-full mb-10 py-2" />
                                </label>
                            </div>
                        </div>




                        <input type="submit" value="Send" className="btn btn-block text-white bg-rose-500" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;