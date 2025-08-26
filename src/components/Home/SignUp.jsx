import React from 'react';
import { BriefcaseIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const SignUp = () => {


  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 py-30">
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join the Community</h1>
            <p className="text-gray-600 mb-8">Select your role to get started.</p>
            
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="border border-gray-300 rounded-lg p-4 text-center">
                <BriefcaseIcon className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Recruiter</p>
                <p className="text-sm text-gray-600">Hire top talent.</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 text-center">
                <UserGroupIcon className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Freelancer</p>
                <p className="text-sm text-gray-600">Offer your skills.</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 text-center">
                <AcademicCapIcon className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Skill Seeker</p>
                <p className="text-sm text-gray-600">Learn and grow.</p>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="your.email@example.com" 
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:border-blue-500" 
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                placeholder="create a strong password" 
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-600 focus:outline-none focus:border-blue-500" 
              />
            </div>
            
            <button className="w-full bg-blue-500 text-white font-semibold rounded-md py-3 mb-6 hover:bg-blue-600">
              Sign Up
            </button>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
            
            <button className="w-full border border-gray-300 rounded-md py-3 mb-4 flex items-center justify-center text-gray-700 hover:bg-gray-50">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
            
            <button className="w-full border border-gray-300 rounded-md py-3 flex items-center justify-center text-gray-700 hover:bg-gray-50">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg" alt="LinkedIn" className="w-5 h-5 mr-2" />
              Continue with LinkedIn
            </button>
            
            <p className="text-center text-gray-600 mt-6">
              Already have an account? <a href="#" className="text-blue-500 hover:underline">Log In</a>
            </p>
            
            <p className="text-center text-gray-500 text-sm mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
          
          <div className="w-full md:w-1/2 bg-gray-100 flex justify-center items-center p-4">
            <div className="bg-gray-200 rounded-md w-full h-64 flex justify-center items-center">
              <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                {/* Lines */}
                <line x1="200" y1="150" x2="130" y2="70" stroke="#d1d5db" strokeWidth="2" />
                <line x1="200" y1="150" x2="270" y2="70" stroke="#d1d5db" strokeWidth="2" />
                <line x1="200" y1="150" x2="100" y2="150" stroke="#d1d5db" strokeWidth="2" />
                <line x1="200" y1="150" x2="300" y2="150" stroke="#d1d5db" strokeWidth="2" />
                <line x1="200" y1="150" x2="130" y2="230" stroke="#d1d5db" strokeWidth="2" />
                <line x1="200" y1="150" x2="270" y2="230" stroke="#d1d5db" strokeWidth="2" />
                <line x1="200" y1="150" x2="200" y2="40" stroke="#d1d5db" strokeWidth="2" />
                <line x1="200" y1="150" x2="200" y2="260" stroke="#d1d5db" strokeWidth="2" />
                <line x1="130" y1="70" x2="70" y2="30" stroke="#d1d5db" strokeWidth="2" />
                <line x1="270" y1="70" x2="330" y2="30" stroke="#d1d5db" strokeWidth="2" />
                <line x1="130" y1="230" x2="70" y2="270" stroke="#d1d5db" strokeWidth="2" />
                <line x1="270" y1="230" x2="330" y2="270" stroke="#d1d5db" strokeWidth="2" />

                {/* Small dots */}
                <circle cx="70" cy="30" r="4" fill="#fde68a" />
                <circle cx="330" cy="30" r="4" fill="#fde68a" />
                <circle cx="70" cy="270" r="4" fill="#fde68a" />
                <circle cx="330" cy="270" r="4" fill="#fde68a" />
                <circle cx="200" cy="40" r="4" fill="#fde68a" />
                <circle cx="200" cy="260" r="4" fill="#fde68a" />

                {/* People circles */}
                <circle cx="200" cy="150" r="20" fill="#fdba74" />
                <circle cx="130" cy="70" r="12" fill="#fdba74" />
                <circle cx="270" cy="70" r="12" fill="#fdba74" />
                <circle cx="100" cy="150" r="12" fill="#fdba74" />
                <circle cx="300" cy="150" r="12" fill="#fdba74" />
                <circle cx="130" cy="230" r="12" fill="#fdba74" />
                <circle cx="270" cy="230" r="12" fill="#fdba74" />

                {/* Simple person icons inside circles - central */}
                <g transform="translate(190,140)">
                  <circle cx="10" cy="5" r="5" fill="white" opacity="0.8" />
                  <path d="M10 10 v10 M5 20 h10 M10 10 h-5 M10 10 h5" stroke="white" strokeWidth="1" opacity="0.8" />
                </g>

                {/* Repeat for others, scaled down */}
                <g transform="translate(125,65) scale(0.6)">
                  <circle cx="10" cy="5" r="5" fill="white" opacity="0.8" />
                  <path d="M10 10 v10 M5 20 h10 M10 10 h-5 M10 10 h5" stroke="white" strokeWidth="1" opacity="0.8" />
                </g>
                <g transform="translate(265,65) scale(0.6)">
                  <circle cx="10" cy="5" r="5" fill="white" opacity="0.8" />
                  <path d="M10 10 v10 M5 20 h10 M10 10 h-5 M10 10 h5" stroke="white" strokeWidth="1" opacity="0.8" />
                </g>
                <g transform="translate(95,145) scale(0.6)">
                  <circle cx="10" cy="5" r="5" fill="white" opacity="0.8" />
                  <path d="M10 10 v10 M5 20 h10 M10 10 h-5 M10 10 h5" stroke="white" strokeWidth="1" opacity="0.8" />
                </g>
                <g transform="translate(295,145) scale(0.6)">
                  <circle cx="10" cy="5" r="5" fill="white" opacity="0.8" />
                  <path d="M10 10 v10 M5 20 h10 M10 10 h-5 M10 10 h5" stroke="white" strokeWidth="1" opacity="0.8" />
                </g>
                <g transform="translate(125,225) scale(0.6)">
                  <circle cx="10" cy="5" r="5" fill="white" opacity="0.8" />
                  <path d="M10 10 v10 M5 20 h10 M10 10 h-5 M10 10 h5" stroke="white" strokeWidth="1" opacity="0.8" />
                </g>
                <g transform="translate(265,225) scale(0.6)">
                  <circle cx="10" cy="5" r="5" fill="white" opacity="0.8" />
                  <path d="M10 10 v10 M5 20 h10 M10 10 h-5 M10 10 h5" stroke="white" strokeWidth="1" opacity="0.8" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SignUp;