import "./styles.css";
import "./tailwind.css";
import { Homepage } from "./components/MainPage/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router";
import { Vehicles } from "./components/VehiclesPage/Vehicles/Vehicles";
import { CarDetails } from "./components/CarDetailsPage/CarDetails/CarDetails";
import { ContactUs } from "./components/ContactUs/ContactUs";
import AboutUsPage from "./components/AboutUs";

// Placeholder components for other pages
const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/car-details" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
