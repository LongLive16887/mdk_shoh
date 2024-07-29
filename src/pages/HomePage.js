import AboutUsSection from "../components/aboutus-section/AboutUsSection";
import BlogSection from "../components/blog-section/BlogSection";
import CallSection from "../components/call-section/CallSection";
import CounterSection from "../components/counter-section/CounterSection";
import HeroSection from "../components/hero-section/HeroSection";
import Members from "../components/members-section/Members";
import PortfolioSection from "../components/portfolio-section/PortfolioSection";
import ServicesSection from "../components/services-section/ServicesSection";
import TestimonialSection from "../components/testimonial-section/TestimonialSection";

const HomePage = () => {
    return(
        <>
            {/* <Home/> */}
            <HeroSection/>
            <AboutUsSection/>
            <ServicesSection/>
            <PortfolioSection/>
            <CounterSection/>
            <TestimonialSection/>
            <CallSection/>
            <Members/>
            <BlogSection/>
        </>
    )
}

export default HomePage;