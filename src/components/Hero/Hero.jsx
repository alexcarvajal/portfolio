import { useState } from "react";
import Dropdown from "../DropDown/DropDown";
import Header from "../Header/Header";
import {
    HeroContainer,
    HeroWrapper,
    HeroLeft,
  /*   HeroRight,
    Image, */
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import  ScrollAnimation  from "react-animate-on-scroll";
function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
 /*    const [showScrollDown, setShowScrollDown] = useState(false); */

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <main>
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <HeroContainer>
                <HeroWrapper>
                    <HeroLeft>
                        <ScrollAnimation animateIn="fadeIn">
                            <TypeAnimation
                                cursor={false}
                                sequence={['Hey!, I\'m Alex.', () => setShowSubtitle(true)]}
                                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                                wrapper="h1"
                                repeat={0}
                            />
                            <br />
                            {showSubtitle &&
                                <TypeAnimation
                                    cursor={true}
                                    sequence={[
                                        500,
                                        'A Frontend Developer.',
                                        1000,
                                        'An Electronic and Engineering Student.',
                                        // 'I design and code beautifully simple things, and I love what I do.',
                                        1000,
                                        'An innovative thinker.',
                                        1000,
                                        'A problem solver.',
                                        1000,
                                        'A team worker',
                                        1000,

                                    ]}
                                    speed={50}
                                    deletionSpeed={65}
                                    wrapper="h5"
                                    repeat={Infinity}
                                />
                            }
                        </ScrollAnimation>
                    </HeroLeft>
                    {/* <HeroRight>
                        <ScrollAnimation animateIn="fadeIn">
                           <Image
                                src="/man-svgrepo-com.svg"
                            /> 
                        </ScrollAnimation>
                    </HeroRight> */}
                </HeroWrapper>
              {/*   {showScrollDown && <ScrollAnimation animateIn="flipInX" offset={0}>
                    <ScrollDown to="projects" id="scrollDown">
                       <ScrollLink>
                            Scroll down
                            <img
                              src="/scroll-down.svg"
                            />
                        </ScrollLink>
                    </ScrollDown>
                </ScrollAnimation>} */}
            </HeroContainer>
        </main>
    )
}
export default Hero;