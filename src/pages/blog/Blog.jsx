import React from "react";

const Blog = () => {
  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <h1 className="text-[34px] font-bold">Skill Insights & Updates</h1>
      <p className="text-[18px] text-gray-600 mt-2">
        Explore articles, tutorials, industry news, and platform updates
        relevant to the skill-sharing community. <br />
        Enhance your professional journey.
      </p>

      {/* Navbar + Search */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-6   rounded-lg p-2 ">
        <div className="flex flex-wrap gap-10 border border-gray-200 bg-gray-100 px-15 py-1 rounded-lg ">
          <button className="text-[14px] w-[49px] h-[36px] rounded-md bg-white cursor-pointer">
            All
          </button>
          <button className="text-[14px]  rounded-md hover:bg-gray-100 cursor-pointer hover:text-blue-500">
            Development
          </button>
          <button className="text-[14px]  rounded-md hover:bg-gray-100 cursor-pointer hover:text-blue-500">
            Design
          </button>
          <button className="text-[14px]  rounded-md hover:bg-gray-100 cursor-pointer hover:text-blue-500">
            Marketing
          </button>
          <button className="text-[14px]  rounded-md hover:bg-gray-100 cursor-pointer hover:text-blue-500">
            Business
          </button>
          <button className="text-[14px]  rounded-md hover:bg-gray-100 cursor-pointer hover:text-blue-500">
            Productivity
          </button>
          <button className="text-[14px]  rounded-md hover:bg-gray-100 cursor-pointer hover:text-blue-500">
            Platform News
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search articles..."
          className="text-[14px] w-[244px]  lg:mt-0 max-md:mt-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Featured Articles */}
      <h2 className="text-[24px] font-semibold mt-8">Featured Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Article 1 */}
        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src="/public/images/Blog-img-1.png"
            alt="React Hooks"
            className="w-full h-48 object-cover hover:scale-110 transition-all transform-800 cursor-pointer"
          />
          <div className="p-4">
            <span className="bg-gray-200 text-[12px] px-[11px] py-[1px] rounded-md inline-block mb-2 w-[100px] h-[22px] text-center">
              Development
            </span>
            <h3 className="text-[20px] font-semibold leading-snug">
              Mastering React Hooks: A Deep Dive into useState and useEffect
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Unlock the full potential of React development with a
              comprehensive guide to understanding and effectively using
              useState and useEffect. Learn best practices and common pitfalls.
            </p>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/public/images/Johnson.png"
                  alt="Alex Chen"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[12px] font-medium">Alex Chen</span>
              </div>
              <span className="text-[12px] text-gray-500">July 24, 2024</span>
            </div>
          </div>
        </div>

        {/* Article 2 */}
        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src="/public/images/Blog-img-2.png"
            alt="UI UX Design"
            className="w-full h-48 object-cover hover:scale-110 transition-all transform-800 cursor-pointer"
          />
          <div className="p-4">
            <span className="bg-gray-200 text-[12px] px-[11px] py-[1px] rounded-md inline-block mb-2 w-[70px] h-[22px] text-center">
              Design
            </span>
            <h3 className="text-[20px] font-semibold leading-snug">
              The Principles of Modern UI/UX Design for Web Applications
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Explore the core principles that drive successful modern UI/UX
              design. From intuitive navigation to accessible interfaces,
              discover how to create delightful user experiences.
            </p>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/public/images/EmilyUIUX.png"
                  alt="Sarah Miller"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[12px] font-medium">Sarah Miller</span>
              </div>
              <span className="text-[12px] text-gray-500">July 20, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* More Articles Grid */}
      <h2 className="text-[24px] font-semibold mt-12">All Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {/* Example Article Card 1 */}
        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src="/public/images/Article-1.png"
            alt="SEO Freelancers"
            className="w-full h-40 object-cover hover:scale-110 transition-all transform-800 cursor-pointer"
          />
          <div className="p-4">
            <span className="bg-gray-200 text-[12px] w-[82px] h-[22px] px-[11px] py-[1px] rounded-md inline-block mb-2 text-center">
              Marketing
            </span>
            <h3 className="text-[20px] font-semibold leading-snug">
              Leveraging SEO for Freelancers: Boost Your Online Visibility
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              A practical guide for freelancers to improve their search engine
              optimization (SEO) and attract more clients. Learn keyword
              research.
            </p>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/public/images/Ethan.png"
                  alt="David Lee"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[12px] font-medium">David Lee</span>
              </div>
              <span className="text-[12px] text-gray-500">July 18, 2024</span>
            </div>
          </div>
        </div>

        {/* Repeat this structure for 6 more cards */}
        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src="/public/images/Article-2.png"
            alt="Article"
            className="w-full h-40 object-cover hover:scale-110 transition-all transform-800 cursor-pointer"
          />
          <div className="p-4">
            <span className="bg-gray-200 text-[12px] w-[82px] h-[22px] px-[11px] py-[1px] rounded-md inline-block mb-2 text-center">
              Business
            </span>
            <h3 className="text-[20px] font-semibold leading-snug">
              Starting Your Own Consultancy: A Step-by-Step Guide
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Dreaming of becoming a consultant? This guide breaks down the
              essential steps from niche identification to client acquisition
              and building a strong professional network.
            </p>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/public/images/Johnson.png"
                  alt="Author"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[12px] font-medium">Emily White</span>
              </div>
              <span className="text-[12px] text-gray-500">July 15, 2024</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src="/public/images/Article-3.png"
            alt="Article"
            className="w-full h-40 object-cover hover:scale-110 transition-all transform-800 cursor-pointer"
          />
          <div className="p-4">
            <span className="bg-gray-200 text-[12px] w-[82px] h-[22px] px-[11px] py-[1px] rounded-md inline-block mb-2 text-center">
              Productivity
            </span>
            <h3 className="text-[20px] font-semibold leading-snug">
              Time Management Hacks for Remote Professionals
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Maximize your efficiency and maintain work-life balance with these
              proven time management techniques tailored for remote
            </p>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/public/images/Johnson.png"
                  alt="Author"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[12px] font-medium">David Lee</span>
              </div>
              <span className="text-[12px] text-gray-500">July 16, 2024</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src="/public/images/Article-4.png"
            alt="Article"
            className="w-full h-40 object-cover hover:scale-110 transition-all transform-800 cursor-pointer"
          />
          <div className="p-4">
            <span className="bg-gray-200 text-[12px] w-[82px] h-[22px] px-[11px] py-[1px] rounded-md inline-block mb-2 text-center">
              Platform News
            </span>
            <h3 className="text-[20px] font-semibold leading-snug">
              Introducing Skill Exchange Platform's New Gamification Features!
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Get ready to level up your career! We're thrilled to announce
              exciting new gamification features designed to make skill sharing
              and
            </p>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/public/images/Johnson.png"
                  alt="Author"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[12px] font-medium">
                  SkillExchange Team
                </span>
              </div>
              <span className="text-[12px] text-gray-500">July 10, 2024</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src="/public/images/Article-5.png"
            alt="Article"
            className="w-full h-40 object-cover hover:scale-110 transition-all transform-800 cursor-pointer"
          />
          <div className="p-4">
            <span className="bg-gray-200 text-[12px] w-[82px] h-[22px] px-[11px] py-[1px] rounded-md inline-block mb-2 text-center">
              Development
            </span>
            <h3 className="text-[20px] font-semibold leading-snug">
              The Future of AI in Software Engineering: Trends to Watch
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Dive into the transformative impact of artificial intelligence on
              software engineering. Explore emerging trends, tools, and the
              skills developers will need to thrive.
            </p>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/public/images/Johnson.png"
                  alt="Author"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[12px] font-medium">Dr. Anya Sharma</span>
              </div>
              <span className="text-[12px] text-gray-500">July 08, 2024</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
          <img
            src="/public/images/Article-6.png"
            alt="Article"
            className="w-full h-40 object-cover hover:scale-110 transition-all transform-800 cursor-pointer"
          />
          <div className="p-4">
            <span className="bg-gray-200 text-[12px] w-[82px] h-[22px] px-[11px] py-[1px] rounded-md inline-block mb-2 text-center">
              Design
            </span>
            <h3 className="text-[20px] font-semibold leading-snug">
              Creating Accessible Designs: Best Practices for Inclusivity
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Learn how to build designs that are inclusive and accessible to
              all users. This article covers practical tips for color contrast,
              typography, and interactive elements.
            </p>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/public/images/Johnson.png"
                  alt="Author"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[12px] font-medium">Jordan Kim</span>
              </div>
              <span className="text-[12px] text-gray-500">July 05, 2024</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white ">
          <img
            src="/public/images/Article-7.png"
            alt="Article"
            className="w-full h-40 object-cover hover:scale-110 transition-all transform-800 cursor-pointer"
          />
          <div className="p-4">
            <span className="bg-gray-200 text-[12px] w-[82px] h-[22px] px-[11px] py-[1px] rounded-md inline-block mb-2 text-center">
              Marketing
            </span>
            <h3 className="text-[20px] font-semibold leading-snug">
              Another Blog Title Here
            </h3>
            <p className="text-[14px] text-gray-600 mt-2">
              Description text for the article goes here.
            </p>
            <hr className="my-3 border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/public/images/Johnson.png"
                  alt="Author"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[12px] font-medium">David Lee</span>
              </div>
              <span className="text-[12px] text-gray-500">July 16, 2024</span>
            </div>
          </div>
        </div>

        {/* ...repeat until 7 cards total */}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <button className="text-[14px] w-[192px] h-[40px] px-8 py-2 border border-gray-400 rounded-md hover:bg-gray-100 cursor-pointer hover:text-blue-500">
          Load More Articles
        </button>
      </div>
    </div>
  );
};

export default Blog;
