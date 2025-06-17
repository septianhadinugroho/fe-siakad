"use client"

import { useState } from "react"
import { StudentDashboard } from "@/components/dashboards/student-dashboard"
import { AdminDashboard } from "@/components/dashboards/admin-dashboard"
import { StakeholderDashboard } from "@/components/dashboards/stakeholder-dashboard"
import { LoginForm } from "@/components/auth/login-form"

export default function Home() {
  const [currentUser, setCurrentUser] = useState<{
    type: "student" | "admin" | "stakeholder"
    id: string
    name: string
  } | null>(null)

  const handleLogin = (userType: "student" | "admin" | "stakeholder", id: string, name: string) => {
    setCurrentUser({ type: userType, id, name })
  }

  const handleLogout = () => {
    setCurrentUser(null)
  }

  if (!currentUser) {
    return <LoginForm onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentUser.type === "student" && <StudentDashboard user={currentUser} onLogout={handleLogout} />}
      {currentUser.type === "admin" && <AdminDashboard user={currentUser} onLogout={handleLogout} />}
      {currentUser.type === "stakeholder" && <StakeholderDashboard user={currentUser} onLogout={handleLogout} />}
    </div>
  )
}
