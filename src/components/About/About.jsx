import { stackList } from "../../data/ProjectData";
import { useEffect } from "react";
import {
    /* Image */
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
        AOS.init({ duration: 1000 })
    }, []);
    return (
        <ContactWrapper id="about">
            <div className="Container">
                <div className="SectionTitle">About Me</div>
                <div className="BigCard">
                    <div data-aos="fade-left">
                        {/*  <Image
                            src="/man-svgrepo-com.svg"
                            alt="man-svgrepo"
                        /> */}
                    </div>
                    <div className="AboutBio">
                        <div data-aos="fade-left">
                            I'm Alex, a 25 year old web and mobile app developer from Colombia. I'm currently in my last semester of Electronic and Telecommunication Engineering, a degree that has allowed me to acquire solid knowledge to perform in the technological field.
                        </div>
                        <br />
                        <div data-aos="fade-left">
                            I have experience in front-end development, creating responsive web applications in HTML, CSS and JavaScript under the mobile first concept. Additionally, I have knowledge in the React framework and in developing native mobile apps with React Native. I have also dabbled in Flutter for multiplatform apps.
                        </div>
                        <br />
                        <div data-aos="fade-left">
                            I consider myself a proactive developer, focused on teamwork and providing efficient solutions to technical problems. I'm good at communicating and relating to others, which allows me to contribute to the coordination of agile projects with methodologies such as Scrum.
                        </div>
                        <br />
                        <div data-aos="fade-left">
                            I'm constantly looking for new challenges that allow me to continue growing as a professional. I'm motivated to expand my technological knowledge and be at the forefront, in order to easily adapt to different contexts and needs.                        </div>
                        <div className="tagline2">
                            I have become confident using the following technologies:
                        </div>


                        <Technologies>
                            {stackList.map((stack, index) => (
                                <div data-aos="fade-left" key={index}>
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