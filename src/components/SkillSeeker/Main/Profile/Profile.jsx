import { RiVerifiedBadgeLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Progress } from "@/components/ui/progress";
import PortfolioSection from "./PortfolioSection";
import RatingandReviews from "./RatingsandReviews";
import Badges from "./Badges";


const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-4 justify-between">
        <div className="border w-[80%] border-gray-300 rounded-lg p-5">
          <div className="flex items-center gap-3">
            <img
              src="/images/cuser2.jpg"
              alt=""
              className="h-15 w-15 rounded-full object-cover"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <h2 className="font-bold text-[25px]">Alex Johnson</h2>
                <p className="text-[17px] text-gray-600">
                  Senior Product Designer | UI/UX Specialist
                </p>
                <div className="flex gap-2 items-center">
                  <RiVerifiedBadgeLine />
                  <p className="text-[15px] text-black">Verified</p>
                </div>
              </div>
              <div className="border border-gray-400 rounded-lg p-2">
                <FiEdit />
              </div>
            </div>
          </div>

          <p className="text-[17px] text-gray-600 mt-5">
            Passionate about creating user-centered designs that drive
            engagement and solve complex problems. With 8 years of experience in
            product design, I specialize in intuitive interfaces, design
            systems, and rapid prototyping. Always eager to learn and
            collaborate!
          </p>

          <div className="mt-7 ">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-700 text-[15px]">Profile Completion</p>
              <p className="text-gray-600 text-[15px]">75%</p>
            </div>
            <Progress value={75} />
          </div>
        </div>

        <div className="border border-gray-300 p-5 rounded-lg">
          <h2 className="text-[20px] font-bold">Contact & Availability</h2>
          <div className="mt-3 flex flex-col gap-2">
            <p className="text-[16px] text-gray-600">
              <span className="text-[17px] font-semibold text-black">
                Email:{" "}
              </span>
              alex.johnson@example.com{" "}
            </p>
            <p className="text-[16px] text-gray-600">
              <span className="text-[17px] font-semibold text-black">
                Phone:{" "}
              </span>
              +91 9876543210
            </p>
            <p className="text-[16px] text-gray-600">
              <span className="text-[17px] font-semibold text-black">
                LinkedIn:{" "}
              </span>
              linkedin.com/in/alexjohnson
            </p>
            <p className="text-[16px] text-gray-600">
              <span className="text-[17px] font-semibold text-black">
                Availability:{" "}
              </span>
              Open for new projects
            </p>
          </div>
        </div>
      </div>

      {/* skills section */}
      <div className="mt-10 border border-gray-300 rounded-lg p-5 w-[75%]">
  <h3 className="text-[25px] font-bold">Skills</h3>
  <div className="grid grid-cols-3 gap-4 mt-5">
    {[
      { skill: "UI/UX Design", level: "Expert" },
      { skill: "Figma", level: "Advanced" },
      { skill: "Design Systems", level: "Expert" },
      { skill: "User Research", level: "Advanced" },
      { skill: "Wireframing", level: "Expert" },
      { skill: "Prototyping", level: "Advanced" },
      { skill: "Front-end Development", level: "Intermediate" },
      { skill: "Product Strategy", level: "Advanced" },
    ].map((item, i) => (
      <div
        key={i}
        className="flex justify-between items-center py-2 px-4 bg-indigo-100 rounded-full text-[16px] font-medium"
      >
        <span>{item.skill}</span>
        <span className="text-sm text-gray-600">({item.level})</span>
      </div>
    ))}
  </div>
</div>

<PortfolioSection/>
<RatingandReviews/>
<Badges/>

    </div>
  );
};

export default Profile;
