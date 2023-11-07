import { useState } from "react"
import banner1 from "../../../assets/banner1.png"
import banner2 from "../../../assets/banner2.png"
import banner3 from "../../../assets/banner3.png"
import banner4 from "../../../assets/banner4.png"
import banner5 from "../../../assets/banner5.png"
import banner6 from "../../../assets/banner6.png"
import phnBanner from "../../../assets/phnBanner.jpg"
import '../../../index.css'
import { Typewriter } from 'react-simple-typewriter'



const Banner = () => {

    const [animatedBanner, setAnimatedBanner] = useState(false)

    let text = document.getElementById("text")
    let bannar2 = document.getElementById("bannar2")
    let bannar3 = document.getElementById("bannar3")
    let bannar5 = document.getElementById("bannar5")
    let bannar6 = document.getElementById("bannar6")

    const scroll = () => {
        let value = window.scrollY
        if (window.scrollY >= 50) {
            setAnimatedBanner(true)
            text.style.marginTop = value * 1 + 'px'
            bannar2.style.left = value * -.5 + 'px'
            bannar3.style.left = value * .8 + 'px'
            bannar5.style.left = value * .8 + 'px'
            bannar6.style.left = value * -.8 + 'px'

        } else {
            setAnimatedBanner(false)
        }
    }


    window.addEventListener('scroll', scroll);



    return (
        <div>
            <div className="banner hidden md:block">
                <div className="parallax">
                    <img src={banner1} alt="" />
                    <img src={banner2} id="bannar2" alt="" />
                    <img src={banner3} id="bannar3" alt="" />
                    <img src={banner5} id="bannar5" alt="" />
                    <img src={banner6} id="bannar6" alt="" />
                    <h1 id="text" className="lg:font-bold" >

                        <span style={{ color: '#04396F', }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Work for Us', 'Look and Find Jobs', 'Getting a Jobs', 'Part time Jobs']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>

                    <img src={banner4} alt="" />

                </div>

            </div>

            <div className=" block md:hidden">
                <img className="absolute" src={phnBanner} alt="" />

                
                <h1 className="relative flex items-center justify-center text-xl font-bold h-[257.98px]" >

                        <span style={{ color: '#04396F', }}>
                            <Typewriter
                                words={['Work for Us', 'Look and Find Jobs', 'Getting a Jobs', 'Part time Jobs', 'Post the Jobs']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>
            </div>
        </div>
    );
};

export default Banner;