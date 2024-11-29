import type { Icons } from './icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { cn } from '@/lib/utils';
import { icons } from './icons';

interface IconProps {
  icon: Icons;
  className?: string;
}

export function Icon(props: IconProps): React.JSX.Element {
  const { icon, className } = props;

  return <FontAwesomeIcon className={cn('fa-sharp h-4 w-4', className)} icon={icons[icon]} />;
}
