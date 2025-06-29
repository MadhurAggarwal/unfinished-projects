import { DisplacementSphere } from '../components/bg-sphere/displacement-sphere';
import styles from '../styles/landingPage.module.css';

const LandingPage = ({ theme }: { theme: string }) => {
    return (
        <div className="relative snap-start w-full h-screen">
            <div className="absolute inset-0 z-0">
                <DisplacementSphere theme={theme} />
            </div>

            <section className="z-10 relative w-full h-screen mx-auto"> 
            <div className="pl-30 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#18cece]" />
                    <div className={`${styles['lightblue-gradient']} w-1 sm:h-80 h-40`} />
                </div>
                <div>
                    <h1 className="font-black lg:text-[80px] sm:text-[80px] xs:text-[50px] text-[50px] lg:leading-[98px] mt-2 text-white">
                        Hi👋! I'm <span className='text-[#18cece]'>Madhur Aggarwal</span>
                    </h1>
                </div>
            </div>
        </section>
            {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-4xl font-bold">Welcome to My Page</h1>
                <p className="text-lg">This text is placed on top of the DisplacementSphere.</p>
            </div> */}
        </div>
    );
};

const AboutMe = () => {
    return (
        <div className={`flex flex-col items-center justify-center h-screen snap-start`}>
            <h1 className="text-4xl font-bold text-center">About Me</h1>
        </div>
    );
};

const Sphere = () => {
    const theme = "dark";
    return (
        <div className={`overflow-y-scroll h-screen snap-y snap-mandatory ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
            <LandingPage theme={theme} />
            <AboutMe />
        </div>
    );
};

export default Sphere;
