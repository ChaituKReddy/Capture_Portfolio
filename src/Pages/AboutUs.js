import AboutSection from '../Components/AboutSection';
import FAQSection from '../Components/FAQSection';
import ServicesSection from '../Components/ServicesSection';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

import ScrollTop from '../Components/ScrollTop';

const AboutUs = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FAQSection />
            <ScrollTop />
        </motion.div>
    );
}

export default AboutUs;