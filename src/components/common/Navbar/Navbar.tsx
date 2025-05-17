import { Link, useLocation } from 'react-router'; // Using react-router as per package.json

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => {
  const location = useLocation();
  const isCurrentPage = location.pathname === to;
  return (
    <div className="pt-1 pr-3 pb-1 pl-3 flex flex-row gap-0 items-center justify-center shrink-0 relative">
      <Link
        to={to}
        className={`text-default-black text-left text-lg relative ${
          isCurrentPage
            ? "font-[\'Inter-Bold\',_sans-serif] font-bold underline"
            : "font-[\'Inter-Medium\',_sans-serif] font-medium"
        }`}
      >
        {label}
      </Link>
    </div>
  );
};

interface ButtonProps {
  text: string;
  to: string;
  primary?: boolean;
}

const Button = ({ text, to, primary }: ButtonProps) => (
  <Link
    to={to}
    className={`rounded-xl pt-[13px] pr-7 pb-[13px] pl-7 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[120px] h-10 relative overflow-hidden transition-colors duration-150 ease-in-out ${
      primary
        ? "bg-[#8f2279] text-[#ffffff] hover:bg-[#7f1f6c]"
        : "bg-[#ffffff] text-[#8f2279] border border-[#8f2279] hover:bg-gray-100"
    }`}
  >
    <div className="text-left font-[\'Inter-SemiBold\',_sans-serif] text-base font-semibold relative">
      {text}
    </div>
  </Link>
);

export const Navbar = () => {
  return (
    <div className="pt-7 px-[72px] pb-7 flex flex-row items-center justify-between shrink-0 w-full max-w-[1440px] mx-auto relative">
      <div className="flex flex-row gap-3 items-center justify-start shrink-0 relative">
        <img
          className="shrink-0 w-12 h-12 relative overflow-visible"
          src="/car-3-10.svg"
          alt="OpLEL Logo"
        />
        <div className="text-default-black text-left font-[\'Inter-Bold\',_sans-serif] text-xl font-bold relative">
          OpLEL
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
        <NavLink to="/" label="Home" />
        <NavLink to="/vehicles" label="Vehicles" />
        <NavLink to="/about" label="About Us" />
        <NavLink to="/contact" label="Contact Us" />
      </div>
      <div className="flex flex-row gap-3 items-center justify-start shrink-0 relative">
        <Button to="/register" text="Register" />
        <Button to="/login" text="Login" primary />
      </div>
    </div>
  );
};
