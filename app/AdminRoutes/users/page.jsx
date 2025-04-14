"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersFetch = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_WEB_URL || process.env.NEXT_PUBLIC_DEPLOY_URL}/api/get-user`);
        setUsers(res.data.users || []); // Ensure we don't get undefined errors
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    usersFetch();
  }, []);

  // **User Delete Function**
  const deleteUser = async (id) => {
    if (!id) return;
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (!isConfirmed) return;

    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_WEB_URL || process.env.NEXT_PUBLIC_DEPLOY_URL}/api/delete-user`, {
        params: { id },
      });

      if (res.status === 200) {
        toast.success("User deleted successfully");
        setUsers(users.filter((user) => user._id !== id));
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      toast.error("Error deleting user");
      console.error("Error deleting user:", error);
    }
  };

  // **User Type Update Function**
  const updateUserType = async (id, newType) => {
    if (!id || !newType) return;

    try {
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_WEB_URL || process.env.NEXT_PUBLIC_DEPLOY_URL}/api/get-user`, {
        id,
        type: newType,
      });

      if (res.status === 200) {
        toast.success(`User role changed to ${newType}`);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === id ? { ...user, type: newType } : user
          )
        );
      } else {
        toast.error("Failed to update user type");
      }
    } catch (error) {
      toast.error("Error updating user type");
      console.error("Error updating user type:", error);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-zinc-800 flex">
      <Sidebar />
      <div className="w-full max-w-4xl flex justify-center">
        <div className="relative overflow-x-auto rounded-lg shadow-md sm:rounded-lg mx-4">
          <h1 className="text-xl text-white text-center mb-4">User Management</h1>
          <table className="w-full rounded-md text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th className="px-6 py-4 font-semibold flex items-center gap-3 text-gray-900 dark:text-white">
                      {user.image && <img className="w-12 h-12 rounded-full" src={user.image} alt="User Avatar" />}
                      {user.name}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      <select
                        className="cursor-pointer text-blue-500 bg-transparent hover:underline outline-none"
                        value={user.type}
                        onChange={(e) => updateUserType(user._id, e.target.value)}
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="cursor-pointer text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Users;
