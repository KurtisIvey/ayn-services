import React, { useState, useCallback, useMemo } from "react";
//import emailjs from "@emailjs/browser";



const Contact: React.FC = () => {
  const to_name = useMemo(() => "Scott Robertson", []);

  const [params, setParams] = useState({
    to_name,
    user_email: "",
    user_name: "",
    message: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setParams((prevParams) => ({
        ...prevParams,
        [name]: value,
      }));
    },
    []
  );

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      //const form = e.currentTarget;
      // await emailjs.sendForm(serviceId, templateId, form, userId);
      alert("Contact Form disabled in portfolio preview");
      resetForm();
    } catch (error) {
      console.log("FAILED...", error);
      alert(
        "Error in sending email. Please reach out directly through your email client."
      );
    }
  };

  function resetForm() {
    setParams({
      to_name: to_name,
      user_email: "",
      user_name: "",
      message: "",
    });
  }

  return (
    <section className="bg-white">
      <div className="py-8 lg:pt-0  px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p
          style={{ lineHeight: "23px" }}
          className="mb-8 lg:mb-16 text-center text-[#08406f] sm:text-base tracking-wider mt-10"
        >
          Looking for comprehensive services? Discover our one-stop solution for
          all your cleaning and maintenance needs. Complete the form below, and
          we'll promptly assist you. Your satisfaction is our utmost priority!
        </p>
        <form action="#" className="space-y-8" onSubmit={(e) => sendEmail(e)}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-blue-500 block w-full p-2.5"
              name="user_email"
              onChange={handleChange}
              placeholder="yourEmail@gmail.com"
              required
              value={params.user_email}
              aria-label="Your email address"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:outline-blue-500"
              name="user_name"
              onChange={handleChange}
              placeholder="Your Name"
              required
              value={params.user_name}
              aria-label="Your name"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:outline-blue-500"
              placeholder="Leave a comment..."
              onChange={handleChange}
              name="message"
              required
              aria-label="Your message"
              value={params.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700/90 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-10 py-2.5 mr-2 mb-2 mt-6 shadow-md hover:shadow-lg"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
