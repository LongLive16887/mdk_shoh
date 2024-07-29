import AboutUsSecondSection from "../components/aboutus_second-section/AboutUsSecondSection";
import BreadcrumbComponent from "../components/breadcrumb-section/BreadCrumbSection";
import MembersSecondSection from "../components/members_second-section/MembersSecondSection";



const AboutUsPage = () => {
    return(
        <>
            <BreadcrumbComponent/>
            <AboutUsSecondSection/>
            <MembersSecondSection/>
        </>
    )
}

export default AboutUsPage;