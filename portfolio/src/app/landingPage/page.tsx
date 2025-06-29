import styles from '../styles/landingPage.module.css';

const LandingPage = () => {
    return ( 
        <section className="relative w-full h-screen mx-auto"> 
            <div className="pl-30 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className={`${styles['violet-gradient']} w-1 sm:h-80 h-40`} />
                </div>
                <div>
                    <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
                        Hi👋! I'm <span className='text-[#915EFF]'>Madhur Aggarwal</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}
 
export default LandingPage;