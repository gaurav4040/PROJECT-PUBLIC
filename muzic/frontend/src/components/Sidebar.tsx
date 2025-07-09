import { NavLink } from "react-router-dom";
import { Home, Search, Library } from "lucide-react"; // lucide-react for icons

const Sidebar = () => {
  const navItems = [
    { to: "/", label: "Home", icon: <Home size={20} /> },
    { to: "/search", label: "Search", icon: <Search size={20} /> },
    { to: "/library", label: "Library", icon: <Library size={20} /> },
  ];

  return (
    <div className="w-64 h-full bg-black text-white flex flex-col p-4 space-y-6">
      <div className="text-2xl font-bold mb-6">MyMusic</div>
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center space-x-3 px-3 py-2 rounded hover:bg-zinc-800 transition ${
              isActive ? "bg-zinc-900" : ""
            }`
          }
        >
          {icon}
          <span>{label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
