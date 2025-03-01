import { BarChart2, Home, Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Home",
    icon: Home,
    color: "#10B981",
    href: "/",
  },
  {
    name: "Portfolio",
    icon: BarChart2,
    color: "#F59A9B",
    href: "/portfolio",
  },
];
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-50 ease-in-out shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 220 : 80 }}
    >
      <div className="h-full bg-white backdrop-blur-md p-4 flex flex-col border-r border-gray-200">
        {isSidebarOpen && (
          <div className="px-2 py-4">
            <img src="/icon.png" alt="" />
          </div>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors max-w-fit"
        >
          <Menu size={"24"} />
        </motion.button>

        <nav className="mt-6 md:mt-4 grow">
          {SIDEBAR_ITEMS.map((item, idx) => (
            <Link key={idx} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
