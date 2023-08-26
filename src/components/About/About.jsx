import { stackList } from "../../data/ProjectData";
import { useEffect } from "react";
import {
    Image,
    Technologies,
    Tech,
    TechImg,
    TechName,
    ContactWrapper,
} from "./AboutElements";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init({duration:1000})
    }, []);
    return (
        <ContactWrapper id="about">
            <div className="Container">
                <div className="SectionTitle">About Me</div>
                <div className="BigCard">
                    <div data-aos ="fade-left">
                        <Image
                            src="/man-svgrepo-com.svg"
                            alt="man-svgrepo"
                        />
                    </div>
                    <div className="AboutBio">
                        <div data-aos ="fade-left">
                            Hello! My name is <strong>Pedro Muniz</strong>. I'm originally from Brazil and have been living in Canada for the past three years. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability.
                        </div>

                        <br /><br />

                        <div data-aos ="fade-left">
                            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
                            Throughout my studies at BCIT, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the RENR Safety App and MyMind, projects that garnered recognition from my colleagues, instructors, and clients alike.
                        </div>

                        <br /><br />

                        <div data-aos ="fade-left">
                            Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
                            <div className="tagline2">
                                I have become confident using the following technologies:
                            </div>
                        </div>


                        <Technologies>
                            {stackList.map((stack, index) => (
                                <div data-aos ="fade-left" key={index}>
                                    <Tech key={index} className="tech">
                                        <TechImg src={stack.img} alt={stack.name} />
                                        <TechName>{stack.name}</TechName>
                                    </Tech>
                                </div>
                            ))}
                        </Technologies>
                    </div>

                </div>
            </div>
        </ContactWrapper>
    )
}
export default About;