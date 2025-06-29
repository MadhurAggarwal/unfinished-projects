"use client";
import { useEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTest = () => {
    const pinkBoxRef = useRef<HTMLDivElement | null>(null);
    const textContainerRef = useRef<HTMLDivElement | null>(null);
    const textRefs = useRef<HTMLDivElement[]>([]);
    textRefs.current = [];

    const addToRefs = (el: HTMLDivElement | null): void => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    useEffect(() => {
        const pinkBox = pinkBoxRef.current;
        const texts = textRefs.current;

        if (!pinkBox || texts.length === 0) return;

        ScrollTrigger.create({
            trigger: texts[0],
            start: "top center",
            endTrigger: texts[texts.length - 1],
            end: "bottom center+=160",
            pin: pinkBox,
            pinSpacing: false,
            scrub: true,
        });

        texts.forEach((text, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: text,
                    start: "top center+=200",
                    end: "+=400",
                    scrub: true,
                },
            });

            const tl0 = gsap.timeline({
                scrollTrigger: {
                    trigger: text,
                    start: "top center",
                    end: "+=150",
                    scrub: true,
                },
            });

            const tlN = gsap.timeline({
                scrollTrigger: {
                    trigger: text,
                    start: "top center+=200",
                    end: "+=0",
                    scrub: true,
                },
            });
            
            if(index === 0) {
                tl0.fromTo(
                    text,
                    { autoAlpha: 1 },
                    { autoAlpha: 0, duration: 0.5 },
                    "+=1"
                )}
            else if(index === texts.length - 1) {
                tlN.to(text, { autoAlpha: 1, duration: 0.5 });
            } else {
                tl.fromTo(
                    text,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, duration: 0.5 }
                ).to(
                    text,
                    { autoAlpha: 0, duration: 0.5 },
                    "+=1"
                );
            }
        });
    }, []);

    return (
        <div className="flex items-start justify-center bg-black gap-20 p-20 mb-30">
            <div
                ref={pinkBoxRef}
                className="rounded-2xl md:rounded-3xl lg:rounded-4xl bg-pink-400 w-[25vh] h-[25vh] flex items-center justify-center text-xl font-bold sticky-top"
            >
                I'm Sticky
            </div>

                <div className="xl:text-7xl md:text-3xl text-xl pt-10 space-y-[30vh] text-white" ref={textContainerRef}>
                    <div ref={addToRefs} className="p-10 opacity-0"> Text-1 </div>
                    <div ref={addToRefs} className="p-10 opacity-0"> Text-2 </div>
                    <div ref={addToRefs} className="p-10 opacity-0"> Text-3 </div>
                    <div ref={addToRefs} className="p-10 opacity-0"> Text-4 </div>
                </div>
        </div>
    );
};

export default ScrollTest;