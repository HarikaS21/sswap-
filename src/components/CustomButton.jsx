import { Link } from 'react-router-dom';

const CustomButton = ({ to, children }) => {
  return (
    <Link to={to} className="bg-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-400 text-lg font-medium transition duration-300 ease-in-out">
      {children}
    </Link>
  );
};

export default CustomButton;