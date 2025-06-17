"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, TrendingUp, GraduationCap, Award, LogOut, Download, BarChart3, PieChart, Calendar } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"

interface StakeholderDashboardProps {
  user: { type: string; id: string; name: string }
  onLogout: () => void
}

export function StakeholderDashboard({ user, onLogout }: StakeholderDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedPeriod, setSelectedPeriod] = useState("2024")
  const [selectedFaculty, setSelectedFaculty] = useState("all")

  // Dummy data
  const performanceData = [
    { year: "2020", students: 3200, graduates: 850, gpa: 3.45 },
    { year: "2021", students: 3400, graduates: 920, gpa: 3.52 },
    { year: "2022", students: 3550, graduates: 980, gpa: 3.58 },
    { year: "2023", students: 3630, graduates: 1050, gpa: 3.62 },
    { year: "2024", students: 3750, graduates: 1120, gpa: 3.68 },
  ]

  const facultyPerformance = [
    { faculty: "Teknik", students: 1250, graduates: 320, avgGpa: 3.72, accreditation: "A" },
    { faculty: "Ekonomi", students: 980, graduates: 280, avgGpa: 3.65, accreditation: "A" },
    { faculty: "Hukum", students: 750, graduates: 210, avgGpa: 3.58, accreditation: "B+" },
    { faculty: "Kedokteran", students: 650, graduates: 180, avgGpa: 3.78, accreditation: "A" },
  ]

  const graduationRate = [
    { semester: "Sem 1", onTime: 85, delayed: 15 },
    { semester: "Sem 2", onTime: 82, delayed: 18 },
    { semester: "Sem 3", onTime: 88, delayed: 12 },
    { semester: "Sem 4", onTime: 90, delayed: 10 },
    { semester: "Sem 5", onTime: 87, delayed: 13 },
    { semester: "Sem 6", onTime: 92, delayed: 8 },
  ]

  const researchData = [
    { category: "Publikasi Jurnal", count: 245, color: "#3b82f6" },
    { category: "Konferensi", count: 180, color: "#10b981" },
    { category: "Paten", count: 45, color: "#f59e0b" },
    { category: "Hibah Penelitian", count: 32, color: "#8b5cf6" },
  ]

  const employmentData = [
    { category: "Bekerja", percentage: 78, color: "#10b981" },
    { category: "Melanjutkan Studi", percentage: 15, color: "#3b82f6" },
    { category: "Wirausaha", percentage: 5, color: "#f59e0b" },
    { category: "Mencari Kerja", percentage: 2, color: "#ef4444" },
  ]

  const financialTrend = [
    { month: "Jan", income: 2.1, expense: 1.8 },
    { month: "Feb", income: 2.3, expense: 1.9 },
    { month: "Mar", income: 2.5, expense: 2.0 },
    { month: "Apr", income: 2.2, expense: 1.9 },
    { month: "May", income: 2.4, expense: 2.1 },
    { month: "Jun", income: 2.6, expense: 2.0 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">Dashboard Pemangku Kebijakan</h1>
                  <p className="text-sm text-gray-500">Selamat datang, {user.name}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-purple-600 border-purple-200">
                NIP: {user.id || "196801011995031001"}
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
        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Pilih Periode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedFaculty} onValueChange={setSelectedFaculty}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Pilih Fakultas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Fakultas</SelectItem>
              <SelectItem value="teknik">Teknik</SelectItem>
              <SelectItem value="ekonomi">Ekonomi</SelectItem>
              <SelectItem value="hukum">Hukum</SelectItem>
              <SelectItem value="kedokteran">Kedokteran</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Laporan
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="academic">Kinerja Akademik</TabsTrigger>
            <TabsTrigger value="research">Penelitian</TabsTrigger>
            <TabsTrigger value="financial">Keuangan</TabsTrigger>
            <TabsTrigger value="reports">Laporan</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Mahasiswa</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">3,750</div>
                  <p className="text-xs text-muted-foreground">+3.3% dari tahun lalu</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Lulusan Tahun Ini</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">1,120</div>
                  <p className="text-xs text-muted-foreground">+6.7% dari tahun lalu</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">IPK Rata-rata</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">3.68</div>
                  <p className="text-xs text-muted-foreground">+0.06 dari tahun lalu</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tingkat Kelulusan</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">92%</div>
                  <p className="text-xs text-muted-foreground">Tepat waktu</p>
                </CardContent>
              </Card>
            </div>

            {/* Performance Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tren Kinerja Universitas</CardTitle>
                  <CardDescription>Perkembangan mahasiswa dan lulusan 5 tahun terakhir</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="students"
                        stackId="1"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="graduates"
                        stackId="2"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kinerja per Fakultas</CardTitle>
                  <CardDescription>Perbandingan kinerja antar fakultas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={facultyPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="faculty" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="students" fill="#8b5cf6" name="Mahasiswa" />
                      <Bar dataKey="graduates" fill="#10b981" name="Lulusan" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Faculty Performance Table */}
            <Card>
              <CardHeader>
                <CardTitle>Detail Kinerja Fakultas</CardTitle>
                <CardDescription>Ringkasan kinerja masing-masing fakultas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {facultyPerformance.map((faculty, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{faculty.faculty}</p>
                            <p className="text-sm text-gray-600">{faculty.students} mahasiswa aktif</p>
                          </div>
                          <Badge variant="outline">{faculty.graduates} lulusan</Badge>
                          <div className="text-sm">
                            <p>
                              IPK: <span className="font-medium">{faculty.avgGpa}</span>
                            </p>
                            <p>
                              Akreditasi: <span className="font-medium">{faculty.accreditation}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tingkat Kelulusan Tepat Waktu</CardTitle>
                  <CardDescription>Persentase kelulusan tepat waktu vs terlambat</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={graduationRate}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="semester" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="onTime" fill="#10b981" name="Tepat Waktu (%)" />
                      <Bar dataKey="delayed" fill="#ef4444" name="Terlambat (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribusi IPK Lulusan</CardTitle>
                  <CardDescription>Sebaran prestasi akademik lulusan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cum Laude (IPK ≥ 3.5)</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                        </div>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sangat Memuaskan (3.0-3.49)</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Memuaskan (2.5-2.99)</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "7%" }}></div>
                        </div>
                        <span className="text-sm font-medium">7%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Tingkat Kepuasan Alumni</CardTitle>
                <CardDescription>Survey kepuasan alumni terhadap kualitas pendidikan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">4.2</div>
                    <p className="text-sm text-green-800">Kualitas Pengajaran</p>
                    <p className="text-xs text-green-600">dari 5.0</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">4.0</div>
                    <p className="text-sm text-blue-800">Fasilitas</p>
                    <p className="text-xs text-blue-600">dari 5.0</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">4.3</div>
                    <p className="text-sm text-purple-800">Relevansi Kurikulum</p>
                    <p className="text-xs text-purple-600">dari 5.0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Produktivitas Penelitian</CardTitle>
                  <CardDescription>Output penelitian dosen dan mahasiswa</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={researchData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="count"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {researchData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status Pekerjaan Alumni</CardTitle>
                  <CardDescription>Distribusi status pekerjaan lulusan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {employmentData.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{item.category}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${item.percentage}%`,
                                backgroundColor: item.color,
                              }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{item.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Kerjasama Industri</CardTitle>
                <CardDescription>Partnership dengan industri dan institusi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">45</div>
                    <p className="text-sm text-gray-600">MoU Aktif</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">28</div>
                    <p className="text-sm text-gray-600">Program Magang</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">15</div>
                    <p className="text-sm text-gray-600">Penelitian Kolaboratif</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">12</div>
                    <p className="text-sm text-gray-600">Program Beasiswa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Pendapatan</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">Rp 14.2M</div>
                  <p className="text-xs text-muted-foreground">+8.2% dari bulan lalu</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Pengeluaran</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">Rp 11.8M</div>
                  <p className="text-xs text-muted-foreground">+5.1% dari bulan lalu</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Surplus</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">Rp 2.4M</div>
                  <p className="text-xs text-muted-foreground">+16.9% dari bulan lalu</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Tren Keuangan</CardTitle>
                <CardDescription>Perbandingan pendapatan dan pengeluaran 6 bulan terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={financialTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`Rp ${value}M`, ""]} />
                    <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} name="Pendapatan" />
                    <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} name="Pengeluaran" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generator Laporan</CardTitle>
                <CardDescription>Buat dan unduh laporan kinerja dalam berbagai format</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-24 flex flex-col">
                    <BarChart3 className="h-8 w-8 mb-2 text-blue-600" />
                    <span className="font-medium">Laporan Akademik</span>
                    <span className="text-xs text-gray-500">PDF/Excel</span>
                  </Button>

                  <Button variant="outline" className="h-24 flex flex-col">
                    <PieChart className="h-8 w-8 mb-2 text-green-600" />
                    <span className="font-medium">Laporan Keuangan</span>
                    <span className="text-xs text-gray-500">PDF/Excel</span>
                  </Button>

                  <Button variant="outline" className="h-24 flex flex-col">
                    <Users className="h-8 w-8 mb-2 text-purple-600" />
                    <span className="font-medium">Laporan Mahasiswa</span>
                    <span className="text-xs text-gray-500">PDF/Excel</span>
                  </Button>

                  <Button variant="outline" className="h-24 flex flex-col">
                    <Award className="h-8 w-8 mb-2 text-orange-600" />
                    <span className="font-medium">Laporan Penelitian</span>
                    <span className="text-xs text-gray-500">PDF/Excel</span>
                  </Button>

                  <Button variant="outline" className="h-24 flex flex-col">
                    <Calendar className="h-8 w-8 mb-2 text-red-600" />
                    <span className="font-medium">Laporan Tahunan</span>
                    <span className="text-xs text-gray-500">PDF/Excel</span>
                  </Button>

                  <Button variant="outline" className="h-24 flex flex-col">
                    <TrendingUp className="h-8 w-8 mb-2 text-indigo-600" />
                    <span className="font-medium">Dashboard Eksekutif</span>
                    <span className="text-xs text-gray-500">PDF/Excel</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Laporan Terjadwal</CardTitle>
                <CardDescription>Atur pengiriman laporan otomatis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Laporan Bulanan Akademik</p>
                      <p className="text-sm text-gray-600">Dikirim setiap tanggal 1</p>
                    </div>
                    <Badge variant="default">Aktif</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Laporan Keuangan Triwulan</p>
                      <p className="text-sm text-gray-600">Dikirim setiap 3 bulan</p>
                    </div>
                    <Badge variant="default">Aktif</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Dashboard Eksekutif Mingguan</p>
                      <p className="text-sm text-gray-600">Dikirim setiap Senin</p>
                    </div>
                    <Badge variant="secondary">Nonaktif</Badge>
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
