import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRegHandPointRight } from "react-icons/fa";
import { BsGlobe2, BsGithub } from "react-icons/bs";
import project1img1 from '../../assets/f1.png'
import project1img2 from '../../assets/f2.png'
import project1img3 from '../../assets/f3.png'
import project2img1 from '../../assets/t1.png'
import project2img2 from '../../assets/t2.png'
import project2img3 from '../../assets/t3.png'
import project3img1 from '../../assets/s1.png'
import project3img2 from '../../assets/s2.png'
import project3img3 from '../../assets/s3.png'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from 'react-awesome-reveal';





const Projects = () => {

    return (
        <div>

            <Helmet>
                <title>Taniya || Portfolio || Projects</title>
            </Helmet>
            <div>
                <h1 className='my-20 py-5 w-1/2 mx-auto text-5xl text-black font-extrabold border-double border-t-4 border-b-4 border-rose-300'>My Projects</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className="card w-full shadow-2xl  transform transition-transform hover:scale-110 hover:bg-rose-100">
                        <figure className="px-10 pt-10">
                            <div className="carousel w-full">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <img src={project1img1} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" className="btn btn-circle text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                                        <a href="#slide2" className="btn btn-circle text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <img src={project1img2} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn btn-circle text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                                        <a href="#slide3" className="btn btn-circle text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <img src={project1img3} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                                        <a href="#slide1" className="btn btn-circle text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center text-black">
                            <h2 className="card-title">Fusion Cuisine</h2>
                            <p>Fusion Cuisine is about chefs of Arab which includes these features:</p>
                            <Fade cascade>
                                
                                    <li>Implemented user authentication and authorization, enabling secure access through login or registration.</li>
                                    <li>Developed a dynamic chef's recipe page with a favorite button feature, allowing users to save recipes.</li>
                                    <li>Enhanced user profile interactions by implementing a tooltip feature, displaying the user's name when hovering over.</li>
                                
                            </Fade>


                            <div className="card-actions">
                                <a href="https://chefs-hunter-54e93.web.app/" target='blank' className="btn bg-rose-500 text-white"> <BsGlobe2></BsGlobe2> Live Site</a>
                                <a href="https://github.com/taniyamim/fusion-cuisine-client" target='blank' className="btn outline-rose-500 text-white"> <BsGithub></BsGithub> Github</a>

                            </div>
                        </div>
                    </div>
                    <div className="card w-full shadow-2xl transform transition-transform hover:scale-110 hover:bg-rose-100">
                        <figure className="px-10 pt-10">
                            <div className="carousel w-full">
                                <div id="slide4" className="carousel-item relative w-full">
                                    <img src={project2img1} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide6" className="btn btn-circle text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                                        <a href="#slide5" className="btn btn-circle text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                                <div id="slide5" className="carousel-item relative w-full">
                                    <img src={project2img2} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                                        <a href="#slide6" className="btn btn-circle text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                                <div id="slide6" className="carousel-item relative w-full">
                                    <img src={project2img3} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide5" className="btn btn-circle text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                                        <a href="#slide4" className="btn btn-circle text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center text-black">
                            <h2 className="card-title">Toys World</h2>
                            <p>Toys World is a marketplace of kid’s toys that includes these features-</p>
                            <Fade cascade>
                            <li>Introduced secure login and registration system with email/password and Google login options.</li>
                            <li>Produced a homepage with a carousel featuring featured categories and a tabbed section for easy navigation.</li>
                            <li>Enabled users to add, update, and delete toy listings for seamless management of the marketplace.</li>
                            </Fade>

                            <div className="card-actions">
                                <a href="https://toys-marketplace-17dd1.web.app/" target='blank' className="btn bg-rose-500 text-white"> <BsGlobe2></BsGlobe2> Live Site</a>
                                <a href="https://github.com/taniyamim/toys-world-client" target='blank' className="btn outline-rose-500 text-white"> <BsGithub></BsGithub> Github</a>

                            </div>
                        </div>
                    </div>
                    <div className="card w-full shadow-2xl transform transition-transform hover:scale-110 hover:bg-rose-100">
                        <figure className="px-10 pt-10">
                            <div className="carousel w-full">
                                <div id="slide7" className="carousel-item relative w-full">
                                    <img src={project3img1} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide9" className="btn btn-circle text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                                        <a href="#slide8" className="btn btn-circle text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                                <div id="slide8" className="carousel-item relative w-full">
                                    <img src={project3img2} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide7" className="btn btn-circle text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                                        <a href="#slide9" className="btn btn-circle text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                                <div id="slide9" className="carousel-item relative w-full">
                                    <img src={project3img3} className="w-full" />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide8" className="btn btn-circle text-white"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                                        <a href="#slide7" className="btn btn-circle text-white"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center text-black">
                            <h2 className="card-title">Happy Trails Camp</h2>
                            <p>Happy Trails Camp is an educational site where students can select and enroll in many courses. The site has features like-:</p>
                            <Fade cascade>
                            <li>Analyzed an interactive course selection feature, allowing instructors to add classes managed by admin.</li>
                            <li>Admin has the authority to approve deny or send feedback to the added class of instructors.</li>
                            <li>Added a secure payment system using strip</li>
                            </Fade>

                            <div className="card-actions">
                                <a href="https://summer-camp-35bc5.web.app/" target='blank' className="btn bg-rose-500 text-white"> <BsGlobe2></BsGlobe2> Live Site</a>
                                <a href="https://github.com/taniyamim/happy-trails-camp-client" target='blank' className="btn outline-rose-500 text-white"> <BsGithub></BsGithub> Github</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;