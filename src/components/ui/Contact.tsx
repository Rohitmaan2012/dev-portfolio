"use client";

import Image from "next/image";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import type { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
  const [open, isOpen] = useState(false);
  const [error, isError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    const data = Object.fromEntries(formData);
    const json = JSON.stringify(data);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    if (response.status === 200) {
      isOpen(true);
      form.reset();
    } else {
      isError(true);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#111418] py-24 px-6 sm:px-10 mt-24 border-t border-gray-800 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-white">Get in Touch</h2>
        <p className="text-gray-300 text-lg mt-3">I&apos;d love to hear from you!</p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Illustration */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <Image
            src="/images/contactMe2.png"
            alt="Contact Illustration"
            width={700}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-[50%] min-w-[420px]">
          <form className="space-y-5 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block font-bold text-white text-[15px] mb-1" htmlFor="name">
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-[#f2f2f2] text-gray-600 placeholder-gray-400 font-semibold text-[14px] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-white text-[15px] mb-1" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                placeholder="Your Email ID"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-[#f2f2f2] text-gray-600 placeholder-gray-400 font-semibold text-[14px] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-white text-[15px] mb-1" htmlFor="message">
                Message:
              </label>
              <textarea
                placeholder="Your Message..."
                name="message"
                rows={4}
                required
                className="w-full p-3 rounded-lg bg-[#f2f2f2] text-gray-600 placeholder-gray-400 font-semibold text-[14px] focus:outline-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="cursor-pointer w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold text-base rounded-xl shadow-md hover:from-cyan-300 hover:to-blue-400 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Success Snackbar */}
      <Snackbar open={open} autoHideDuration={5000} onClose={() => isOpen(false)}>
        <Alert severity="success" onClose={() => isOpen(false)}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar open={error} autoHideDuration={5000} onClose={() => isError(false)}>
        <Alert severity="error" onClose={() => isError(false)}>
          Something went wrong. Please try again.
        </Alert>
      </Snackbar>
    </section>
  );
}
