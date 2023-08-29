import { useState } from "react";
import Dropdown from "../DropDown/DropDown";
import Header from "../Header/Header";
import {
    HeroContainer,
    HeroWrapper,
    HeroLeft,
    HeroRight,
    Image,
} from "./HeroElements";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    /*    const [showScrollDown, setShowScrollDown] = useState(false); */
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
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
                        <div data-aos="fade-up">
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
                                        'A Frontend Developer...',
                                        1000,
                                        'An Electronic and Engineering Student...',
                                        // 'I design and code beautifully simple things, and I love what I do.',
                                        1000,
                                        'An innovative thinker...',
                                        1000,
                                        'A problem solver...',
                                        1000,
                                        'A team worker...',
                                        1000,

                                    ]}
                                    speed={50}
                                    deletionSpeed={65}
                                    wrapper="h5"
                                    repeat={Infinity}
                                />
                            }
                        </div>
                    </HeroLeft>
                    <HeroRight>
                        <div data-aos="fade-up">
                            <Image
                                src="/avatar.svg"
                            />
                        </div>
                    </HeroRight>
                </HeroWrapper>
        
            </HeroContainer>
        </main>
    )
}
export default Hero;