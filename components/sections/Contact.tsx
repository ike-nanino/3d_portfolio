"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactExperience from "../contact/ContactExperience";

const Contact = () => {
  // Type the ref properly for HTMLFormElement
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Check if form ref is available
    if (!formRef.current) {
      console.error("Form reference is null");
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      console.log("Email sent successfully!");
      // Optional: Add success toast/notification here
    } catch (error) {
      console.error("EmailJS Error:", error);
      // Optional: Add error toast/notification here
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center px-5 md:px-10 md:mt-40 mt-20">
      <div className="w-full h-full md:px-10 px-5">
        <p className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
          Get in Touch – Let&apos;s Connect
        </p>

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 mt-16">
          <div className="lg:col-span-5">
            <div className="flex-center border border-black-50 bg-black-100 rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-white-600 font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                    className="bg-black-300 border border-black-600 rounded-lg px-4 py-3 text-white-800 placeholder:text-white-500 focus:outline-none focus:border-white-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-white-600 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    className="bg-black-300 border border-black-600 rounded-lg px-4 py-3 text-white-800 placeholder:text-white-500 focus:outline-none focus:border-white-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-white-600 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                    className="bg-black-300 border border-black-600 rounded-lg px-4 py-3 text-white-800 placeholder:text-white-500 focus:outline-none focus:border-white-600 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full"
                >
                  <div className="p-4 bg-blue-600 hover:bg-blue-600/50 transition-colors rounded-lg group disabled:opacity-50 disabled:cursor-not-allowed">
                    <p className="text-white font-medium text-center">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                  </div>
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:col-span-7 min-h-96">
            <div className="bg-[#0E0E10] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;