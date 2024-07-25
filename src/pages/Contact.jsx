// Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" })
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-3xl font-medium mb-4 ml-10">Contact <span className='bg-blue-800 text-white px-2'>Us</span></h1>
      <div className='flex justify-center items-center mt-16'>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md w-[90%]">
          <h3 className="text-xl font-semibold mb-4">School’s Address</h3>
          <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
          <h3 className="text-xl font-semibold mt-4">Phone</h3>
          <p>+1 (123) 456-7890</p>
          <h3 className="text-xl font-semibold mt-4">Email</h3>
          <p>info@springdale.edu</p>
        </div>
      </div>
      <div className='flex justify-center items-center mt-16 mb-20'>
        <div className="mt-8 w-[70%] max-lg:w-[90%] items-center bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">Submit</button>
          </form>
        </div>
      </div>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093545!2d144.95592591531825!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779f8e1c8bb1c!2sFederation+Square!5e0!3m2!1sen!2sau!4v1542785826920"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
