const Contact = () => (
  <section className="py-16 bg-gray-100" id="contact">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 border rounded-lg"
          rows="4"
        ></textarea>
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
