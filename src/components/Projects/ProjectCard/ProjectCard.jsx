import { useEffect } from "react";
import { ProjectList } from "../../../data/ProjectData"
import {
    Card,
    CardLeft,
    CardRight,
    TechCardContainer,
    TechCard,
    BtnGroup,
} from "./ProjectCardElements"
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollAnimation from "react-animate-on-scroll";
function ProjectCard() {
    useEffect(() => {
        Aos.init({duration:1000})
    }, []);
    return (
        <>
            {ProjectList.map((list, index) => (
                <div data-aos="fade-left"  key={index}>
                    <Card>
                        <CardLeft>
                            <img src={list.img} alt={list.name} />
                        </CardLeft>
                        <CardRight>
                            <h4>{list.title}</h4>
                            <p>{list.description}</p>
                            <TechCardContainer>
                                {list.tech_stack.map((tech, index) => (
                                    <TechCard key={index}>{tech}</TechCard>
                                ))}
                            </TechCardContainer>
                            <BtnGroup>
                                {list.github_url.length > 0 &&
                                    <a
                                        className="btn SecondaryBtn btn-shadow"
                                        href={list.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Github
                                    </a>
                                }
                                {list.demo_url.length > 0 &&
                                    <a
                                        className="btn PrimaryBtn btn-shadow"
                                        href={list.demo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Demo ➜
                                    </a>
                                }
                            </BtnGroup>
                        </CardRight>
                    </Card>
                </div>
            ))}
        </>
    )
}
export default ProjectCard;