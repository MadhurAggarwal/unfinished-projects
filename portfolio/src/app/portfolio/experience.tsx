"use client";

import Image from 'next/image';
import { expCards, ExpCardType } from './experience-data';
import GlowCard from './glowCard';
import style from './scrollLine.module.css';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);  

const TitleHeader = ({ title, sub }: { title: string, sub: string }) => {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="bg-[#161618] py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap">
                <p className='uppercase tracking-widest text-xs font-bold text-white/75 mb-2 font-sans'>{sub}</p>
            </div>
            <div className="font-semibold md:text-5xl text-3xl text-center font-serif">
                {title}
            </div>
        </div>
    );
}

const ExperienceBody = () => {
    useGSAP(() => {
        gsap.utils.toArray('.experience-card').forEach((card) => {
            const element = card as HTMLElement;
            gsap.from(element, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1.5,
                ease: 'elastic.out(0.8, 0.6)',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                }
            })
        })
        
        gsap.to(".timeline", {
            transformOrigin: "bottom bottom",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "80% center",
                onUpdate: (self) => {
                    gsap.set(".timeline", { scaleY: 1 - self.progress,});
                }
            }
        })

        gsap.utils.toArray('.experience-detail').forEach((text) => {
            const element = text as HTMLElement;
            gsap.from(element, {
                xPercent: 0,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 60%',
                }
            })
        })

    }, []);
      
    const ExperienceCard = ({ card }: { card: ExpCardType}) => {
        return (
            <GlowCard>
                <div className='mb-5 flex items-center justify-center text-center'>
                    <p className='font-semibold'>{card.techStack.join(", ")}</p>
                </div>
                {/* <div className='flex items-center justify-center pb-4'>
                    <Image src={card.logo} alt={card.company} className='w-30'/>
                </div> */}
                <div className='z-40 flex items-center justify-center text-center gap-5 text-sm text-nowrap font-serif pb-2'>
                    <Image src={card.logo} alt={card.company} className='w-30'/>
                    <div className='flex flex-col justify-center items-center text-center text-sm text-nowrap font-serif pb-2 gap-5'>
                        <div className="bg-[#161618] py-2 px-4 rounded-full w-fit">
                            <p>View My Work</p>
                        </div>
                        <div className="bg-[#161618] py-2 px-4 rounded-full w-fit">
                            <p>Github</p>
                        </div>
                    </div>
                </div>
            </GlowCard>
        );
    }

    const ExperienceScrollLine = () => {
        return (
            <div className="absolute top-0 xl:left-[32.5vw] md:left-10 left-5 h-full flex justify-center">
                <div className="timeline absolute z-30 h-[105%] -top-10 w-14 md:w-28 bg-black" />
                <div className={`w-1 h-full ${style.gradientline}`} />
            </div>
        ); 
    }

    const ExperienceDetail = ( { card }: { card: ExpCardType} ) => {
        return (
            <div className='experience-detail flex xl:gap-20 md:gap-10 gap-5 relative z-20 font-serif'>
                <div className='md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 border border-[#1c1c21] bg-[#0e0e10]'>
                    <Image src={card.logo} alt={card.company}/>
                </div>
                <div>
                    <h1 className='font-semibold text-3xl'> {card.company} 
                        <span className='hidden md:inline'> | </span>
                        <span className='text-lg pt-2 md:inline block'> {card.role} </span> 
                    </h1>
                    <p className='my-3 md:my-5 text-white/75 font-sans'>🗓️ {card.date} | {card.duration}</p>
                    <p className="uppercase tracking-widest text-sm font-bold text-[#6db3f2] mb-2 font-sans"> Responsibilities</p>
                    <div className='flex items-start justify-center'>
                        <div>
                        <Image src={card.work} alt={card.company}/>
                        </div>
                            <ul className="list-disc ms-5 mt-3 md:mt-3 text-white marker:text-2xl marker:text-white flex flex-col gap-3">
                            {card.responsibilities.map((item, index) => (
                                <li key={index} className="text-lg">{item}</li>
                            ))}
                         </ul>
                    </div>
                </div>
            </div>
        );
    }
 
    return (
        <div className="mt-32 relative">
            <div className="relative z-50 xl:space-y-32 space-y-10">
                {expCards.map((card) => (
                    <div key={card.company} className='flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between'> 
                        <div className='experience-card xl:w-2/6'>
                            <ExperienceCard card={card} />
                        </div>

                        <div className='xl:w-4/6'>
                            <div className='flex items-start'>
                                <ExperienceScrollLine /> 
                                <ExperienceDetail card={card}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Experience = () => {
    return (
        <section id="experience" className="flex justify-center items-center md:mt-40 mt-20 px-5 md:px-10 xl:px-0 pb-20">
            <div className="w-full h-full md:px-40 px-5">
                <TitleHeader title="Work Experience" sub="<> 1 Year as a 💻 Software Developer </>" />
                <ExperienceBody />
            </div>
        </section>
    );
}

export default Experience;