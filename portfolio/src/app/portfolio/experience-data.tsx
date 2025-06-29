import { StaticImageData } from 'next/image';
import juspayLogo from '@/assets/juspay.png';
import MicrosoftLogo from '@/assets/microsoft.png';
import ezt from '@/assets/ezt.png';

export type ExpCardType = {
    review: string;
    company: string;
    role: string;
    date: string;
    duration: string;
    logo: StaticImageData;
    techStack: string[];
    work: StaticImageData;
    responsibilities: string[];
};

export const expCards = [
    {
        review: "Madhur is excellent at his work. He is a an extremely fast learner and is always eager to pick up new skills and take charge for required tasks",
        company: "Juspay",
        role: "SDE Intern",
        date: "Jan 2025 - June 2025",
        duration: "6 Months",
        logo: juspayLogo,
        techStack: [
            "Redis", "Bitbucket", "Jenkins", "MySql", "Haskell"
        ],
        work: juspayLogo,
        responsibilities: [
            "Worked on benchmarking synchronous writes to Redis Cluster, improving consistency to 99.995% for critical writes",
            "Reduced Calls to Redis by 65% using a Unified Primary Key Across all tables, local caching per flow and batch preloading",
            "Contributed to Active-Active Euler Deployment by persisting Cell-Selector & RoutingId information across each Active Stack",
        ],
    },
    {
        review: "Madhur is excellent at his work. He is a an extremely fast learner and is always eager to pick up new skills and take charge for required tasks",
        company: "Microsoft",
        role: "SWE Intern",
        date: "June 2024 - July 2024",
        duration: "2 Months",
        logo: MicrosoftLogo,
        techStack: [
            "Kubernetes", "Rust", "Azure Kubernetes Services", "Kata Containers", "Azure VM", "Linux Kernel"
        ],
        work: ezt,
        responsibilities: [
            "Worked on Benchmarking and Enhancing Network Security in Kata Pods with an Attestible (EZT Tunnel) Approach",
            "Automated the deployment of a Zero-Trust Tunnel for all Network Packets between Kata Containers and the Host Machine",
            "Added Namespace Isolation, implemented a YAML Security Policy parser to apply custom policies, and Wireguard Encryption to the EZT Tunnel",
        ],
    }
]