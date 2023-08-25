import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
function Home(){
    return(
        <div>
            <Hero />
            <Projects />
            <About /> 
            <Contact />
            <FixSocialIcon />
            <Footer />
            <ScrollToTop />
        </div>
    )
}
export default Home;