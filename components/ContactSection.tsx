// src/components/ContactSection.jsx
"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import EmailSendingForm from "./EmailSendingForm";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 w-full px-4
      "
      // px-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800
    >
      <div className="max-w-full mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-4 inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-semibold tracking-wide">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl font-extrabold text-slate-900 dark:text-sky-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </motion.h2>

          {/* <motion.p
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </motion.p> */}
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </h4>
                    <a
                      href="mailto:yha15380@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      yha15380@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FaPhone className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-slate-700 dark:text-slate-300">
                      Phone
                    </h4>
                    <a
                      href="tel:+959784224472"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +959 784 224 472
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-slate-700 dark:text-slate-300">
                      Location
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Taungoo, Bago, Myanmar
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/ye-htet-aung-23abb4280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <FaLinkedinIn />
                    </a>
                    {/* <a
                                   href="#"
                                   className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
                                 >
                                   <FaTwitter />
                                 </a> */}
                    <a
                      href="https://github.com/Yehtetaung158/"
                      className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <EmailSendingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
