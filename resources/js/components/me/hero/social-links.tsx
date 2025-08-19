import { profile } from '@/data/profile';
import { IconLink } from './icon-link';

export function SocialLinks() {
  return (
    <div className="flex gap-3">
      {profile.socials.map(({ href, label, icon: Icon }) => (
        <IconLink
          key={label}
          href={href}
          label={label}
        >
          <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-background md:size-6" />
        </IconLink>
      ))}
    </div>
  );
}
