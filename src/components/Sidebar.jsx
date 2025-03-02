import { BarChart2, ChevronDown, Home, Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { memo } from "react";

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
      animate={{ width: isSidebarOpen ? 220 : 64 }}
    >
      <div className="h-full bg-white backdrop-blur-md py-6 px-2 flex flex-col border-r border-gray-200">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 cursor-pointer transition-colors max-w-fit"
        >
          {isSidebarOpen ? <img src="/icon.png" alt="" /> : <Menu size={20} />}
        </button>

        <nav className="mt-6 md:mt-4 grow px-2">
          {SIDEBAR_ITEMS.map((item, idx) => (
            <Link key={idx} to={item.href}>
              <motion.div className="flex items-center p-2 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors mb-2">
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            <span className="bg-green-700 p-2 rounded-full text-sm text-white">
              WI
            </span>
            <a href="#">
              <ChevronDown size={20} />
            </a>
          </div>
          {isSidebarOpen && (
            <div>
              <p className="text-sm text-end text-gray-800">CMP1Y</p>
              <span className="text-xs text-gray-500">
                Valid till Apr 19, 2025
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(Sidebar);
