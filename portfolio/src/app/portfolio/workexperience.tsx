"use client";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import style from './scrollLine.module.css';
import GlowCard from './glowCard';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import juspayLogo from '@/assets/juspay.png';
import MicrosoftLogo from '@/assets/microsoft.png';
import ezt1 from '@/assets/ezt/ezt-1.png';
import ezt2 from '@/assets/ezt/ezt-2.png';
import ezt3 from '@/assets/ezt/ezt-3.png';
import ezt4 from '@/assets/ezt/ezt-4.png';


            {/* WorkExperience
            Title Centre

            Flex Row
                ScrollBar on Left
                RightComponent 
                    Microsoft | SDE Intern 
                    Date | Duration 
                    Responsibilities 
                        Image | Responsibility
                    Glowcard 
                        Animation Company Logo
                        Techstack Pics 
                        View My Work  */}

{/* Microsoft section:
        freeze the EZT Diagram 
        Highlight a section on diagram, Explain it, update on scroll
            For Mobile & Tablets, Exaplanation is below Image, For Laptops, it is on the right side
        
-------------------------------------------------------------------------------------
        Worked on Enhancing Network Security in Kata Confidential Containers, 
        for untrusted host / cloud environments, building and benchmrking 
        a POC for an Attestible (EZT Tunnel) Approach

        <existing connections> : [1/4] Existing Packets are all exposed to the untrusted host & malicious pods
        <namespace isolation>  : [2/4] Deployed an Isolation Tunnel: Attestible, but Invisible to Container Workloads
        <Encryption>           : [3/4] Added Wireguard Encryption to the EZT Tunnel, handled Public Key Exchange via Async Functions (to use Azure Key Vault after POC)
        <Security Policy>      : [4/4] Implemented a YAML Security Policy parser to apply custom Ingress/Egress policies to the EZT Tunnel

        Automated this entire setup during Kata-CoCo Pod Creation
        POC metrics (cicle rotating to percentage)
-------------------------------------------------------------------------------------

        Glowcard
            Techstack Pics
            View My Work
*/}

