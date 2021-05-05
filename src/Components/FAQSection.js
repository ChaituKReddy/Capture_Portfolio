import styled from 'styled-components';
import {About} from '../style';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import useScroll from './UseScroll';
import {scrollReveal} from '../animation';


const FAQSection = () => {
    const [element, controls] = useScroll();
    return(
        <Faq variants={scrollReveal} initial="hidden" animate={controls} ref={element} >
            <h3>Any Questions? <span>FAQ</span> </h3>
            <AnimateSharedLayout>
                <div className="question">
                    <Toggle title = "How do I start?">
                        {/* <h4>How do I start? </h4> */}
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae?</p>
                        </div>
                        {/* <div className="faq-line"></div> */}
                    </Toggle>
                </div>
                <div className="question">
                    <Toggle title = "Daily Schedule.">
                        {/* <h4> Daily Schedule. </h4> */}
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae?</p>
                        </div>
                        {/* <div className="faq-line"></div> */}
                    </Toggle>
                </div>
                <div className="question">
                    <Toggle title = "Different Payment methods. ">
                        {/* <h4>Different Payment methods. </h4> */}
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae?</p>
                        </div>
                        {/* <div className="faq-line"></div> */}
                    </Toggle>
                </div>
                <div className="question">
                    <Toggle title="What products do you offer? ">
                        {/* <h4>What products do you offer? </h4> */}
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae?</p>
                        </div>
                        {/* <div className="faq-line"></div> */}
                    </Toggle>
                </div>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }

    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #23d997;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }

    h3 {
        font-size: 3rem;
        /* color: red; */
    }

`

export default FAQSection;