import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";


const Banner = () => {
    return (
        <div id=''>
            <div className="hero min-h-screen bg-white bg-opacity-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?resize=400x0" className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                    <div className=''>
                        <h1 className="text-5xl text-black font-bold">Taniya Jannatul Hafsa Mim</h1>
                        <p className="py-6 text-black">Welcome to my portfolio! I'm a versatile full-stack developer passionate about creating exceptional web applications. With expertise in front-end and back-end development, I bring a holistic approach to crafting immersive digital experiences. Let's explore the world of innovative web development together!</p>
                        <p className='pb-5 text-black'>To know more about my projects click the projects button!!</p>
                        <Link to="/projects"> <button className="btn bg-rose-500 text-white">Projects</button></Link>
                        <a href='TaniyaResume.pdf' download className="btn bg-rose-400 text-white ml-5">Download Resume<FaDownload></FaDownload></a>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;