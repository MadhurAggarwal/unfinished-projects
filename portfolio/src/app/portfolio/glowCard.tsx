"use client";
import React, { useRef } from 'react';
import styles from './glowCard.module.css';
import { ReactNode } from 'react';

const GlowCard = ({ children }: { children: ReactNode }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        card.style.setProperty('--start', `${angle + 60}`);
    };

    return (
        <div 
            ref={cardRef} 
            onMouseMove={handleMouseMove}
            className={`border border-[#1c1c21] bg-[#0e0e10] rounded-xl p-10 ${styles.card}`}
            >
                <div className={styles.glow}/>
                {children}
        </div>
    );
};

export default GlowCard;
