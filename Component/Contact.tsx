import React from 'react'


const Contact = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8 space-y-8">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Email</h2>
            <p className="text-gray-500">support@rakibshop.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
            <p className="text-gray-500">+880 1234 567890</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Address</h2>
            <p className="text-gray-500">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white font-medium py-2 px-4 rounded-md hover:bg-emerald-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Optional: Map */}
        {/* <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.908854827407!2d90.40060441542666!3d23.81033148459014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c5d3f2b4bf%3A0x6c5d8c2f72f5bbd9!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            className="w-full h-64 rounded-md"
            loading="lazy"
          ></iframe>
        </div> */}
      </div>
    </div>
  )
}

export default Contact
