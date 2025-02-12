import React from "react";
import { Meteors } from "../components/ui/meteors";

const Contact = () => {
  return (
    <div className="w-full h-full relative ">
      
  
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg">We would love to hear from you!</p>
        <Meteors number={100} />
         <Meteors number={100} />
      </div>
     
    </div>
  );
};

export default Contact;
