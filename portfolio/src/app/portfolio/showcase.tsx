"use client";
import img from '@/assets/Madhur.jpg';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Ref, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useGSAP(()=>{
        const refs = [ref1.current, ref2.current, ref3.current];
        gsap.fromTo(sectionRef.current, {opacity: 0}, {opacity: 1, duration: 1.5});
        refs.forEach((ref,index) => {
            gsap.fromTo(
                ref, 
                {opacity: 0, y: 50}, 
                {opacity: 1, y: 0, duration: 1.5, delay: 0.3 * (index + 1), scrollTrigger: { trigger: ref, start: "top bottom-=100" }}
        )})
    }, []);

    const LeftShowCase = () => {
        return (
            <div ref={ref1} className="h-full flex flex-col justify-between xl:w-[60%]">
                <div className="xl:h-[70vh] md:h-[50vh] h-96 relative">
                    <Image src={img} alt='Madhur-Pic' className='w-full h-full object-cover object-[center_15%] rounded-xl absolute inset-0'/>
                </div>
                <div className='space-y-5 mt-5 flex flex-col justify-center items-center text-center'>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif"> Hi! I'm Madhur Aggarwal </h2>
                    <p className='text-white-50 md:text-xl'>I'm a Software Developer, working currently at Microsoft, skilled in Redis & Kubernetes</p>
                </div>
            </div>
        );
    }

    const RightShowCase = () => {
        const Component = ({ img, text,ref }: { img: StaticImageData; text: string; ref: Ref<HTMLDivElement>}) => {
            return (
                <div ref={ref} className='xl:h-[37vh] md:h-52 lg:h-72 h-64 rounded-xl flex flex-col'>
                    <div className='flex-grow relative rounded-xl overflow-hidden'>
                        <Image src={img} alt='Madhur-Pic' className='w-full h-full object-cover object-[center_10%]' />
                    </div>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-semibold mt-3 text-center font-serif'>{text}</h2>
                </div>
            );
        }
        return (
            <div className='flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[40%] overflow-hidden'>
                <Component img={img} text="This is Pic 1" ref={ref2}/>
                <Component img={img} text="This is Pic 2" ref={ref3}/>
            </div>
        );
    }

    return (
        <div ref={sectionRef} className="w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center">
            <div className="w-full">
                <div className="flex xl:flex-row flex-col gap-10 justify-between">
                    <LeftShowCase />
                    <RightShowCase />
                </div>
            </div>
        </div>
    );
}

export default ShowcaseSection;