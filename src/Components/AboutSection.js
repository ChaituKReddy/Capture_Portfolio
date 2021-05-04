import home1 from '../img/home1.png';
import Wave from './Wave';

import {About, Description, Image, Hide} from '../style';
import {motion} from 'framer-motion';
import {TitleAnim, fade, photoAnim} from '../animation';

const AboutSection = () => {

    return(
        <About>
            <Description>
                <div className="title" >
                    <Hide>
                        <motion.h2 variants={TitleAnim} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={TitleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={TitleAnim}>true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src= {home1} alt= "Camera guy"/>
            </Image>
            <Wave />
        </About>
    );
}

export default AboutSection;