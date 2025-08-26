const CommunityTestimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white-50 to-indigo-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Community Says
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128&q=80" 
                  alt="Jane Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Jane Doe</h3>
                <p className="text-sm text-gray-600">Marketing Specialist</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "This platform transformed how I find talent. The quality and diversity of freelancers are exceptional!"
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128&q=80" 
                  alt="John Smith" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">John Smith</h3>
                <p className="text-sm text-gray-600">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "I've learned so many new skills here and even landed a great freelancing gig. The community is fantastic!"
            </p>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128&q=80" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">Sarah Chen</h3>
                <p className="text-sm text-gray-600">UX Designer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The live sessions are incredible for learning, and the gamified challenges keep me motivated. Highly recommend!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;