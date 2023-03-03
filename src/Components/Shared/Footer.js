import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
    <footer className="footer p-10   bg-slate-900 text-white ">
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
    <footer className="footer footer-center p-4  bg-slate-900 text-white  border-t-2 border-t-orange-100">
      <div>
        <p>Copyright © 2023 - All right reserved by <Link to='/' className='text-blue-200 font-bold'>CARRY</Link> Ltd</p>
      </div>
    </footer>
  </div>
  );
};

export default Footer;