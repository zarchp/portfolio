import { profile } from '@/data/profile';
import { IconLink } from './icon-link';

interface SocialLinksProps {
  iconSize?: string;
  gap?: string;
  className?: string;
}

export function SocialLinks({
  iconSize = 'size-5 md:size-6',
  gap = 'gap-3',
  className = '',
}: SocialLinksProps) {
  return (
    <div className={`flex ${gap} ${className}`}>
      {profile.socials.map(({ href, label, icon: Icon }) => (
        <IconLink
          key={label}
          href={href}
          label={label}
        >
          <Icon
            className={`${iconSize} text-muted-foreground transition-colors group-hover:animate-wiggle group-hover:text-brand`}
          />
        </IconLink>
      ))}
    </div>
  );
}
