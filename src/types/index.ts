// Type definitions for the portfolio site

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  link: string;
  github: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  link: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}