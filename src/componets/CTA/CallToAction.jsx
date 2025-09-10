const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-blue-400 py-20 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
         Ready to Land Your Dream Job?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of professionals who found their dream jobs with us.
        </p>
        <button className="bg-white mr-5 cursor-pointer text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
          Get Started Today
        </button>
        <button class="bg-transparent cursor-pointer text-black-800 font-semibold px-6 py-3 rounded border border-black hover:bg-orange-300">Post a Job</button>
      </div>
    </section>
  );
};

export default CallToAction;
