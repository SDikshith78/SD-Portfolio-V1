import "./style.css";
import TextField from "@mui/material/TextField";
import React, { useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Connect() {
  const formRef = useRef(null); // Create a ref for the form
  const [submitted, setSubmitted] = useState(false); // State to control animation visibility

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8065e020-f3d1-4979-92e0-412b0f18a0e0");
    console.log(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);  

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });

    if (res.success) {
      console.log("Success", res);
      setSubmitted(true); // Set submitted to true
      formRef.current.reset(); // Clear the form
      // Optionally, hide the animation after a delay (e.g., 3 seconds)
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      console.log("Error", res);
    }
  };

  return (
    <form ref={formRef} className="relative w-full h-screen overflow-hidden flex justify-center items-center z-10" onSubmit={onSubmit}>
      {/* Shape Container */}
      <div className="flex justify-center items-center space-x-10 z-500">
        <div className="bg-shape bg-teal opacity-50 blur-2xl animate-moveShape1"></div>
        <div className="bg-shape bg-primary opacity-50 blur-2xl animate-moveShape2"></div>
        <div className="bg-shape bg-purple opacity-50 blur-2xl animate-moveShape3"></div>
      </div>

      {/* Form Container */}
      <div className="form w-[105vh] h-[80vh] absolute z-40 bg-zinc-300 opacity-50 rounded-3xl">
        <h1 className="text-5xl font-neueMontrealmedium text-center px-2 py-4 font-semibold title">
          Get in Touch
        </h1>
        <div className="text-center">
          <TextField
            id="standard-basic"
            label="Full-Name/Username"
            name="name"
            variant="standard"
            sx={{ width: "50%" }}
            InputProps={{ sx: { color: "black" } }}
            InputLabelProps={{ sx: { color: "black", "&.Mui-focused": { color: "black" } }}}
          />
          <div className="email py-7">
            <TextField
              id="standard-basic"
              label="Email"
              name="email"
              variant="standard"
              sx={{ width: "50%" }}
              InputProps={{ sx: { color: "black" } }}
              InputLabelProps={{ sx: { color: "black", "&.Mui-focused": { color: "black" } }}}
            />
          </div>
          <div className="subject">
            <TextField
              id="standard-basic"
              label="Subject"
              name="messageSubject"
              variant="standard"
              sx={{ width: "50%" }}
              InputProps={{ sx: { color: "black" } }}
              InputLabelProps={{ sx: { color: "black", "&.Mui-focused": { color: "black" } }}}
            />
          </div>
          <div className="textarea py-7">
            <h3 className="flex justify-center items-start relative -left-[99px] pb-5">Drop your message here ⬇️</h3>
            <textarea
              className="w-[50%] h-40 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-300 focus:outline-none resize-none"
              placeholder="Enter your message"
              name="message"
            />
          </div>
        </div>
      </div>
      <input type="submit" className="bg-yellow-300 hover:bg-blue-300 px-8 py-2 rounded-xl absolute z-40 bottom-24 font-neueMontrealmedium "/>
      
      {/* Show success animation if submitted */}
      {submitted && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50"> {/* Use flex for centering */}
          <DotLottieReact
            src="/files/successEffect.json" // Replace with your actual animation path
            loop
            autoplay
            style={{ width: '400px', height: '400px' }} // Set desired size
          />
          <h1 className="text-3xl font-neueMontrealmedium font-bold text-blue-600 text-center mt-4 z-60">I appreciate your interest in connecting! <br/> Your message is important to me, <br/> and I will get back to you shortly.</h1>
        </div>
      )}
    </form>
  );
}

export default Connect;
