import { Castle, Dices, HomeIcon, NotebookText } from "lucide-react";

export const sidebarMenu = [
  { href: "/", icon: <HomeIcon className="w-4 h-4"/>, label: "Home" },
  { href: "/best-casinos", icon: <Castle className="w-4 h-4"/>, label: "Best Casinos" },
  { href: "/bonuses/no-deposit-bonuses", icon: <Dices className="w-4 h-4"/>, label: "No Deposit Bonuses" },
  { href: "/blog1", icon: <Dices className="w-4 h-4"/>, label: "Real Money Bonuses" },
  { href: "/blog", icon: <NotebookText className="w-4 h-4"/>, label: "Blog" },
];