// components/Shared/Sidebar.js
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-[#0b183d] text-white p-5">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <nav>
        <Link href="/dashboard" className="block py-2 hover:bg-gray-700 rounded">Dashboard</Link>
        <Link href="/AdminRoutes/users" className="block py-2 hover:bg-gray-700 rounded">Users</Link>
        <Link href="/dashboard/orders" className="block py-2 hover:bg-gray-700 rounded">Orders</Link>
        <Link href="/" className="block py-2 hover:bg-gray-700 rounded">Home</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
