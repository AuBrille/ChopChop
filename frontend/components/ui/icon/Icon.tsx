import type { Icons } from './icons';
import type { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { cn } from '@/lib/utils';
import { icons } from './icons';

interface IconProps {
  icon: Icons;
  size?: SizeProp;
  className?: string;
}

export function Icon(props: IconProps): React.JSX.Element {
  const { icon, className, size } = props;

  return <FontAwesomeIcon size={size} className={cn('fa-sharp', className)} icon={icons[icon]} />;
}
