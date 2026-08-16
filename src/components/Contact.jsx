/* eslint-disable react-refresh/only-export-components */
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    setLoading(true);
    emailjs
      .send(
        'service_0h0l36k',
        'template_o6m8wir',
        {
          name: form.name.trim(),
          email: form.email.trim(),
          to_email: 'sakshamsatnalika34@gmail.com',
          message: form.message.trim(),
        },
        'VuVjNDf7H23eenaYf'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Something went wrong.');
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Saksham Satnalika</title>
        <meta name="description" content="Get in touch with Saksham Satnalika." />
        <meta name="keywords" content="Contact, Saksham Satnalika" />
      </Helmet>

      <div className="w-full">
        {/* Heading Outside the Box */}
        <motion.div
          variants={slideIn('down', 'tween', 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <p className={`${styles.sectionSubText} text-gray-600 dark:text-gray-400`}>
            Get in Touch
          </p>
          <h3 className={`${styles.sectionHeadText} text-gray-900 dark:text-white`}>
            Contact
          </h3>
        </motion.div>

        {/* Contact Section Box */}
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-[#f9fafb] dark:bg-[#0f0f1b] p-8 rounded-xl shadow-inner">
          {/* Contact Form */}
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] bg-[#f3f4f6] dark:bg-[#1d1836] p-8 rounded-2xl shadow-md transition-colors duration-300"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-5 flex flex-col gap-6"
            >
              <label className="flex flex-col">
                <span className="text-gray-800 dark:text-white font-medium mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-white dark:bg-[#2A2A3B] py-4 px-6 placeholder:text-gray-400 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-[#333] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-800 dark:text-white font-medium mb-2">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-white dark:bg-[#2A2A3B] py-4 px-6 placeholder:text-gray-400 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-[#333] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-800 dark:text-white font-medium mb-2">
                  Your Message
                </span>
                <textarea
                  rows="6"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-white dark:bg-[#2A2A3B] py-4 px-6 placeholder:text-gray-400 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-[#333] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition-all py-3 px-8 w-fit text-white font-semibold rounded-xl shadow-md shadow-blue-400"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </motion.div>

          {/* EarthCanvas */}
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <div
              className="h-full w-full rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-[#e5e7eb] to-[#f3f4f6] dark:bg-none dark:bg-transparent"
            >
              <EarthCanvas />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
