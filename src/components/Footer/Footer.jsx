import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub} from "react-icons/ai";
import { BsLinkedin , BsFacebook } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10  text-black rounded">
                <div className="grid grid-flow-col gap-4">
                   {/* <Link to="/" className='link link-hover'>Home</Link>
                   <Link to="/" className='link link-hover'>Projects</Link> */}
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/taniyamim' target='blanks' className='text-5xl'><AiFillGithub></AiFillGithub></a>
                        <a href='https://www.linkedin.com/in/taniya-jannatul-hafsa-ba4864203' target='blank' class='text-5xl'><BsLinkedin></BsLinkedin></a>

                        <a href='https://github.com/taniyamim' target='blanks' className='text-5xl'><BsFacebook></BsFacebook></a>
                       
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Taniya Jannatul Hafsa Mim</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;