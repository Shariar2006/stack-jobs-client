import Marquee from "react-fast-marquee";


const Sponsored = () => {
    return (
        <div>
            <h1 className="text-center text-xl mb-2">Sponsored by </h1>
            <hr />
            <Marquee>
                <img className="h-[40px] mr-4" src="https://freepngimg.com/convert-png/66907-images-logo-google-free-download-png-hd" alt="" />
                <img className="h-[80px] mr-4" src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" alt="" />
                <img className="h-[40px] mr-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/800px-Dell_Logo.png" alt="" />
                <img className="h-[40px] mr-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="" />
                <img className="h-[40px] mr-4" src="https://e7.pngegg.com/pngimages/284/941/png-clipart-sony-logo-fujifilm-company-lenovo-logo-text-trademark.png" alt="" />
                <img className="h-[40px] mr-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" alt="" />
                <img className="h-[80px] mr-4" src="https://cdn.sanity.io/images/kts928pd/production/61d272b465c86af755d47397cac383fdec80bbdc-1280x720.png" alt="" />
                <img className="h-[0px] mr-4" src="" alt="" />
                <img className="h-[40px] mr-4" src="" alt="" />
            </Marquee>
        </div>
    );
};

export default Sponsored;