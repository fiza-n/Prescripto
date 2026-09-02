import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <footer className="mx-auto mt-16 max-w-7xl px-6 text-slate-600 md:px-10">
      <div className="grid grid-cols-1 gap-10 border-b border-slate-200 py-10 sm:grid-cols-2 md:grid-cols-3">
        <div className="sm:col-span-2 md:col-span-1">
          <img className="mb-5 w-40" src={assets.logo} alt="Prescripto" />
          <p className="max-w-sm text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam id
            consectetur praesentium eveniet. Debitis rerum nostrum aliquid et
            dolorum vitae?
          </p>
        </div>
        <div>
            <p className="mb-5 text-sm font-semibold tracking-wide text-slate-900">COMPANY</p>
            <ul className="space-y-3 text-sm">
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className="mb-5 text-sm font-semibold tracking-wide text-slate-900">GET IN TOUCH</p>
            <ul className="space-y-3 text-sm">
                <li>+12-3422-322</li>
                <li>hello@example.com</li>
            </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-slate-500">
        <p>Copyright 2026@ prescripto - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
