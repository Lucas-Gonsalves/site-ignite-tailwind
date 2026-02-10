import {
  BarChartIcon,
  CheckSquareIcon,
  FlagIcon,
  HomeIcon,
  SquareStackIcon,
  UserIcon,
} from "lucide-react";

import { NavItem } from "../nav-item";

export const MainNavigation = () => {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={HomeIcon} />
      <NavItem title="Dashboard" icon={BarChartIcon} />
      <NavItem title="Projects" icon={SquareStackIcon} />
      <NavItem title="Tasks" icon={CheckSquareIcon} />
      <NavItem title="Reporting" icon={FlagIcon} />
      <NavItem title="Users" icon={UserIcon} />
    </nav>
  );
};
