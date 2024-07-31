"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./_components/Sidebar.jsx";
import MainBoard from "./_components/MainBoard";
import { instance } from "./axiosConfig.ts";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await instance.get("/authenticated");
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return router.push("/signin");
  }

  return (
    <div className="w-full max-h-screen flex relative">
      <Sidebar />
      <MainBoard />
    </div>
  );
};

export default Dashboard;
