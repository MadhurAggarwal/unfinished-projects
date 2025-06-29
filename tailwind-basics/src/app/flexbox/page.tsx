import React, { ReactNode } from 'react';

const sectionList = [
    { id: 'section-1', label: 'No Flex' },
    { id: 'section-2', label: 'Simple Flex' },
    { id: 'section-3', label: 'Flex-wrap' },
];

const BoxItem = ({ children }: {children: ReactNode}) => {
    return (
        <div className="h-3/11 aspect-square bg-rose-400 text-slate-100 font-bold border-[10px] border-rose-600 rounded-lg flex items-center justify-center">
            {children}
        </div>
    );
}

const Boxes = ({ className = "" }) => {
    return (
        <div className={`w-4/5 h-4/5 p-2 mx-auto border-[10px] border-slate-900 overflow-auto ${className}`}>
            {[...Array(10).keys()].map((i) => (
                <BoxItem key={i}> Item {i} </BoxItem>
            ))}
        </div>
    );
}

const Sidebar = () => (
    <div className="w-1/5 m-1 p-4 rounded-2xl shadow-md bg-white font-semibold flex flex-col gap-2">
        <h1 className="font-bold text-rose-600">Flex Contents</h1>
        {sectionList.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="hover:underline">
                {section.label}
            </a>
        ))}
    </div>
);

const Section = ({ children, id }: { children: ReactNode, id: string}) => (
    <div className='snap-start' id={id}>
        <div className="h-screen flex flex-col justify-center items-center">
            {children}
        </div>
        <hr className='text-slate-900 w-full'/>
    </div>
);

const Flexbox = () => {
    const isSidebarVisible = true;
    return ( 
        <div className='h-screen flex bg-slate-100 text-slate-900 font-roboto text-xl'>
            
            {isSidebarVisible && <Sidebar />}

            <div className='overflow-y-scroll snap-y snap-mandatory scroll-smooth p-2'>
                <Section id="section-1">
                    <p>This is without any flex</p>
                    <Boxes />
                    <p>(1 of 10)</p>
                </Section>
                
                <Section id='section-2'>
                    <p>This is flex (flex-row, justify-start are by default) </p>
                    <Boxes className='flex'/>
                    <p>(2 of 10)</p>
                </Section>

                <Section id='section-3'>
                    <p>This is (flex flex-wrap) (flex-row, justify-start default)</p>
                    <Boxes className='flex flex-wrap'/>
                    <p>(3 of 10)</p>
                </Section>

                <Section id='section-3'>
                    <p>This is (flex flex-wrap) (flex-row, justify-start default)</p>
                    <Boxes className='flex flex-col'/>
                    <p>(3 of 10)</p>
                </Section>
            </div>
        </div>
    );
}
 
export default Flexbox;