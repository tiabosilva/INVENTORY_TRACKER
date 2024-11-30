import { useNavigate } from 'react-router-dom';

const Button = ({ styles }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate('/auth')}
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;