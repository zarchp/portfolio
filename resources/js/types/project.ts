export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  repoUrl?: string | null;
  liveUrl?: string | null;
  status?: 'live' | 'offline' | 'deprecated';
  tags?: string[];
  keyFeatures?: string[];
  deliverables?: string[];
  techStacks: string[];
};
