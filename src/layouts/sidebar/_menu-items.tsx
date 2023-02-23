import routes from '@/config/routes';
import { HomeIcon } from '@/components/icons/home';
import { FarmIcon } from '@/components/icons/farm';

export const menuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: routes.home,
  },
  {
    name: 'Tutorial',
    icon: <FarmIcon />,
    href: routes.tutorial,
  },
  // その他の例
  // {
  //   name: 'Parent',
  //   icon: <XxxIcon />,
  //   href: routes.xxxxx,
  //   dropdownItems: [
  //     {
  //       name: 'Child 1',
  //       href: routes.child1,
  //     },
  //     {
  //       name: 'Child 2',
  //       href: routes.child2,
  //     },
  //     {
  //       name: 'Child 3',
  //       href: routes.child3,
  //     },
  //   ],
  // },
];
