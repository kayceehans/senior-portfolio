"use client";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Linkedin, Github, PhoneCall, Webcam, ArrowBigLeft } from "lucide-react";

export default function ContactPage() {
   const form = useRef<HTMLFormElement>(null);
  
    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
      emailjs.sendForm('service_fyhztl2', 'template_ahmv90l', form.current!, 'fA3WHZmncV7okc_Xi')
        .then(() => alert('Message Sent, thank you!'), (error) => console.log(error.text));
    };

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 min-h-screen">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Left Side: Professional Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4 italic text-blue-500">Let's Connect</h1>
          <p className="text-slate-400 text-lg mb-10">
            I’m open to discussing **Senior .NET Architect** roles, full-stack consultancy, or speaking engagements regarding cloud modernization and software development best practices. Feel free to reach out for collaborations, mentorship, or to chat about the latest trends in software architecture,
             and programming training.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email Me</p>
                <p className="font-semibold text-slate-500">kazeem.hassan@outlook.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                <Webcam size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Website</p>
                <a href="https://kaz-bit.vercel.app" className="font-semibold text-blue-400 hover:underline">
                  Click to visit
                </a>
              </div>
            </div>

             <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                <PhoneCall size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <a href="https://kaz-bit.vercel.app" className="font-semibold text-blue-400 hover:underline">
                  +2348123240434 | +2348095834592
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-semibold text-slate-500">Remote / Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form Component */}
        <div className="bg-slate-900/50 p-1 rounded-2xl border border-slate-800">
             <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-blue-950 p-8 rounded-lg">
      <input type="text" name="user_name" placeholder="Full Name" className="w-full p-3 bg-blue-900 border border-blue-700 text-white rounded focus:outline-none focus:border-blue-400" required />
      <input type="email" name="user_email" placeholder="Email Address" className="w-full p-3 bg-blue-900 border border-blue-700 text-white rounded focus:outline-none focus:border-blue-400" required />
      <textarea name="message" placeholder="How can we help?" className="w-full p-3 bg-blue-900 border border-blue-700 text-white rounded h-32" required />
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition shadow-lg">Send Message</button>
    </form>
        </div>
        <div> <span><a href="/">Take Me Home! <ArrowBigLeft size={20} /></a></span></div> 
      </div>
    </main>
  );
}
