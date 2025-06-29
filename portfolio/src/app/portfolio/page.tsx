import { DisplacementSphere } from "../components/bg-sphere/displacement-sphere";
import Experience from "./experience";
import ScrollTest from "./scrolltest";
import MSComponents from "./scrolltest-2";

import ShowcaseSection from "./showcase";
import WorkExperience from "./workexperience";

const Portfolio = () => {
    return ( 
        <div>
            <div className="w-screen h-screen bg-black" />
            <DisplacementSphere theme="dark" />
            
            <div className="w-screen h-screen bg-black" />
            <ScrollTest />
            <div className="w-screen h-screen bg-black" />
            <WorkExperience />
            <div className="w-screen h-screen bg-black" />
            <Experience />
            <div className="w-screen h-screen bg-black" />
            <ShowcaseSection />
            <div className="w-screen h-screen bg-black" />
        </div>
    );
}

export default Portfolio;