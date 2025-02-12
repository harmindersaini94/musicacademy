import Image from "next/image";
import HeroSection from "./components/HeroSection";
import MusicSchoolTestimonials from "./components/TestimonialCards";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import UpcomingWebinars from "./components/UpcomingWebinars";
import MeetInstructors from "./components/MeetInstructors";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <h1 className="text-2xl text-center">Main Page</h1>
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <MusicSchoolTestimonials />
    <UpcomingWebinars />
    <MeetInstructors />
    <Footer />
    </>
  );
}
