import AboutUsSecondSection from "../components/aboutus_second-section/AboutUsSecondSection";
import BreadcrumbComponent from "../components/breadcrumb-section/BreadCrumbSection";
import MembersSecondSection from "../components/members_second-section/MembersSecondSection";
import CallSection from "../components/call-section/CallSection";



const AboutUsPage = () => {
    return(
        <>
            <BreadcrumbComponent/>
            <AboutUsSecondSection/>
            <MembersSecondSection/>
            <CallSection/>
        </>
    )
}

export default AboutUsPage;