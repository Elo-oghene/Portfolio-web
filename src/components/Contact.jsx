import React, { useState } from "react";

const Contact = () => {
    const [name,setname] = useState("")
    const [Email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const HandleSubmit = (e)=>{
        e.preventDefault();
        console.log(name)
        console.log(Email)
        console.log(message)
    }
  return (
    <div className="w-full px-8 flex flex-col items-center">
      <div className="text-center font-extrabold text-[40px] dark:text-white">Contact</div>
      <form onSubmit={HandleSubmit} className="w-full max-w-[700px] flex flex-col items-center mt-8">
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e)=>setname(e.target.value)}
            className="w-full px-4 py-2  outline-none rounded-lg border-2 border-[#121212] dark:bg-gray-900 dark:border-white"
          />
        </div>
        <div className="w-full mb-4">
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            className="w-full px-4 py-2  outline-none rounded-lg border-2 border-[#121212] dark:bg-gray-900 dark:border-white"
          />
        </div>
        <div className="w-full mb-4">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
            className="w-full px-4 py-4 outline-none h-64 rounded-lg border-2 border-[#121212] dark:bg-gray-900 dark:border-white"
          />
        </div>
        <button type="submit" className="bg-[#0987F2] px-8 py-3 rounded-lg text-white transition ease-in-out duration-200 hover:scale-105">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
