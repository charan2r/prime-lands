import {
  Menu,
  Bell,
  User,
  Shield,
  CreditCard,
  Database,
  Settings,
  Mail,
  Eye,
  EyeOff,
  Save,
  Camera,
  Smartphone,
  Globe,
  X,
  Home,
  Users,
  BarChart3,
  HelpCircle,
} from "lucide-react";

const AgentSidebar = ({
  isOpen,
  onClose,
  activeItem = "Dashboard",
  onItemClick = () => {},
}) => {
  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Properties", path: "/agencies" },
    { icon: Users, label: "Clients", path: "/users" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-semibold text-gray-800">Prime Lands</h1>
          <button
            onClick={onClose}
            className="lg:hidden hover:bg-gray-100 p-1 rounded"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;

            return (
              <button
                key={index}
                onClick={() => onItemClick(item)}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors hover:bg-gray-100 ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                    : "text-gray-700"
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default AgentSidebar;
