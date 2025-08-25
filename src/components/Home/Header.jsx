import CustomButton from '../../components/CustomButton'; // Adjusted path based on potential structure

const Header = () => {
  return (
    <div className="min-h-screen bg-gray-100 bg-opacity-50 flex flex-col items-center justify-start relative" style={{ backgroundImage: 'url(/images/Selection.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header className="text-center z-10 py-24 w-full" style={{ paddingTop: '15rem' }}>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Unlock Your Potential.</h1>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Connect. Collaborate. Grow.</h1>
        <h2 className="text-lg font-bold mb-8 max-w-2xl mx-auto">The ultimate skill exchange platform for Recruiters, Freelancers, and Skill Seekers.</h2>
        <div className="space-x-4">
          <CustomButton to="/signup/recruiter" variant="special">Sign Up as a Recruiter</CustomButton>
          <CustomButton to="/signup/freelancer">Sign Up as a Freelancer/Skill Seeker</CustomButton>
        </div>
      </header>
    </div>
  );
};

export default Header;