"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Shield, Users } from "lucide-react"

interface LoginFormProps {
  onLogin: (userType: "student" | "admin" | "stakeholder", id: string, name: string) => void
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [userType, setUserType] = useState<"student" | "admin" | "stakeholder">("student")
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Dummy authentication
    const names = {
      student: "Ahmad Rizki",
      admin: "Dr. Sarah Admin",
      stakeholder: "Prof. Budi Santoso",
    }

    onLogin(userType, id, names[userType])
  }

  const getUserTypeIcon = () => {
    switch (userType) {
      case "student":
        return <GraduationCap className="h-5 w-5" />
      case "admin":
        return <Shield className="h-5 w-5" />
      case "stakeholder":
        return <Users className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <GraduationCap className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold">SIAKAD Login</CardTitle>
          <CardDescription>Sistem Informasi Akademik Universitas</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userType">Tipe Pengguna</Label>
              <Select
                value={userType}
                onValueChange={(value: "student" | "admin" | "stakeholder") => setUserType(value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Mahasiswa
                    </div>
                  </SelectItem>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Admin
                    </div>
                  </SelectItem>
                  <SelectItem value="stakeholder">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Pemangku Kebijakan
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="id">{userType === "student" ? "NIM" : "NIP"}</Label>
              <Input
                id="id"
                type="text"
                placeholder={userType === "student" ? "Masukkan NIM" : "Masukkan NIP"}
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              {getUserTypeIcon()}
              Login sebagai{" "}
              {userType === "student" ? "Mahasiswa" : userType === "admin" ? "Admin" : "Pemangku Kebijakan"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Demo Credentials:</p>
            <p>ID: any value | Password: any value</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
