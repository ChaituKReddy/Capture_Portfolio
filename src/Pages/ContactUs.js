import {motion} from 'framer-motion';
import {pageAnimation, TitleAnim} from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
    return(
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background: "#fff"}}>
            <Title>
                <Hide>
                    <motion.h2 variants = {TitleAnim} >Get in touch. </motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                <Social variants={TitleAnim}>
                <Circle />
                    <h2>Send us a message.</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={TitleAnim}>
                <Circle />
                    <h2>Social Media.</h2>
                </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media(max-width: 1150px) {
        padding: 2rem;
        font-size: 1rem;
    }
`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
`

const Hide = styled.div`
    overflow: hidden;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }

`
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`

export default ContactUs;