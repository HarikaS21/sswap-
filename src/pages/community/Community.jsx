import { useState } from "react";
import {
  ChevronDown,
  Pencil,
  Check,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

export default function CommunityFeed() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-8">
      {/* Left Section (Feed + Search) */}
      <div className="flex-1 lg:w-2/3">
        {/* Top Header */}
        <div className="mb-4 max-w-[96%]">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Community Feed</h2>
            <div className="flex items-center gap-4 text-gray-700">
              {/* Latest Button */}
              <button
                className="flex items-center justify-center rounded-lg bg-white hover:text-blue-600 transition cursor-pointer"
                style={{
                  width: "93px",
                  height: "40px",
                  fontSize: "14px",
                  gap: "4px",
                }}
              >
                <span>Latest</span>
                <ChevronDown size={14} />
              </button>

              {/* New Post Button */}
              <button
                className="flex items-center justify-center rounded-lg bg-white hover:text-blue-600 transition cursor-pointer"
                style={{
                  width: "120px",
                  height: "40px",
                  fontSize: "14px",
                  gap: "8px",
                }}
              >
                <Pencil size={14} />
                <span>New Post</span>
              </button>
            </div>
          </div>

          {/* ✅ Light Gray Line same width as search bar */}
          <hr className="border-t border-gray-200 mt-3" />
        </div>

        {/* Search Box */}
        <div className="border border-gray-300 rounded-xl p-3 bg-white shadow-sm max-w-[96%]">
          <div className="flex items-center gap-3">
            {/* Profile Image */}
            <img
              src="/public/images/pages.profile"
              alt="You"
              className="w-10 h-10 rounded-full object-cover"
            />

            {/* Search Input */}
            <input
              type="text"
              placeholder="Share your thoughts or ask a question..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none placeholder-gray-500"
            />

            {/* Plus Button */}
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <span className="text-xl font-bold">+</span>
            </button>
          </div>
        </div>

        {/* ------------------- FEED POST 1 ------------------- */}
        <div className="border border-gray-200 rounded-xl bg-white shadow-sm p-4 max-w-[96%] mt-6">
          {/* Header */}
          <div className="flex items-start gap-3">
            {/* Profile Image */}
            <img
              src="/public/images/EmilyUIUX.png"
              alt="Emily White"
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex flex-col">
              {/* Name + Role */}
              <div className="flex items-center gap-2">
                <h4 className="text-[16px] font-semibold">Emily White</h4>
                <span className="px-2 py-0.5 bg-gray-100 rounded-[30%] text-xs text-gray-600">
                  UI/UX Designer
                </span>
              </div>

              {/* Time */}
              <p className="text-[14px] text-gray-500">2 hours ago</p>
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-[20px] font-bold">
            Excited to share my latest UX Case Study on Skill Onboarding!
          </h3>

          {/* Post Image */}
          <div className="mt-3">
            <img
              src="/public/images/pages.onbording.png"
              alt="Post"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Description */}
          <p className="mt-3 text-[16px] text-gray-600">
            Just wrapped up an intensive project on optimizing user onboarding
            flows for skill-based platforms. I focused on reducing friction and
            increasing engagement through micro-interactions and clear progre...
          </p>
          <button
            className="text-blue-600 hover:underline cursor-pointer flex items-center justify-center"
            style={{
              fontSize: "14px",
              width: "63px",
              height: "40px",
              padding: "0px",
            }}
          >
            See more
          </button>

          {/* Divider */}
          <hr className="my-4 border-gray-200 mt-10" />

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Likes */}
            <button
              className="flex items-center gap-1 text-gray-700 rounded-lg hover:text-blue-600 transition cursor-pointer"
              style={{
                fontSize: "14px",
                width: "117px",
                height: "40px",
                padding: "0px 16px",
              }}
            >
              <Heart size={15} />
              <span>128 Likes</span>
            </button>

            {/* Comments */}
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 rounded-lg transition cursor-pointer"
              style={{
                fontSize: "14px",
                width: "148px",
                height: "40px",
                padding: "0px 16px",
              }}
            >
              <MessageCircle size={15} />
              <span>32 Comments</span>
            </button>

            {/* Share */}
            <button
              className="flex items-center gap-1 text-gray-700 ml-auto rounded-lg hover:text-blue-600 transition cursor-pointer"
              style={{
                fontSize: "16px",
                width: "65px",
                height: "40px",
                padding: "0px",
              }}
            >
              <Share2 size={14} />
              <span>Share</span>
            </button>
          </div>

          {/* Divider */}
          <hr className="my-4 border-gray-200 mt-5" />

          {/* ✅ Comments Section */}
          <div className="space-y-3">
            {/* Comment 1 */}
            <div className="flex items-start gap-2">
              <img
                src="/public/images/Page2-img1.png"
                alt="Michael"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-[14px] text-gray-700">
                <span className="font-semibold">Michael B.: </span>
                This looks fantastic, Emily! Especially love the progress
                indicator design.
              </p>
            </div>

            {/* Comment 2 */}
            <div className="flex items-start gap-2">
              <img
                src="/public/images/page2-img2.png"
                alt="Sophia"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-[14px] text-gray-700">
                <span className="font-semibold">Sophia R.: </span>
                Great insights! Onboarding is always tricky, thanks for sharing
                this.
              </p>
            </div>
          </div>

          {/* View all comments */}
          <button
            className="text-blue-600 hover:underline cursor-pointer mt-3"
            style={{
              fontSize: "14px",
              width: "147px",
              height: "40px",
            }}
          >
            View all 32 comments
          </button>
        </div>
        {/* ------------------- END FEED POST 1 ------------------- */}

        {/* ------------------- FEED POST 2 (David Chen) ------------------- */}
        <div className="border border-gray-200 rounded-xl bg-white shadow-sm p-4 max-w-[96%] mt-6">
          {/* Header */}
          <div className="flex items-start gap-3">
            <img
              src="/public/images/Charlie.png"
              alt="David Chen"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h4 className="text-[16px] font-semibold">David Chen</h4>
                <span
                  className="rounded-md text-[12px] text-gray-600"
                  style={{
                    width: "134px",
                    height: "22px",
                    padding: "1px 9px",
                    backgroundColor: "#f3f4f6",
                  }}
                >
                  Frontend Developer
                </span>
              </div>
              <p className="text-[14px] text-gray-500">5 hours ago</p>
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-[20px] font-bold">
            Seeking advice: Best practices for React performance optimization?
          </h3>

          {/* Description */}
          <p className="mt-3 text-[16px] text-gray-600">
            I'm working on a large-scale React application and encountering some
            performance bottlenecks, particularly with re-renders. What are your
            go-to strategies for optimizing React component performance? A...
          </p>

          {/* See More */}
          <button
            className="text-blue-600 hover:underline cursor-pointer flex items-center justify-center mt-2"
            style={{
              fontSize: "14px",
              width: "63px",
              height: "40px",
              padding: "0px",
            }}
          >
            See more
          </button>

          {/* Divider */}
          <hr className="my-4 border-gray-200" />

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Likes */}
            <button
              className="flex items-center gap-1 text-gray-700 rounded-lg hover:text-blue-600 transition cursor-pointer"
              style={{
                fontSize: "14px",
                width: "109px",
                height: "40px",
                padding: "0px 16px",
              }}
            >
              <Heart size={15} />
              <span>98 Likes</span>
            </button>

            {/* Comments */}
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 rounded-lg transition cursor-pointer"
              style={{
                fontSize: "14px",
                width: "148px",
                height: "40px",
                padding: "0px 16px",
              }}
            >
              <MessageCircle size={15} />
              <span>45 Comments</span>
            </button>

            {/* Share */}
            <button
              className="flex items-center gap-1 text-gray-700 ml-auto rounded-lg hover:text-blue-600 transition cursor-pointer"
              style={{
                fontSize: "14px",
                width: "91px",
                height: "40px",
                padding: "0px",
              }}
            >
              <Share2 size={14} />
              <span>Share</span>
            </button>
          </div>

          {/* Divider */}
          <hr className="my-4 border-gray-200" />

          {/* ✅ Comments Section */}
          <div className="space-y-3">
            {/* Comment 1 */}
            <div className="flex items-start gap-2">
              <img
                src="/public/images/Page2-img1.png"
                alt="Michael"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-[14px] text-gray-700">
                <span className="font-semibold">Liam T.: </span>
                Memoization (React.memo, useCallback, useMemo) is your best
                friend here
              </p>
            </div>

            {/* Comment 2 */}
            <div className="flex items-start gap-2">
              <img
                src="/public/images/page2-img2.png"
                alt="Sophia"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-[14px] text-gray-700">
                <span className="font-semibold">Chloe L.: </span>
                Definitely look into React Dev Tools profiler. It's incredibly
                helpful
              </p>
            </div>
          </div>

          {/* View all comments */}
          <button
            className="text-blue-600 hover:underline cursor-pointer mt-3"
            style={{
              fontSize: "14px",
              width: "147px",
              height: "40px",
            }}
          >
            View all 32 comments
          </button>
        </div>
        {/* ------------------- END FEED POST 2 ------------------- */}

        {/* ------------------- START FEED POST 3 ------------------- */}
        <div className="border border-gray-200 rounded-xl bg-white shadow-sm p-4 max-w-[96%] mt-6">
          {/* Header */}
          <div className="flex items-start gap-3">
            <img
              src="/public/images/Daina.png"
              alt="David Chen"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h4 className="text-[16px] font-semibold">Sarah Miller</h4>
                <span
                  className="rounded-md text-[12px] text-gray-600"
                  style={{
                    width: "134px",
                    height: "22px",
                    padding: "1px 9px",
                    backgroundColor: "#f3f4f6",
                  }}
                >
                  Digital Marketer
                </span>
              </div>
              <p className="text-[14px] text-gray-500">1 day ago</p>
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-[20px] font-bold">
            New to content strategy – any resources for beginners?
          </h3>

          {/* Description */}
          <p className="mt-3 text-[16px] text-gray-600">
            Just started a new role focusing on digital content strategy, and
            I'm feeling a bit overwhelmed! If anyone has recommendations for
            books, courses, or online communities that are great for beginners
            in...
          </p>

          {/* See More */}
          <button
            className="text-blue-600 hover:underline cursor-pointer flex items-center justify-center mt-2"
            style={{
              fontSize: "14px",
              width: "63px",
              height: "40px",
              padding: "0px",
            }}
          >
            See more
          </button>

          {/* Divider */}
          <hr className="my-4 border-gray-200" />

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Likes */}
            <button
              className="flex items-center gap-1 text-gray-700 rounded-lg hover:text-blue-600 transition cursor-pointer"
              style={{
                fontSize: "14px",
                width: "109px",
                height: "40px",
                padding: "0px 16px",
              }}
            >
              <Heart size={15} />
              <span>75 Likes</span>
            </button>

            {/* Comments */}
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 rounded-lg transition cursor-pointer"
              style={{
                fontSize: "14px",
                width: "148px",
                height: "40px",
                padding: "0px 16px",
              }}
            >
              <MessageCircle size={15} />
              <span>20 Comments</span>
            </button>

            {/* Share */}
            <button
              className="flex items-center gap-1 text-gray-700 ml-auto rounded-lg hover:text-blue-600 transition cursor-pointer"
              style={{
                fontSize: "14px",
                width: "91px",
                height: "40px",
                padding: "0px",
              }}
            >
              <Share2 size={14} />
              <span>Share</span>
            </button>
          </div>

          {/* Divider */}
          <hr className="my-4 border-gray-200" />

          {/* ✅ Comments Section */}
          <div className="space-y-3">
            {/* Comment 1 */}
            <div className="flex items-start gap-2">
              <img
                src="/public/images/Page2-img1.png"
                alt="Michael"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-[14px] text-gray-700">
                <span className="font-semibold">Alex K.: </span>
                The Content Marketing Institute website is a goldmine!
              </p>
            </div>

            {/* Comment 2 */}
            <div className="flex items-start gap-2">
              <img
                src="/public/images/page2-img2.png"
                alt="Sophia"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="text-[14px] text-gray-700">
                <span className="font-semibold">Jessica W.: </span>
                Check out Ann Handley's 'Everybody Writes'.
              </p>
            </div>
          </div>

          {/* View all comments */}
          <button
            className="text-blue-600 hover:underline cursor-pointer mt-3"
            style={{
              fontSize: "14px",
              width: "147px",
              height: "40px",
            }}
          >
            View all 20 comments
          </button>
        </div>
        {/* ------------------- END FEED POST 3 ------------------- */}
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-[360px] xl:w-[380px] space-y-6">
        {/* Get Started Card */}
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Get Started</h3>

          {/* Completed Item */}
          <div className="flex items-center gap-2 mb-2 text-green-600">
            <Check size={18} />
            <span className="text-gray-700 line-through">
              Complete your profile
            </span>
          </div>

          {/* Radio Options */}
          <div className="space-y-2 text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="steps"
                value="skill"
                checked={selected === "skill"}
                onChange={() => setSelected("skill")}
              />
              Join 3 skill groups
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="steps"
                value="post"
                checked={selected === "post"}
                onChange={() => setSelected("post")}
              />
              Make your first post
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="steps"
                value="connect"
                checked={selected === "connect"}
                onChange={() => setSelected("connect")}
              />
              Connect with 5 members
            </label>
          </div>
        </div>

        {/* Trending Posts */}
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Trending Posts</h3>

          {/* Post 1 */}
          <div className="mb-4">
            <div className="flex items-start gap-2">
              <img
                src="/public/images/Trending-1.png"
                alt="Jordan Lee"
                className="w-5 h-5 rounded-full object-cover mt-1"
              />
              <div className="max-w-[240px]">
                <h5 className="text-[16px] font-medium leading-snug">
                  Upcoming Workshop: Mastering Freelance Proposals
                </h5>
                <p className="text-sm text-gray-500">Jordan Lee</p>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="mb-4">
            <div className="flex items-start gap-2">
              <img
                src="/public/images/Trending-2.png"
                alt="Olivia Green"
                className="w-5 h-5 rounded-full object-cover mt-1"
              />
              <div className="max-w-[240px]">
                <h5 className="text-[16px] font-medium leading-snug">
                  Share your favorite productivity hacks for remote work!
                </h5>
                <p className="text-sm text-gray-500">Olivia Green</p>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div>
            <div className="flex items-start gap-2">
              <img
                src="/public/images/Trending-3.png"
                alt="Chris Evans"
                className="w-5 h-5 rounded-full object-cover mt-1"
              />
              <div className="max-w-[240px]">
                <h5 className="text-[16px] font-medium leading-snug">
                  Looking for a mentor in Data Science – any connections?
                </h5>
                <p className="text-sm text-gray-500">Chris Evans</p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Skill-Based Groups */}
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Skill-Based Groups</h3>

          <div className="space-y-3">
            {/* Group Row */}
            <div className="flex justify-between items-center px-2 lg:px-4">
              <h5 className="text-[16px] font-medium">UI/UX Design Forum</h5>
              <p className="text-sm text-gray-500">1250 members</p>
            </div>
            <div className="flex justify-between items-center px-2 lg:px-4">
              <h5 className="text-[16px] font-medium">Frontend Dev Circle</h5>
              <p className="text-sm text-gray-500">980 members</p>
            </div>
            <div className="flex justify-between items-center px-2 lg:px-4">
              <h5 className="text-[16px] font-medium">Digital Marketing Pro</h5>
              <p className="text-sm text-gray-500">720 members</p>
            </div>
            <div className="flex justify-between items-center px-2 lg:px-4">
              <h5 className="text-[16px] font-medium">Mobile App Innovators</h5>
              <p className="text-sm text-gray-500">550 members</p>
            </div>
          </div>

          {/* Button */}
          <button
            className="mt-4 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition w-full sm:w-[283px]"
            style={{
              fontSize: "14px",
              height: "40px",
              padding: "0 16px",
            }}
          >
            View All Groups
          </button>
        </div>
      </div>
    </div>
  );
}
