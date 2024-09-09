import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white text-black p-4 md:p-20 shadow-md">
<div className="flex flex-row gap-32 items-start">
      <div className="flex flex-col gap-8">
       <img
            src="/Planecious.svg"
            alt="Planecious Logo"
            className="w-[240px] "
          />
  
        <div className="flex flex-row gap-4">
           

           <Link
             href={"https://www.instagram.com/planeciousleaders/"}
             target="_blank"
             rel="noopener noreferrer"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 hover:scale-125 cursor-pointer"
               fill="currentColor"
               viewBox="0 0 24 24"
             >
               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
             </svg>
           </Link>

           <Link
             href={"https://www.linkedin.com/groups/8147680/"}
             target="_blank"
             rel="noopener noreferrer"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 hover:scale-125 cursor-pointer"
               fill="currentColor"
               viewBox="0 0 24 24"
             >
               <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
             </svg>
           </Link>
           <Link
             href={"https://www.youtube.com/@PlaneciousLeaders"}
             target="_blank"
             rel="noopener noreferrer"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 hover:scale-125 cursor-pointer"
               fill="currentColor"
               viewBox="0 0 24 24"
             >
               <path d="M19.615 3.184C17.915 2.63 12 2.63 12 2.63s-5.916 0-7.615.554A3.977 3.977 0 0 0 2.65 5.707C2.1 7.406 2.1 12 2.1 12s0 4.593.55 6.293a3.977 3.977 0 0 0 1.735 1.972c1.7.554 7.615.554 7.615.554s5.916 0 7.615-.554a3.977 3.977 0 0 0 1.735-1.972C21.9 16.593 21.9 12 21.9 12s0-4.593-.55-6.293a3.977 3.977 0 0 0-1.735-1.973zM9.75 15.336v-6.672L15.334 12 9.75 15.336z" />
             </svg>
           </Link>
         </div>

        {/* <div className="flex flex-col">
          <p className="text-sm">Lets Transform The World Together.</p>
          <p className="text-sm">
            {" "}
            And Live Life Cleaner By Making Earth Greener.
          </p>
        </div> */}
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col gap-8">
          <p className="font-bold">Get involved</p>
          <div className="flex flex-col gap-2 text-s">
            <li className="list-none">Contact us</li>
            <li className="list-none">Join the community</li>
            <li className="list-none">About us</li>
          </div>
        </div>
      </div>
        </div>
        <div>
          <p className="example -rotate-6 text-4xl font-thin bgfooterText ">
            For causes{" "}
          </p>
          <p className="example -rotate-6 text-4xl font-thin bgfooterText ">
            that really{" "}
          </p>
          <p className="example -rotate-6 text-4xl font-thin bgfooterText ">
            {" "}
            matter
          </p>
        </div>
   
      {/* <div className="flex flex-wrap">
        <div className="flex flex-col gap-8">
          <p>Get involved</p>
          <div className="flex flex-col gap-2 text-s">
            <li className="list-none">Contact us</li>
            <li className="list-none">Join the community</li>
            <li className="list-none">About us</li>
          </div>
        </div>
      </div> */}
 
    </div>
    <div className="w-full h-4 bg-slate-200" >
      <p className="text-sm text-center">© 2024 Planecious. All rights reserved.</p>
    </div>
    </div>
  );
}
