
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: 'Classrooms' | 'Events' | 'Sports' | 'Activities';
  url: string;
  caption: string;
}

export interface StatItem {
  n: number;
  t: string;
  d: string;
}

export interface PageContent {
  general: {
    schoolName: string;
    schoolTagline: string;
    logoUrl: string;
    primaryColor: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    welcomeTagline: string;
    welcomeHeading: string;
    welcomeMessage: string;
    statsHeading: string;
    statsImage: string;
    statsItems: StatItem[];
  };
  about: {
    historyTitle: string;
    historyText: string;
    historyImage: string;
    vision: string;
    mission: string;
    values: string[];
    headTeacherName: string;
    headTeacherTitle: string;
    headTeacherMessage: string;
    headTeacherImage: string;
  };
  academics: {
    intro: string;
    kinderTitle: string;
    kinderDesc: string;
    kinderImage: string;
    primaryTitle: string;
    primaryDesc: string;
    primaryImage: string;
  };
  admissions: {
    requirements: string[];
    process: string[];
    ctaHeading: string;
    ctaText: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    mapUrl: string;
  };
}

export interface AppData {
  content: PageContent;
  news: NewsItem[];
  gallery: GalleryItem[];
}
