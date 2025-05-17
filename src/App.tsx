import "./styles.css";
import "./tailwind.css";
import { Homepage } from "./components/MainPage/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router";
import { Vehicles } from "./components/VehiclesPage/Vehicles/Vehicles";

// Placeholder components for other pages
const AboutUsPage = () => <div>About Us Page</div>;
const ContactUsPage = () => <div>Contact Us Page</div>;
const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
