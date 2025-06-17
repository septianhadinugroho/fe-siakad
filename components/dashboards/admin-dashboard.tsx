"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Users,
  BookOpen,
  CreditCard,
  Download,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

interface AdminDashboardProps {
  user: { type: string; id: string; name: string }
  onLogout: () => void
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Dummy data
  const studentStats = [
    { faculty: "Teknik", total: 1250, active: 1180, graduate: 70 },
    { faculty: "Ekonomi", total: 980, active: 920, graduate: 60 },
    { faculty: "Hukum", total: 750, active: 710, graduate: 40 },
    { faculty: "Kedokteran", total: 650, active: 630, graduate: 20 },
  ]

  const enrollmentData = [
    { month: "Jan", students: 120 },
    { month: "Feb", students: 150 },
    { month: "Mar", students: 180 },
    { month: "Apr", students: 200 },
    { month: "May", students: 170 },
    { month: "Jun", students: 190 },
  ]

  const paymentStatus = [
    { name: "Lunas", value: 2800, color: "#10b981" },
    { name: "Belum Bayar", value: 630, color: "#ef4444" },
    { name: "Cicilan", value: 200, color: "#f59e0b" },
  ]

  const recentStudents = [
    { nim: "2024001001", name: "Andi Pratama", faculty: "Teknik", status: "Aktif", payment: "Lunas" },
    { nim: "2024001002", name: "Sari Dewi", faculty: "Ekonomi", status: "Aktif", payment: "Belum Bayar" },
    { nim: "2024001003", name: "Budi Santoso", faculty: "Hukum", status: "Cuti", payment: "Lunas" },
    { nim: "2024001004", name: "Maya Sari", faculty: "Kedokteran", status: "Aktif", payment: "Cicilan" },
  ]

  const courses = [
    { code: "IF301", name: "Algoritma dan Struktur Data", credits: 3, students: 45, lecturer: "Dr. Ahmad" },
    { code: "EK201", name: "Mikroekonomi", credits: 3, students: 60, lecturer: "Prof. Sari" },
    { code: "HK101", name: "Pengantar Hukum", credits: 2, students: 80, lecturer: "Dr. Budi" },
    { code: "FK401", name: "Anatomi", credits: 4, students: 35, lecturer: "Prof. Maya" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">Dashboard Admin</h1>
                  <p className="text-sm text-gray-500">Selamat datang, {user.name}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-red-600 border-red-200">
                NIP: {user.id || "198501012010011001"}
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
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Mahasiswa</TabsTrigger>
            <TabsTrigger value="academic">Akademik</TabsTrigger>
            <TabsTrigger value="financial">Keuangan</TabsTrigger>
            <TabsTrigger value="reports">Laporan</TabsTrigger>
            <TabsTrigger value="settings">Pengaturan</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Mahasiswa</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">3,630</div>
                  <p className="text-xs text-muted-foreground">+180 dari bulan lalu</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Mata Kuliah</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">245</div>
                  <p className="text-xs text-muted-foreground">Semester aktif</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pembayaran Lunas</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">77%</div>
                  <p className="text-xs text-muted-foreground">2,800 dari 3,630 mahasiswa</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Fakultas</CardTitle>
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">4</div>
                  <p className="text-xs text-muted-foreground">Fakultas aktif</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Statistik Mahasiswa per Fakultas</CardTitle>
                  <CardDescription>Jumlah mahasiswa aktif dan lulusan</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={studentStats}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="faculty" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="active" fill="#3b82f6" name="Aktif" />
                      <Bar dataKey="graduate" fill="#10b981" name="Lulusan" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status Pembayaran</CardTitle>
                  <CardDescription>Distribusi status pembayaran mahasiswa</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={paymentStatus}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {paymentStatus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Pendaftaran Mahasiswa Baru</CardTitle>
                <CardDescription>Tren pendaftaran 6 bulan terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="students" stroke="#8b5cf6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Manajemen Data Mahasiswa</CardTitle>
                    <CardDescription>Kelola data mahasiswa dan status akademik</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Mahasiswa
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2 mb-4">
                  <div className="flex-1">
                    <Input placeholder="Cari mahasiswa..." className="w-full" />
                  </div>
                  <Button variant="outline">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {recentStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-sm text-gray-600">NIM: {student.nim}</p>
                          </div>
                          <Badge variant="outline">{student.faculty}</Badge>
                          <Badge variant={student.status === "Aktif" ? "default" : "secondary"}>{student.status}</Badge>
                          <Badge variant={student.payment === "Lunas" ? "default" : "destructive"}>
                            {student.payment}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academic" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Manajemen Data Akademik</CardTitle>
                    <CardDescription>Kelola mata kuliah dan jadwal perkuliahan</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Mata Kuliah
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{course.name}</p>
                            <p className="text-sm text-gray-600">Kode: {course.code}</p>
                          </div>
                          <Badge variant="outline">{course.credits} SKS</Badge>
                          <div className="text-sm text-gray-600">
                            <p>{course.students} mahasiswa</p>
                            <p>Dosen: {course.lecturer}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Manajemen Keuangan</CardTitle>
                <CardDescription>Monitor pembayaran dan tagihan mahasiswa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-medium text-green-800">Total Pemasukan</h3>
                    <p className="text-2xl font-bold text-green-600">Rp 18.2M</p>
                    <p className="text-sm text-green-600">Bulan ini</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h3 className="font-medium text-red-800">Tunggakan</h3>
                    <p className="text-2xl font-bold text-red-600">Rp 2.8M</p>
                    <p className="text-sm text-red-600">630 mahasiswa</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-blue-800">Rata-rata Pembayaran</h3>
                    <p className="text-2xl font-bold text-blue-600">Rp 5.2M</p>
                    <p className="text-sm text-blue-600">Per mahasiswa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Export Data & Laporan</CardTitle>
                    <CardDescription>Unduh laporan dalam berbagai format</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    <span>Data Mahasiswa</span>
                    <span className="text-xs text-gray-500">Excel/PDF</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    <span>Laporan Keuangan</span>
                    <span className="text-xs text-gray-500">Excel/PDF</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    <span>Data Akademik</span>
                    <span className="text-xs text-gray-500">Excel/PDF</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    <span>Statistik Lengkap</span>
                    <span className="text-xs text-gray-500">Excel/PDF</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Manajemen Hak Akses</CardTitle>
                <CardDescription>Kelola hak akses pengguna sistem</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Administrator</h3>
                    <p className="text-sm text-gray-600 mb-3">Akses penuh ke semua fitur sistem</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Kelola Pengguna
                      </Button>
                      <Button variant="outline" size="sm">
                        Atur Permissions
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Dosen</h3>
                    <p className="text-sm text-gray-600 mb-3">Akses ke data akademik dan nilai mahasiswa</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Kelola Pengguna
                      </Button>
                      <Button variant="outline" size="sm">
                        Atur Permissions
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Staff Keuangan</h3>
                    <p className="text-sm text-gray-600 mb-3">Akses ke data keuangan dan pembayaran</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Kelola Pengguna
                      </Button>
                      <Button variant="outline" size="sm">
                        Atur Permissions
                      </Button>
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
