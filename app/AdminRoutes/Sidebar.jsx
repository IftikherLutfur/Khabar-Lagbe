// components/Shared/Sidebar.js
import { DashboardOutlined, HomeOutlined, UnorderedListOutlined, UserSwitchOutlined } from "@ant-design/icons";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <nav>
        <Link href="/dashboard" className="block py-2 hover:bg-gray-700 font-bold rounded"><DashboardOutlined/>Dashboard</Link>
        <Link href="/AdminRoutes/users" className="block py-2 hover:bg-gray-700 font-bold rounded"><UserSwitchOutlined/>Users</Link>
        <Link href="/dashboard/orders" className="block py-2 hover:bg-gray-700 font-bold rounded"><UnorderedListOutlined/>Orders</Link>
        <Link href="/" className="block py-2 hover:bg-gray-700 font-bold rounded"><HomeOutlined/>Home</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
