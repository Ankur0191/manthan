export interface Event {
    id: string;
    slug: string;
    title: string;
    category: 'Cultural' | 'Management' | 'Sports' | 'Flagship';
    shortDescription: string;
    fullDescription: string;
    date: string;
    time: string;
    venue: string;
    image: string;
    rules: string[];
    prizePool: string;
    contactPerson: {
        name: string;
        phone: string;
    };
    registrationLink: string;
}

export interface Sponsor {
    id: string;
    name: string;
    logo: string;
    tier: 'Platinum' | 'Gold' | 'Silver' | 'Associate';
    website?: string;
}

export interface Faq {
    id: string;
    question: string;
    answer: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    phone?: string;
    email?: string;
}