{/* Juspay section:
        Counter for Redis Calls Reduced, Latency Reduction, Consistency to 99.995%
        Dropdown menus for each subtask
*/}

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
    useGSAP(() => {
        gsap.to(".scrolltimeline", {
            transformOrigin: "bottom bottom",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".scrolltimeline",
                start: "top center+=10%",
                end: "bottom-=30% center",
                onUpdate: (self) => {
                    gsap.set(".scrolltimeline", { scaleY: 1 - self.progress,});
                }
            }
        })
    })

    const Header = ({ title, subTitle }: { title: string, subTitle: string }) => {
        return (
            <div className="flex flex-col justify-center items-center text-center gap-5">
                <div className="bg-[#161618] py-2 px-4 rounded-full w-fit text-nowrap text-xs">
                    <p className='uppercase tracking-widest text-xs md:text-base font-bold text-white/75 font-sans'>{subTitle}</p>
                </div>
                <div className="font-semibold xl:text-7xl md:text-6xl text-3xl text-center font-serif">
                    {title}
                </div>
            </div>
        );
    }

    const ScrollComponent = () => {
        return (
            <div className="top-0 h-full w-full relative">
                <div className="z-40 absolute top-0 left-0 h-[110%] w-full bg-black scrolltimeline" />
                <div className="z-10 absolute top-0 left-1/2 transform -translate-x-1/2 h-[110%] w-[2px] md:w-[3px] xl:w-[4px]">
                    <div id="line" className={`h-full ${style.gradientline}`} />
                </div>
            </div>
        );
    }


    const Juspay = () => {
        let img = juspayLogo;
        let companyName = "Juspay";

        return (
            <div className='relative w-full h-full flex'>
                <div className="z-10 w-14 md:w-28 xl:w-36">
                    <div className='rounded-full border border-[#1c1c21] bg-[#0e0e10] xl:p-4 md:p-1'>
                        <Image src={img} alt="company-logo" />
                    </div>
                </div>

                <div className='z-10 h-full flex-1 ml-3 md:ml-5 xl:ml-10'>
                    <div className='xl:p-10 font-serif'>
                        <h1 className='font-semibold text-5xl'> {companyName}
                            <span className='hidden md:inline text-3xl'> | </span>
                            <span className='text-3xl pt-2 md:inline block'> SDE Intern </span> 
                        </h1>
                        <p className='xl:text-base my-3 md:my-5 lg:my-8 text-white/75 font-sans'>🗓️ Jan 2025 - June 2025 | 6 Months</p>
                    </div>

                    <div className='w-3/4 mx-auto xl:mt-10'>
                        <GlowCard>
                            <div className='flex items-center justify-center text-center'>
                                <p className='font-semibold'>Kubernetes, Rust, Azure Kubernetes Services, Kata Containers, Azure VM, Linux Kernel</p>
                            </div>
                        </GlowCard>
                    </div>
                </div>
            </div>
        );
    }
    
    const images = [ezt1, ezt2, ezt3, ezt4];
    const texts = [
        "[1/4] Existing Packets are all exposed to the untrusted host & malicious pods",
        "[2/4] Deployed an Isolation Tunnel: Attestible, but Invisible to Container Workloads",
        "[3/4] Added Wireguard Encryption to the EZT Tunnel, handled Public Key Exchange via Async Functions",
        "[4/4] Implemented a YAML Security Policy parser to apply custom Ingress/Egress policies to the EZT Tunnel"
    ];

    // const Microsoft = () => {
    //     let img = MicrosoftLogo;
    //     let companyName = "Microsoft";

    //     const RoleDescription = ({ index }: { index: number }) => {
    //         return (
    //             <div className="xl:mt-10 flex items-start justify-center gap-6">
    //                 <div>
    //                     <Image src={images[index]} alt="EZT" className='' />
    //                 </div>
        
    //                 <ul className="w-[1100px] xl:text-2xl list-disc ms-5 mt-3 md:mt-3 xl:mt-14 text-white marker:text-2xl marker:text-white flex flex-col gap-5">
    //                     <li>{texts[index]}</li>
    //                 </ul>
    //             </div>
    //         );
    //     };        

    //     return (
    //         <div className='relative w-full h-full flex'>
    //             <div className="z-10 w-14 md:w-28 xl:w-36">
    //                 <div className='rounded-full border border-[#1c1c21] bg-[#0e0e10] xl:p-4 md:p-1'>
    //                     <Image src={img} alt="company-logo" />
    //                 </div>
    //             </div>

    //             <div className='z-10 h-full flex-1 ml-3 md:ml-5 xl:ml-10'>
    //                 <div className='xl:p-10 font-serif'>
    //                     <h1 className='font-semibold text-5xl'> {companyName}
    //                         <span className='hidden md:inline text-3xl'> | </span>
    //                         <span className='text-3xl pt-2 md:inline block'> SDE Intern </span> 
    //                     </h1>
    //                     <p className='xl:text-base my-3 md:my-5 lg:my-8 text-white/75 font-sans'>🗓️ June 2024 - July 2024 | 2 Months</p>
    //                     <p className="uppercase tracking-widest xl:text-base font-bold text-[#6db3f2] mb-2 font-sans"> Responsibilities</p>
    //                     <RoleDescription index={0} />
    //                     <RoleDescription index={1} />
    //                     <RoleDescription index={2} />
    //                     <RoleDescription index={3} />

    //                     <div className='w-3/4 mx-auto xl:mt-10'>
    //                         <GlowCard>
    //                             <div className='flex items-center justify-center text-center'>
    //                                 <p className='font-semibold'>Kubernetes, Rust, Azure Kubernetes Services, Kata Containers, Azure VM, Linux Kernel</p>
    //                             </div>
    //                         </GlowCard>
    //                     </div>
    //                 </div>
    //             </div> 
    //         </div>
    //     );
    // }

    // const Microsoft = () => {
    //     const containerRef = useRef<HTMLDivElement>(null);
    //     const pinRef = useRef<HTMLDivElement>(null);
    //     const [currentIndex, setCurrentIndex] = useState(0);
    
    //     const totalDescriptions = 4;
    //     const scrollStep = 650;
    
    //     useGSAP(() => {
    //         if (!containerRef.current || !pinRef.current) return;
    
    //         const triggers: ScrollTrigger[] = [];
    
    //         for (let i = 0; i < totalDescriptions; i++) {
    //             const trigger = ScrollTrigger.create({
    //                 trigger: containerRef.current,
    //                 start: `${i * scrollStep}px top`,
    //                 end: `${(i + 1) * scrollStep}px top`,
    //                 onEnter: () => setCurrentIndex(i),
    //                 onEnterBack: () => setCurrentIndex(i),
    //             });
    //             triggers.push(trigger);
    //         }
    
    //         const pinTrigger = ScrollTrigger.create({
    //             trigger: pinRef.current,
    //             start: "top top",
    //             end: `${totalDescriptions * scrollStep}px`,
    //             pin: true,
    //             scrub: true,
    //         });
    
    //         return () => {
    //             triggers.forEach(trigger => trigger.kill());
    //             pinTrigger.kill();
    //         };
    //     }, { dependencies: [], scope: containerRef });
        
    //     const RoleDescription = ({ index }: { index: number }) => {
    //         if (currentIndex !== index) return null;
    //         return (
    //             <div className="xl:mt-10 flex flex-col xl:flex-row items-start justify-center gap-6 transition-opacity duration-300 ease-in-out">
    //                 <div>
    //                     <Image src={images[index]} alt={`Role ${index}`} />
    //                 </div>
    //                 <ul className="xl:w-[1100px] xl:text-2xl list-disc ms-5 mt-3 md:mt-3 xl:mt-70 text-white marker:text-2xl marker:text-white flex flex-col gap-5">
    //                     <li>{texts[index]}</li>
    //                 </ul>
    //             </div>
    //         );
    //     };
    
    //     return (
    //         <div className="relative w-full h-full">
    //             <div ref={pinRef} className="z-10 flex flex-col xl:flex-row w-full">

    //                 <div className="z-10 w-14 md:w-28 xl:w-36 shrink-0  mt-10 xl:mt-20">
    //                     <div className="rounded-full border border-[#1c1c21] bg-[#0e0e10] xl:p-4 md:p-1">
    //                         <Image src={MicrosoftLogo} alt="company-logo" />
    //                     </div>
    //                 </div>
    
    //                 <div className="z-10 flex-1 xl:ml-10 xl:p-10 font-serif mt-10 xl:mt-20">
    //                     <h1 className="font-semibold text-5xl"> Microsoft
    //                         <span className="hidden md:inline text-3xl"> | </span>
    //                         <span className="text-3xl pt-2 md:inline block"> SDE Intern </span>
    //                     </h1>
    //                     <p className="xl:text-base my-3 md:my-5 lg:my-8 text-white/75 font-sans"> 🗓️ June 2024 - July 2024 | 2 Months </p>
    //                     <p className="uppercase tracking-widest xl:text-base font-bold text-[#6db3f2] mb-2 font-sans"> Responsibilities </p>
    
    //                     <div ref={containerRef}>
    //                         {[...Array(totalDescriptions)].map((_, i) => (
    //                             <RoleDescription key={i} index={i} />
    //                         ))}
    //                     </div>
    //                 </div>
    //             </div>
    
    //             <div className='ml-14 md:ml-28 xl:ml-36'>
    //             <div className="w-3/4 mx-auto xl:mt-20 ">
    //                 <GlowCard>
    //                     <div className="flex items-center justify-center text-center">
    //                         <p className="font-semibold">
    //                             Kubernetes, Rust, Azure Kubernetes Services, Kata Containers, Azure VM, Linux Kernel
    //                         </p>
    //                     </div>
    //                 </GlowCard>
    //             </div>
    //             </div>
    //         </div>
    //     );
    // };
    

    const ScrollImageSequence = () => {
        const containerRef = useRef<HTMLDivElement>(null);
        const canvasRef = useRef<HTMLCanvasElement>(null);
        const frameCount = 671;
        const images: HTMLImageElement[] = [];
        const imageSeq = { frame: 0 };
      
        const currentFrame = (index: number) =>
          `/ezt-animation/ezt${String(index + 1).padStart(3, '0')}.jpg`;
      
        useEffect(() => {
          const canvas = canvasRef.current!;
          const context = canvas.getContext('2d')!;
          canvas.width = 1920;
          canvas.height = 1080;
      
          for (let i = 7; i < frameCount; i++) {
            const img: HTMLImageElement = new window.Image();
            img.src = currentFrame(i);
            images.push(img);
          }
      
          images[0].onload = () => {
            canvas.width = images[0].naturalWidth;
            canvas.height = images[0].naturalHeight;
            context.drawImage(images[0], 0, 0);
          };
      
          gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: 'frame',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: '+=5000',
              scrub: 0.5,
            //   pin: true,
              anticipatePin: 1
            },
            onUpdate: () => {
              requestAnimationFrame(() => {
                const img = images[imageSeq.frame];
                if (img && img.complete) {
                  context.clearRect(0, 0, canvas.width, canvas.height);
                  context.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
              });
            }
          });
        }, []);
      
        return (
          <div ref={containerRef} className="w-full bg-black relative aspect-[16/9]">
            <canvas ref={canvasRef} className="w-full h-auto object-contain" />
          </div>
        );
      };
      

    const Microsoft = () => {
        const containerRef = useRef<HTMLDivElement>(null);
        const pinRef = useRef<HTMLDivElement>(null);
        const [currentIndex, setCurrentIndex] = useState(0);
    
        const totalDescriptions = 1;
        const scrollStep = 5000;
    
        useGSAP(() => {
            if (!containerRef.current || !pinRef.current) return;
    
            const triggers: ScrollTrigger[] = [];
    
            for (let i = 0; i < totalDescriptions; i++) {
                const trigger = ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: `${i * scrollStep}px top`,
                    end: `${(i + 1) * scrollStep}px top`,
                    onEnter: () => setCurrentIndex(i),
                    onEnterBack: () => setCurrentIndex(i),
                });
                triggers.push(trigger);
            }
    
            const pinTrigger = ScrollTrigger.create({
                trigger: pinRef.current,
                start: "top top",
                end: `${totalDescriptions * scrollStep}px`,
                pin: true,
                scrub: true,
            });
    
            return () => {
                triggers.forEach(trigger => trigger.kill());
                pinTrigger.kill();
            };
        }, { dependencies: [], scope: containerRef });
        
        const RoleDescription = ({ index }: { index: number }) => {
            if (currentIndex !== index) return null;
            return (
                <div className="xl:mt-10 flex flex-col xl:flex-row items-start justify-center gap-6 transition-opacity duration-300 ease-in-out">
                    <div>
                        <Image src={images[index]} alt={`Role ${index}`} />
                    </div>
                    <ul className="xl:w-[1100px] xl:text-2xl list-disc ms-5 mt-3 md:mt-3 xl:mt-70 text-white marker:text-2xl marker:text-white flex flex-col gap-5">
                        <li>Some Text</li>
                    </ul>
                </div>
            );
        };
    
        return (
            <div className="relative w-full h-full">
                <div ref={pinRef} className="z-10 flex flex-col xl:flex-row w-full">

                    <div className="z-10 w-14 md:w-28 xl:w-36 shrink-0  mt-10 xl:mt-20">
                        <div className="rounded-full border border-[#1c1c21] bg-[#0e0e10] xl:p-4 md:p-1">
                            <Image src={MicrosoftLogo} alt="company-logo" />
                        </div>
                    </div>
    
                    <div className="z-10 flex-1 xl:ml-10 xl:p-10 font-serif mt-10 xl:mt-20">
                        <h1 className="font-semibold text-5xl"> Microsoft
                            <span className="hidden md:inline text-3xl"> | </span>
                            <span className="text-3xl pt-2 md:inline block"> SDE Intern </span>
                        </h1>
                        <p className="xl:text-base my-3 md:my-5 lg:my-8 text-white/75 font-sans"> 🗓️ June 2024 - July 2024 | 2 Months </p>
                        <p className="uppercase tracking-widest xl:text-base font-bold text-[#6db3f2] mb-2 font-sans"> Responsibilities </p>
    
                        <div ref={containerRef}>
                            <div className="xl:mt-10 flex flex-col xl:flex-row items-start justify-center gap-6 transition-opacity duration-300 ease-in-out">
                                <div>
                                    <ScrollImageSequence />
                                </div>
                                <ul className="xl:w-[850px] xl:text-2xl list-disc ms-5 mt-3 md:mt-3 xl:mt-70 text-white marker:text-2xl marker:text-white flex flex-col gap-5">
                                    <li>Some Text</li>
                                </ul>
                            </div>
                        
                            {/* {[...Array(totalDescriptions)].map((_, i) => (
                                <RoleDescription key={i} index={i} />
                            ))} */}
                        </div>

                        <div className='ml-14 md:ml-28 xl:ml-36 mt-20'>
                            <div className="w-3/4 mx-auto xl:mt-20 ">
                                <GlowCard>
                                    <div className="flex items-center justify-center text-center">
                                        <p className="font-semibold">
                                            Kubernetes, Rust, Azure Kubernetes Services, Kata Containers, Azure VM, Linux Kernel
                                        </p>
                                    </div>
                                </GlowCard>
                            </div>
                        </div>

                    </div>
                </div>
    
            </div>
        );
    };

    
    return ( 
        <div className="w-screen bg-black">
            <Header title="Work Experience" subTitle="<> 1 Year as a 💻 Software Developer </>" />
            
            <div className="mt-20 md:mt-35 xl:mt-35 px-5 md:px-15 xl:px-36 xl:pl-54 flex">
                <div className="w-14 md:w-28 xl:w-36 relative">
                    <ScrollComponent />
                </div>
                
                <div className="w-full -ml-14 md:-ml-28 xl:-ml-36 flex flex-col gap-[200vh] md:gap-10 xl:gap-20">
                    <Juspay />
                    <Microsoft />
                </div>
            </div>

        </div>      
    );
}
 
export default WorkExperience;