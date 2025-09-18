export type Level = 'Expert' | 'Advanced' | 'Intermediate';

export type Category =
  | 'backend'
  | 'frontend'
  | 'library'
  | 'database'
  | 'devops'
  | 'tools';

export type StackItemProps = {
  name: string;
  icon: string;
  level: Level;
  years?: number;
  hasStar?: boolean;
  category: Category;
  className?: string;
};
