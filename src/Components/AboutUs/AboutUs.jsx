import Marquee from "react-fast-marquee";


const AboutUs = () => {
    return (
        <div className=" my-5">
            <div className="w-1/2 mx-auto">
                <h1 className="text-4xl font-bold mb-2">Who We Are</h1>
                <p>
                    The Balance makes personal finance easy to understand. It is home to experts who provide clear, practical advice on managing your money. Every day, we publish news, how-to guides, and product reviews to help you make sense of every aspect of your financial life.
                    <br />
                    Whether you’re looking to invest, buy a home, save for retirement, or achieve another financial goal, The Balance’s 20-year-strong library of more than 10,000 pieces of content will answer your questions with straightforward personal financial advice. Our more than 50 expert writers have extensive qualifications and expertise in their topics, including MBAs, PhDs, CFPs, other advanced degrees and professional certifications.</p>
            </div>

            <h1 className="text-center text-3xl font-bold mb-2">Meet Our Team </h1>
            <hr />
            <Marquee>
                <div className="card card-compact w-80 bg-base-100 shadow-xl ml-10">
                    <figure><img className="rounded-full" src="https://www.thebalancemoney.com/thmb/lTxn3aUsBrPZYnDbcp_FTqpJDyY=/210x210/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Hilarey-Gould_WebReady-5aaba9f117134ca692511d6cade41abd.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Hilarey Gould</h2>
                        <p>Hilarey Gould is the editorial director of The Balance. During her 10+ years in the digital media space, she's developed a passion for economics, saving, investing, credit card perks, mortgage rates, and more. Hilarey began her career at TripAdvisor, and has since held full-time and freelance roles at a variety of media companies including realtor.com, Bankrate, and SmartAsset. Hilarey has a master's in journalism from the University of Missouri, and a bachelor's in journalism and professional writing from The College of New Jersey (TCNJ). She also works as an adjunct professor at TCNJ, teaching social media strategies to journalism students.</p>

                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl ml-10">
                    <figure><img className="rounded-full" src="https://www.thebalancemoney.com/thmb/iuY72IL8MrSmlkUvYUfKoRTTPuY=/210x210/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Balance-Lars_Peterson_Headshot-11-ee8a849bd04f428c857815dc22ac78a2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Hilarey Gould</h2>
                        <p>Hilarey Gould is the editorial director of The Balance. During her 10+ years in the digital media space, she's developed a passion for economics, saving, investing, credit card perks, mortgage rates, and more. Hilarey began her career at TripAdvisor, and has since held full-time and freelance roles at a variety of media companies including realtor.com, Bankrate, and SmartAsset. Hilarey has a master's in journalism from the University of Missouri, and a bachelor's in journalism and professional writing from The College of New Jersey (TCNJ). She also works as an adjunct professor at TCNJ, teaching social media strategies to journalism students.</p>

                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl ml-10">
                    <figure><img className="rounded-full" src="https://www.thebalancemoney.com/thmb/uQI_7ky-OGfBGLuU7HaPkLTMz_0=/210x210/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TaylorTompkins-d4efdf4238614788b1848f0fc17170f3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Mrinalini Krishna</h2>
                        <p>Mrinalini is the senior investing editor at The Balance, with 10+ years of financial journalism experience across two continents and different media. She is passionate about creating comprehensible and usable financial content. She has previously worked with organizations such as Financial Times, Investopedia, Forbes and CNBC TV18. Mrinalini holds a master’s in business and economic reporting from New York University and a bachelor’s with honors in economics from the University of Delhi, India. 

</p>

                    </div>
                </div>
                <div className="card card-compact w-80 bg-base-100 shadow-xl ml-10">
                    <figure><img className="rounded-full" src="https://www.thebalancemoney.com/thmb/GuhSGWlT91ASDDZF68HaHPhSek4=/210x210/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DSC00291copy3-6d34462e61fb4ec8991e1bda9000f457.JPG" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Yasmin Ghahremani</h2>
                        <p>Yasmin Ghahremani is an Associate Editorial Director at The Balance, where she oversees educational content about consumer financial products, ranging from credit cards to life insurance. She joined the team in April 2019, bringing seven years of experience educating consumers about personal finance. She was previously a managing editor at CreditCards.com and Wise Bread, and a contract editor at LendingTree.</p>

                    </div>
                </div>
            </Marquee>

        </div>
    );
};

export default AboutUs;