"use client"
import NavBarDashboard from '@/components/NavBarDashboard/NavBarDashboard';
import UserInfoCard from '@/components/UserInfoCard/UserInfoCard';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
  const [userData, setUserData] = useState();
  const router = useRouter()

  return (
    <div className="sticky top-0">
      <UserInfoCard/>
    </div>
  )
}

export default Dashboard;