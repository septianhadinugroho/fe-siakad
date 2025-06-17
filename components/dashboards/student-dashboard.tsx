"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { User, BookOpen, CreditCard, Bell, LogOut, Calendar, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

interface StudentDashboardProps {
  user: { type: string; id: string; name: string }
  onLogout: () => void
}

export function StudentDashboard({ user, onLogout }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Dummy data
  const gradeData = [
    { semester: "Sem 1", ipk: 3.2 },
    { semester: "Sem 2", ipk: 3.4 },
    { semester: "Sem 3", ipk: 3.6 },
    { semester: "Sem 4", ipk: 3.5 },
    { semester: "Sem 5", ipk: 3.7 },
    { semester: "Sem 6", ipk: 3.8 },
  ]

  const creditData = [
    { semester: "Sem 1", sks: 20 },
    { semester: "Sem 2", sks: 22 },
    { semester: "Sem 3", sks: 21 },
    { semester: "Sem 4", sks: 20 },
    { semester: "Sem 5", sks: 18 },
    { semester: "Sem 6", sks: 16 },
  ]

  const currentCourses = [
    { code: "IF301", name: "Algoritma dan Struktur Data", sks: 3, grade: "A" },
    { code: "IF302", name: "Basis Data", sks: 3, grade: "B+" },
    { code: "IF303", name: "Pemrograman Web", sks: 3, grade: "A-" },
    { code: "IF304", name: "Jaringan Komputer", sks: 3, grade: "B" },
    { code: "IF305", name: "Sistem Operasi", sks: 3, grade: "A" },
  ]

  const financialData = [
    { type: "SPP Semester 7", amount: 4500000, status: "Belum Bayar", dueDate: "2024-01-15" },
    { type: "Praktikum Lab", amount: 500000, status: "Lunas", dueDate: "2023-12-01" },
    { type: "Wisuda", amount: 2000000, status: "Belum Bayar", dueDate: "2024-06-01" },
  ]

  const notifications = [
    { id: 1, title: "Pengumuman UTS", message: "Jadwal UTS telah dirilis", time: "2 jam lalu", type: "info" },
    {
      id: 2,
      title: "Pembayaran SPP",
      message: "Batas pembayaran SPP 15 Januari 2024",
      time: "1 hari lalu",
      type: "warning",
    },
    {
      id: 3,
      title: "Nilai Keluar",
      message: "Nilai mata kuliah Basis Data telah keluar",
      time: "3 hari lalu",
      type: "success",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">Dashboard Mahasiswa</h1>
                  <p className="text-sm text-gray-500">Selamat datang, {user.name}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                NIM: {user.id || "2021001001"}
              </Badge>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="academic">Akademik</TabsTrigger>
            <TabsTrigger value="financial">Keuangan</TabsTrigger>
            <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">IPK Kumulatif</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">3.78</div>
                  <p className="text-xs text-muted-foreground">+0.08 dari semester lalu</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total SKS</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">120</div>
                  <p className="text-xs text-muted-foreground">dari 144 SKS</p>
                  <Progress value={83} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Semester</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">Semester Aktif</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Status Keuangan</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">Belum Lunas</div>
                  <p className="text-xs text-muted-foreground">SPP Semester 7</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Perkembangan IPK</CardTitle>
                  <CardDescription>Grafik IPK per semester</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={gradeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="semester" />
                      <YAxis domain={[0, 4]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="ipk" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Beban SKS per Semester</CardTitle>
                  <CardDescription>Jumlah SKS yang diambil</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={creditData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="semester" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sks" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="academic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>KRS Semester Aktif</CardTitle>
                  <CardDescription>Mata kuliah yang sedang diambil</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentCourses.map((course, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{course.code}</p>
                          <p className="text-sm text-gray-600">{course.name}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">{course.sks} SKS</Badge>
                          <p className="text-sm mt-1">Grade: {course.grade}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transkrip Nilai</CardTitle>
                  <CardDescription>Ringkasan prestasi akademik</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">IPK Kumulatif</span>
                      <span className="text-xl font-bold text-blue-600">3.78</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Total SKS Lulus</span>
                      <span className="text-xl font-bold text-green-600">120</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Predikat</span>
                      <span className="text-xl font-bold text-purple-600">Cum Laude</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Status Keuangan</CardTitle>
                <CardDescription>Informasi tagihan dan pembayaran</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {financialData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.type}</p>
                        <p className="text-sm text-gray-600">Jatuh tempo: {item.dueDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">Rp {item.amount.toLocaleString("id-ID")}</p>
                        <Badge
                          variant={item.status === "Lunas" ? "default" : "destructive"}
                          className={item.status === "Lunas" ? "bg-green-100 text-green-800" : ""}
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notifikasi Terbaru</CardTitle>
                <CardDescription>Pengumuman dan pemberitahuan penting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="flex-shrink-0">
                        {notif.type === "info" && <Bell className="h-5 w-5 text-blue-500" />}
                        {notif.type === "warning" && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                        {notif.type === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{notif.title}</p>
                        <p className="text-sm text-gray-600">{notif.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Profile</CardTitle>
                <CardDescription>Data pribadi dan akademik</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Nama Lengkap</label>
                      <p className="mt-1 text-sm text-gray-900">{user.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">NIM</label>
                      <p className="mt-1 text-sm text-gray-900">{user.id || "2021001001"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Program Studi</label>
                      <p className="mt-1 text-sm text-gray-900">Teknik Informatika</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Fakultas</label>
                      <p className="mt-1 text-sm text-gray-900">Fakultas Teknik</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Angkatan</label>
                      <p className="mt-1 text-sm text-gray-900">2021</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Status</label>
                      <p className="mt-1 text-sm text-gray-900">Aktif</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Dosen Wali</label>
                      <p className="mt-1 text-sm text-gray-900">Dr. Ahmad Fauzi, M.Kom</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <p className="mt-1 text-sm text-gray-900">ahmad.rizki@student.univ.ac.id</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
