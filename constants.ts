
import { AppData } from './types';

export const INITIAL_DATA: AppData = {
  content: {
    general: {
      schoolName: "ELYON",
      schoolTagline: "Kindergarten & Primary",
      logoUrl: "https://i.ibb.co/LzVPrYt/elyon-logo.jpg",
      primaryColor: "#1a4d2e"
    },
    home: {
      heroTitle: "Nurturing Excellence, Inspiring Future Leaders",
      heroSubtitle: "Elyon Kindergarten and Primary School provides a holistic education that balances academic excellence with character development.",
      heroImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1920",
      welcomeTagline: "Welcome to Elyon",
      welcomeHeading: "Building a Foundation for a Brighter Future",
      welcomeMessage: "Welcome to Elyon Kindergarten and Primary School, Kampala. We are dedicated to providing a safe, nurturing, and stimulating environment where children can thrive and discover their potential.",
      statsHeading: "Why Choose Elyon School?",
      statsImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      statsItems: [
        { n: 1, t: "Small Class Sizes", d: "Personalized attention for every learner." },
        { n: 2, t: "Modern Facilities", d: "Equipped labs, library, and play areas." },
        { n: 3, t: "Safe Environment", d: "Highly secure and child-friendly campus." }
      ]
    },
    about: {
      historyTitle: "Our Story",
      historyText: "Founded in the heart of Kampala, Elyon began with a vision to revolutionize early childhood and primary education in Uganda. Over the years, we have grown from a small nursery into a full-fledged primary school known for academic rigor and moral uprightness.",
      historyImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
      vision: "To be a leading center of educational excellence, producing God-fearing, disciplined and intellectually competitive citizens.",
      mission: "To provide quality holistic education that empowers children with knowledge, skills and values for personal and national development.",
      values: ["Discipline", "Excellence", "Integrity", "Godliness", "Creativity"],
      headTeacherName: "Mrs. Sarah Namugga",
      headTeacherTitle: "Head Teacher",
      headTeacherMessage: "At Elyon, we believe every child is a unique gift. Our role is to polish these gems so they can shine in the world. We invite you to be part of our family.",
      headTeacherImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    academics: {
      intro: "We follow the National Curriculum of Uganda, enhanced with international best practices to produce well-rounded individuals.",
      kinderTitle: "Kindergarten Section",
      kinderDesc: "Our nursery and pre-primary program focuses on 'Learning through Play'. We nurture cognitive, social, and emotional growth in a warm, loving environment.",
      kinderImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
      primaryTitle: "Primary Section",
      primaryDesc: "From P.1 to P.7, we focus on rigorous academic training and critical thinking. Our students are prepared for the Primary Leaving Examinations (PLE) with a track record of excellence.",
      primaryImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    },
    admissions: {
      requirements: [
        "Fully filled admission form",
        "Photocopy of birth certificate",
        "Previous school report (for primary section)",
        "Passport size photos (3 for child, 2 for each parent)",
        "Immunization card (for kindergarten)"
      ],
      process: [
        "Pick up the admission forms from the school office.",
        "Submit completed forms with all required attachments.",
        "Attend the interview/placement assessment.",
        "Receive the admission letter and fee structure.",
        "Payment of commitment fees."
      ],
      ctaHeading: "Need more information?",
      ctaText: "Fees structure and specific class vacancies are available at the school bursar's office. You can also contact us for a detailed prospectus."
    },
    contact: {
      address: "Plot 45, Mawanda Road, Kampala, Uganda",
      phone: "+256 700 000 000 / +256 770 000 000",
      email: "info@elyonschool.ac.ug",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.022312344793!2d32.5701!3d0.3201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8c340f6e1f%3A0x6e8a0022d43a6d7!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1620000000000!5m2!1sen!2sug"
    }
  },
  news: [
    {
      id: "1",
      title: "Term 1 Enrollment Now Open",
      date: "2024-05-15",
      excerpt: "Join the Elyon family for the upcoming term. Registration is ongoing for all classes.",
      content: "We are excited to welcome new students for the upcoming term. Limited vacancies are available in both the Kindergarten and Primary sections. Visit our campus for a tour.",
      image: "https://images.unsplash.com/photo-1544717297-fa15c3ec0202?auto=format&fit=crop&q=80&w=800"
    }
  ],
  gallery: [
    { id: "g1", category: "Classrooms", url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800", caption: "Main Hall" },
    { id: "g2", category: "Activities", url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", caption: "Music Class" }
  ]
};
