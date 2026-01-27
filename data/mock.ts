import { Event, Faq, Sponsor, TeamMember } from "@/types";

export const EVENTS: Event[] = [
    {
        id: '1',
        slug: 'tattvabodha',
        title: 'Tattvabodha',
        category: 'Flagship',
        shortDescription: 'Idea Conclave: Churning of ideas and social transformation.',
        fullDescription: 'Tattvabodha is the intellectual soul of Manthan. It is an idea conclave that brings together visionary leaders, social innovators, and students to discuss and debate the most pressing challenges of our time.',
        date: 'February 12, 2026',
        time: '10:00 AM',
        venue: 'Convention Centre',
        image: 'https://placehold.co/800x600/0a0a0a/ECB25C?text=Tattvabodha',
        rules: [
            'Pre-registration is mandatory.',
            'Formally dressed is encouraged.',
            'The session will be followed by a Q&A round.'
        ],
        prizePool: 'High Credibility',
        contactPerson: {
            name: 'Academic Team',
            phone: '+91 91234 56789'
        },
        registrationLink: '#'
    },
    {
        id: '2',
        slug: 'consultiss',
        title: 'ConsultISS',
        category: 'Flagship',
        shortDescription: 'National Case Challenge: Solve real-world management problems.',
        fullDescription: 'ConsultISS is a high-rigor national case study competition where teams from top B-Schools battle it out to provide the most innovative and viable solutions to real-world business and social problems.',
        date: 'February 12, 2026',
        time: '11:00 AM',
        venue: 'Auditorium',
        image: 'https://placehold.co/800x600/0a0a0a/00F0FF?text=ConsultISS',
        rules: [
            'Teams of 3 members.',
            'Solutions must be submitted in PDF format.',
            'Plagiarism will lead to disqualification.'
        ],
        prizePool: '₹ 50,000',
        contactPerson: {
            name: 'Management Head',
            phone: '+91 55555 44444'
        },
        registrationLink: '#'
    },
    {
        id: '3',
        slug: 'dakshya',
        title: 'Dakshya',
        category: 'Management',
        shortDescription: 'AI & Analytics Challenge: Decoding data for impact.',
        fullDescription: 'Dakshya tests your analytical and data-driven decision-making skills in a high-pressure environment. Use AI and data analytics to solve complex development problems.',
        date: 'February 13, 2026',
        time: '11:00 AM',
        venue: 'Tech Corridor',
        image: 'https://placehold.co/800x600/0a0a0a/FF003C?text=Dakshya',
        rules: [
            'Laptops are required.',
            'Basic knowledge of analytics tools is mandatory.',
            'Open to all postgraduate students.'
        ],
        prizePool: '₹ 30,000',
        contactPerson: {
            name: 'Analytical Team',
            phone: '+91 77777 66666'
        },
        registrationLink: '#'
    },
    {
        id: '4',
        slug: 'srijan',
        title: 'Srijan',
        category: 'Management',
        shortDescription: 'HR Strategy Challenge: Building and managing high-impact teams.',
        fullDescription: 'Srijan is TISS Mumbai’s premier HR competition, challenging participants on their people management skills, strategic thinking, and ethical leadership.',
        date: 'February 13, 2026',
        time: '2:00 PM',
        venue: 'Seminar Hall',
        image: 'https://placehold.co/800x600/0a0a0a/EDEDED?text=Srijan',
        rules: [
            'Role-play rounds involved.',
            'Team size: 2 members.',
            'Judgment based on ethics and creativity.'
        ],
        prizePool: '₹ 25,000',
        contactPerson: {
            name: 'Cultural Secretary',
            phone: '+91 77777 66666'
        },
        registrationLink: '#'
    }
];

export const SPONSORS: Sponsor[] = [
    {
        id: '1',
        name: 'TechCorp',
        tier: 'Platinum',
        logo: 'https://placehold.co/400x200?text=TechCorp'
    },
    {
        id: '2',
        name: 'BevCo',
        tier: 'Gold',
        logo: 'https://placehold.co/400x200?text=BevCo'
    },
    {
        id: '3',
        name: 'EduMate',
        tier: 'Silver',
        logo: 'https://placehold.co/400x200?text=EduMate'
    }
];

export const FAQS: Faq[] = [
    {
        id: '1',
        question: 'How do I register for events?',
        answer: 'You can register by clicking the "Register" button on the event details page. It will redirect you to a Google Form.'
    },
    {
        id: '2',
        question: 'Is accommodation provided?',
        answer: 'Yes, limited accommodation is available for outstation participants. Please contact the hospitality team.'
    },
    {
        id: '3',
        question: 'Are there entry fees?',
        answer: 'Entry to the fest grounds is free. Specific events may have a registration fee.'
    }
];

export const TEAM: TeamMember[] = [
    {
        id: "1",
        name: "Arjun Verma",
        role: "Chairperson",
        image: "https://placehold.co/300x300?text=Arjun",
        phone: "+91 99999 88888",
        email: "chairperson@manthan-tiss.edu"
    },
    {
        id: "2",
        name: "Sanya Malhotra",
        role: "Cultural Secretary",
        image: "https://placehold.co/300x300?text=Sanya",
        phone: "+91 77777 66666",
        email: "culture@manthan-tiss.edu"
    },
    {
        id: "3",
        name: "Rohan Das",
        role: "Management Head",
        image: "https://placehold.co/300x300?text=Rohan",
        phone: "+91 55555 44444",
        email: "management@manthan-tiss.edu"
    }
];

export const GUESTS = [
    { id: '1', name: 'Arundhati Bhattacharya', year: 'Prev', role: 'Chairperson & CEO, Salesforce India' },
    { id: '2', name: 'Usha Thorat', year: 'Prev', role: 'Former Deputy Governor, RBI' },
    { id: '3', name: 'Kiran Rao', year: 'Prev', role: 'Filmmaker' },
    { id: '4', name: 'Varun Grover', year: 'Prev', role: 'Writer & Comedian' },
    { id: '5', name: 'Shakti Mohan', year: 'Prev', role: 'Dancer' },
    { id: '6', name: 'Tahira Kashyap', year: 'Prev', role: 'Writer' },
    { id: '7', name: 'Anand Neelakantan', year: 'Prev', role: 'Author' },
    { id: '8', name: 'Rajat Chauhan', year: 'Prev', role: 'Stand-up Comedian' },
];
