import { useState } from "react"
import banner1 from "../../../assets/banner1.png"
import banner2 from "../../../assets/banner2.png"
import banner3 from "../../../assets/banner3.png"
import banner4 from "../../../assets/banner4.png"
import banner5 from "../../../assets/banner5.png"
import banner6 from "../../../assets/banner6.png"
import '../../../index.css'
import { Typewriter } from 'react-simple-typewriter'



const Banner = () => {

    const [animatedBanner, setAnimatedBanner] = useState(false)

    let abc = document.getElementById("text")
    let bannar2 = document.getElementById("bannar2")
    let bannar3 = document.getElementById("bannar3")
    let bannar5 = document.getElementById("bannar5")
    let bannar6 = document.getElementById("bannar6")

    const scroll = () => {
        let value = window.scrollY
        if (window.scrollY >= 50) {
            setAnimatedBanner(true)
            abc.style.marginTop = value * 1 + 'px'
            bannar2.style.left = value * -.5 + 'px'
            bannar3.style.left = value * .8 + 'px'
            bannar5.style.left = value * .8 + 'px'
            bannar6.style.left = value * -.8 + 'px'

        } else {
            setAnimatedBanner(false)
        }
    }

    console.log(animatedBanner)

    window.addEventListener('scroll', scroll);



    return (
        <div className="banner">
            <div className="parallax">
                <img src={banner1} alt="" />
                <img src={banner2} id="bannar2" alt="" />
                <img src={banner3} id="bannar3" alt="" />
                <img src={banner5} id="bannar5" alt="" />
                <img src={banner6} id="bannar6" alt="" />
                <h1 id="text" >
                    
                    <span style={{ color: '#04396F', fontWeight: 'bold' }}>
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
    );
};

export default Banner;