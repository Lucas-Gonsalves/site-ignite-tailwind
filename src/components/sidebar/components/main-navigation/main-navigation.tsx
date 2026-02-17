import {
  BarChartIcon,
  CheckSquareIcon,
  FlagIcon,
  HomeIcon,
  SquareStackIcon,
  UserIcon,
} from "lucide-react";

import { NavigationItem } from "../navigation-item";

export const MainNavigation = () => {
  return (
    <nav className="space-y-0.5">
      <NavigationItem title="Home" icon={HomeIcon} />
      <NavigationItem title="Dashboard" icon={BarChartIcon} />
      <NavigationItem title="Projects" icon={SquareStackIcon} />
      <NavigationItem title="Tasks" icon={CheckSquareIcon} />
      <NavigationItem title="Reporting" icon={FlagIcon} />
      <NavigationItem title="Users" icon={UserIcon} />
    </nav>
  );
};
