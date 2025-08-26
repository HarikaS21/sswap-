const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Ready to Elevate Your Professional Journey?
        </h2>
        <p className="text-xl text-black-100 mb-8 max-w-2xl mx-auto">
          Join thousands of recruiters, freelancers, and skill seekers thriving in our dynamic community. Your next opportunity awaits.
        </p>
        <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
          Join the Community Now
        </button>
      </div>
    </section>
  );
};

export default CallToAction;