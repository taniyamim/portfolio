import React from 'react';
import img from '../../assets/me.jpg'
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <div id='about' className='py-5'>
            <Fade cascade><h1 className='py-5 w-1/2 mx-auto text-5xl text-black font-extrabold border-double border-t-4 border-b-4 border-rose-300'>About Me</h1></Fade>
             
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-2xl shadow-2xl w-1/2" />
                    <div>
                        <h1 className="text-4xl text-black font-bold">Hire Me!</h1>
                        <p className="py-6 text-black"> I am a full-stack developer with expertise in both front-end and back-end web development. With a strong command of HTML, CSS, and JavaScript, ReactJS, I create visually appealing and user-friendly interfaces. I am also proficient in technologies such as MongoDB, ExpressJS, Firebase, and Node.js, allowing me to design robust databases and handle server-side logic effectively. My understanding of the entire web development process, coupled with my problem-solving skills, makes me a valuable asset to any project.</p>
                       <Link to="/contact"> <button className="btn text-white bg-rose-400">Contact Me</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;