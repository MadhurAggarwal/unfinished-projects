'use client'

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image, { StaticImageData } from 'next/image';
import ezt1 from '@/assets/ezt/ezt-1.png';
import ezt2 from '@/assets/ezt/ezt-2.png';
import ezt3 from '@/assets/ezt/ezt-3.png';
import ezt4 from '@/assets/ezt/ezt-4.png';

gsap.registerPlugin(ScrollTrigger);

const MSComponents = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const images = [ezt1, ezt2, ezt3, ezt4];
    const texts = [
        "[1/4] Existing Packets are all exposed to the untrusted host & malicious pods",
        "[2/4] Deployed an Isolation Tunnel: Attestible, but Invisible to Container Workloads",
        "[3/4] Added Wireguard Encryption to the EZT Tunnel, handled Public Key Exchange via Async Functions",
        "[4/4] Implemented a YAML Security Policy parser to apply custom Ingress/Egress policies to the EZT Tunnel"
    ];

    useEffect(() => {
        const section = containerRef.current;
        const sticky = stickyRef.current;

        if (!section || !sticky) return;

        const ctx = gsap.context(() => {
            gsap.to({}, {
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=3000", // Adjust scroll distance
                    scrub: true,
                    pin: sticky,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const newIndex = Math.min(
                            images.length - 1,
                            Math.floor(self.progress * images.length)
                        );
                        if (newIndex !== index) {
                            // Smooth image transition
                            if (imageRef.current) {
                                gsap.fromTo(
                                    imageRef.current,
                                    { opacity: 0 },
                                    { opacity: 1, duration: 0.5, ease: "power1.inOut" }
                                );
                            }
                            setIndex(newIndex);
                        }
                    }
                }
            });
        }, section);

        return () => ctx.revert();
    }, [index]);

    const Component = ({ img, text }: { img: StaticImageData, text: string }) => (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen px-10 md:px-24 py-10">
            <div className="w-full md:w-1/2 flex justify-center">
                <div ref={imageRef}>
                    <Image
                        key={img.src}
                        src={img}
                        alt="EZT Step"
                        className="rounded-2xl object-contain w-full max-h-[400px] transition-opacity duration-500"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 text-center mt-10 md:mt-0">
                <p className="text-base xl:text-l font-semibold text-white max-w-xl mx-auto transition-opacity duration-500">
                    {text}
                </p>
            </div>
        </div>
    );

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            <div ref={stickyRef} className="sticky top-[20vh] h-screen flex items-center justify-center">
                <Component img={images[index]} text={texts[index]} />
            </div>
        </div>
    );
};



// const MSComponents = () => {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const [index, setIndex] = useState(0);

//     const images = [ezt1, ezt2, ezt3, ezt4];
//     const texts = [
//         "[1/4] Existing Packets are all exposed to the untrusted host & malicious pods",
//         "[2/4] Deployed an Isolation Tunnel: Attestible, but Invisible to Container Workloads",
//         "[3/4] Added Wireguard Encryption to the EZT Tunnel, handled Public Key Exchange via Async Functions",
//         "[4/4] Implemented a YAML Security Policy parser to apply custom Ingress/Egress policies to the EZT Tunnel"
//     ];

//     useEffect(() => {
//         const section = sectionRef.current;
//         if (!section) return;

//         const ctx = gsap.context(() => {
//             ScrollTrigger.create({
//                 trigger: section,
//                 start: "top center",
//                 end: "bottom center",
//                 scrub: true,
//                 onUpdate: (self) => {
//                     const newIndex = Math.min(
//                         images.length - 1,
//                         Math.floor(self.progress * images.length)
//                     );
//                     if (newIndex !== index) setIndex(newIndex);
//                 }
//             });
//         }, section);

//         return () => ctx.revert();
//     }, [index]);

//     const Component = ({ img, text }: { img: StaticImageData, text: string }) => {
//         return (
//             <div className="flex flex-col md:flex-row items-center justify-center h-[80vh] px-10 md:px-24 py-10">
//                 <div className="w-full md:w-1/2 flex justify-center">
//                     <Image
//                         src={img}
//                         alt="EZT Step"
//                         className="rounded-2xl object-contain w-full max-h-[400px]"
//                     />
//                 </div>
//                 <div className="w-full md:w-1/2 text-center mt-10 md:mt-0">
//                     <p className="text-base xl:text-l font-semibold text-white max-w-xl mx-auto">
//                         {text}
//                     </p>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div ref={sectionRef} className="relative overflow-hidden">
//             <Component img={images[index]} text={texts[index]} />
//         </div>
//     );
// };



// const MSComponents = () => {
//     const Component = ({ img, text }: { img: StaticImageData, text: string }) => {
//         return (
//             <div className="flex flex-col md:flex-row items-center justify-center px-10 md:px-24 py-10 xl:-space-x-30">
//                 <div className="w-full md:w-1/2 flex justify-center">
//                     <div className="w-auto">
//                         <Image
//                             src={img}
//                             alt="EZT Step"
//                             className="rounded-2xl object-contain w-full"
//                             placeholder="blur"
//                         />
//                     </div>
//                 </div>
//                 <div className="w-full md:w-1/2 text-center md:translate-y-[-30%] xl:translate-y-[-100%]">
//                     <p className="text-base xl:text-l font-semibold text-white max-w-xl mx-auto">
//                         {text}
//                     </p>
//                 </div>
//             </div>
//         );
//     };

//     const images = [ezt1, ezt2, ezt3, ezt4];
//     const texts = [
//         "[1/4] Existing Packets are all exposed to the untrusted host & malicious pods", 
//         "[2/4] Deployed an Isolation Tunnel: Attestible, but Invisible to Container Workloads", 
//         "[3/4] Added Wireguard Encryption to the EZT Tunnel, handled Public Key Exchange via Async Functions", 
//         "[4/4] Implemented a YAML Security Policy parser to apply custom Ingress/Egress policies to the EZT Tunnel"
//     ];

//     return ( 
//     <div className='xl:m-30 mb-20'>
//         <Component img={images[3]} text={texts[3]} />
//     </div> 
// );
// }
 
export default MSComponents;