export interface SkillItem {
  name: string;
  category: 'Programming Languages' | 'Web Development' | 'AI / Machine Learning' | 'Databases' | 'Development Tools';
  description: string;
  iconName: string;
  accentColor: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  detailedDescription?: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  category: 'AI / Machine Learning' | 'Web Development' | 'Software Engineering' | 'Experiment';
  featured?: boolean;
  date?: string;
  status: 'In Development' | 'Completed' | 'Research Prototype';
  keyHighlights?: string[];
  screenshots?: string[];
}

export interface Hackathon {
  id: string;
  name: string;
  organization: string;
  role: string;
  date?: string;
  description: string;
  technologies?: string[];
  achievement?: string;
  certificateUrl?: string;
  certificateId?: string;
  eventImage?: string;
  externalLink?: string;
  status: 'Completed' | 'Participated' | 'Upcoming';
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date?: string;
  category: string;
  description: string;
  credentialUrl?: string;
  certificateImage?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
  location: string;
  status: string;
  summary: string;
  focusAreas: string[];
  cgpa?: string;
  graduationYear?: string;
}

export interface SocialProfile {
  name: string;
  handle: string;
  url: string;
  category: string;
  description: string;
  accentColor: string;
  badge?: string;
}

export interface ExploringTopic {
  title: string;
  description: string;
  badge: string;
  focus: string[];
}

export interface PersonalInfo {
  fullName: string;
  displayName: string;
  title: string;
  currentEducation: string;
  year: string;
  college: string;
  careerGoal: string;
  tagline: string;
  heroDescription: string;
  aboutBio: string[];
  currentlyExploring: ExploringTopic[];
  email: string;
  phone?: string;
  phoneRaw?: string;
  location: string;
  statusNotice: string;
  resumeFileName: string;
  profileImagePath: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  program?: string;
  certificateType?: string;
  certificateNo?: string;
  imagePath: string;
  verificationUrl?: string;
  downloadFileName: string;
  skillsCovered: string[];
}
