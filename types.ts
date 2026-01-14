export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'web';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
  color: string;
}

export interface Skill {
  name: string;
  level: string;
  category: 'Frontend' | 'Backend' | 'Game Dev' | 'AI & Automation';
}