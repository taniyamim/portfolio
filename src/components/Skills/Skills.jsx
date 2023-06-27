import React from 'react';
import skill1 from '../../assets/mongo.png'
import skill2 from '../../assets/js.png'
import skill3 from '../../assets/nodejs.png'
import skill4 from '../../assets/react.png'
import skill5 from '../../assets/html5.png'
import skill6 from '../../assets/css.png'
import skill7 from '../../assets/bootstrap.png'
import skill8 from '../../assets/tailwind.png'
import skill9 from '../../assets/firebase.png'
import skill10 from '../../assets/jwt.png'
import skill11 from '../../assets/vercel.png'
import skill12 from '../../assets/api.png'
import { AttentionSeeker, Fade } from 'react-awesome-reveal';

const Skills = () => {
    return (
        <div className='mt-14'>
             <AttentionSeeker>
            <h1 className='my-10 py-5 w-1/2 mx-auto text-5xl text-black font-extrabold border-t-4 border-b-4 border-double border-rose-300'>My Skills</h1>
           </AttentionSeeker>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-10'>
            
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill1} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">MongoDB</h2>
                        <p className='text-black'>I'm skilled in MongoDB, proficient in data modeling, CRUD operations, query optimization, and analysis.</p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill2} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">JavaScript</h2>
                        <p className='text-black'>I'm a skilled JavaScript developer with expertise in creating dynamic web applications. </p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill3} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">NodeJs</h2>
                        <p className='text-black'>I excel in Node.js, crafting scalable and efficient server-side applications. </p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill4} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">React</h2>
                        <p className='text-black'>I excel in React, building captivating and responsive user interfaces.</p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill5} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">HTML</h2>
                        <p className='text-black'>I'm proficient in HTML,  I can ensure that your web content is structured and presented effectively to users.</p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill6} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">CSS</h2>
                        <p className='text-black'>I'm proficient in CSS, the styling language of the web. With my CSS skills, I can bring visual appeal and design consistency to web pages. </p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill7} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">Bootstrap</h2>
                        <p className='text-black'>Proficient in Bootstrap, I create responsive and visually appealing web applications with ease.</p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill8} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">Tailwind CSS</h2>
                        <p className='text-black'>Effortlessly harnessing the power of Tailwind CSS, I design stunning, highly customizable, and responsive web applications.</p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill12} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">REST API</h2>
                        <p className='text-black'>I skillfully design and develop RESTful APIs, providing efficient and scalable communication between different software systems.</p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill9} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">Firebase</h2>
                        <p className='text-black'>I expertly leverage Firebase, empowering me to build robust and scalable web and mobile applications with real-time data synchronization and effortless cloud integration.</p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill10} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">JWT</h2>
                        <p className='text-black'>I adeptly implement JWT (JSON Web Tokens), enhancing security and enabling seamless authentication and authorization across web applications and APIs.</p>
                    </div>
                </div>
                <div className="card w-72 shadow-2xl my-10 transform transition-transform hover:scale-110 hover:bg-rose-100">
                    <figure className="px-10 pt-10">
                        <img src={skill11} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">Vercel</h2>
                        <p className='text-black'>I skillfully deploy and host web applications using Vercel, ensuring fast and scalable delivery of static sites and serverless functions with seamless integration and continuous deployment.</p>
                    </div>
                </div>

         
            </div>
        </div>
    );
};

export default Skills;