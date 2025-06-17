# Satu Data UIN New York

Dashboard modern dan responsif yang mengintegrasikan seluruh informasi mahasiswa dalam satu sistem terpusat dengan 3 role berbeda: Mahasiswa, Admin, dan Pemangku Kebijakan.

![Dashboard Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-cyan)

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Demo & Screenshots](#-demo--screenshots)
- [Teknologi](#-teknologi)
- [Instalasi](#-instalasi)
- [Penggunaan](#-penggunaan)
- [Struktur Project](#-struktur-project)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Fitur Utama

### 👨‍🎓 Dashboard Mahasiswa
- **Login & Profile Management** - Autentikasi dengan NIM
- **KRS & KHS** - Kartu Rencana Studi dan Kartu Hasil Studi
- **Monitoring IPK** - Grafik perkembangan IPK per semester
- **Status Keuangan** - Cek tagihan dan riwayat pembayaran
- **Notifikasi** - Pengumuman dan alert penting
- **Edit Profile** - Update data pribadi

### 🛡️ Dashboard Admin
- **CRUD Operations** - Manajemen data mahasiswa lengkap
- **Manajemen Akademik** - Kelola mata kuliah dan jadwal
- **Manajemen Keuangan** - Monitor pembayaran dan tagihan
- **Export Data** - Download laporan dalam format Excel/PDF
- **Manajemen Hak Akses** - Atur permissions pengguna
- **Analytics** - Statistik dan visualisasi data

### 📊 Dashboard Pemangku Kebijakan
- **Executive Dashboard** - Overview kinerja universitas
- **Laporan Kinerja Akademik** - Analisis mendalam prestasi
- **Search & Filter** - Pencarian data dengan filter advanced
- **Export Reports** - Generate laporan untuk stakeholder
- **Financial Analytics** - Analisis keuangan universitas
- **Research Tracking** - Monitor output penelitian

## 🖼️ Demo & Screenshots

### Login Interface
```
🔐 Multi-role authentication system
📱 Responsive design untuk semua device
🎨 Modern UI dengan Tailwind CSS
```

### Dashboard Overview
```
📊 Interactive charts dengan Recharts
📈 Real-time data visualization  
🎯 Role-based feature access
📱 Mobile-first responsive design
```

## 🛠️ Teknologi

### Frontend Stack
- **React 18.2.0** - UI Library
- **TypeScript 5.2.2** - Type Safety
- **Vite 5.0.8** - Build Tool
- **Tailwind CSS 3.3.6** - Styling Framework

### UI Components
- **shadcn/ui** - Component Library
- **Radix UI** - Headless UI Components
- **Lucide React** - Icon Library
- **Recharts 2.8.0** - Data Visualization

### Development Tools
- **ESLint** - Code Linting
- **PostCSS** - CSS Processing
- **Autoprefixer** - CSS Vendor Prefixes

### HTTP Client
- **Axios 1.6.0** - API Communication

## 🚀 Instalasi

### Prerequisites
- Node.js 16+ 
- npm atau yarn
- Git

### Quick Start

```bash
# Clone repository
git clone https://github.com/username/siakad-dashboard.git
cd siakad-dashboard

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build untuk production
npm run build
```

### Troubleshooting Installation

Jika mengalami error dependency conflict:

```bash
# Hapus node_modules dan package-lock.json
rm -rf node_modules package-lock.json

# Install dengan legacy peer deps
npm install --legacy-peer-deps
```

Atau gunakan yarn:

```bash
# Install dengan yarn
yarn install

# Start development
yarn dev
```

## 📖 Penggunaan

### Login Credentials (Demo)

#### Mahasiswa
- **Role**: Mahasiswa
- **NIM**: `2021001001` (atau angka apapun)
- **Password**: `password` (atau text apapun)

#### Admin
- **Role**: Admin
- **NIP**: `198501012010011001` (atau angka apapun)  
- **Password**: `admin123` (atau text apapun)

#### Pemangku Kebijakan
- **Role**: Pemangku Kebijakan
- **NIP**: `196801011995031001` (atau angka apapun)
- **Password**: `stakeholder` (atau text apapun)

### Navigasi Dashboard

1. **Login** dengan salah satu role di atas
2. **Explore tabs** untuk melihat fitur berbeda
3. **Interact dengan charts** - hover untuk detail
4. **Test responsive design** - resize browser window
5. **Try filter & search** - gunakan dropdown dan input field

### Fitur yang Dapat Dicoba

- ✅ **Multi-role authentication**
- ✅ **Interactive data visualization**
- ✅ **Responsive design testing**
- ✅ **Filter dan search functionality**
- ✅ **Export simulation**
- ✅ **Real-time chart updates**

## 📁 Struktur Project

```
siakad-dashboard/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── auth/          # Authentication components
│   │   │   └── login-form.tsx
│   │   ├── dashboards/    # Main dashboard components
│   │   │   ├── student-dashboard.tsx
│   │   │   ├── admin-dashboard.tsx
│   │   │   └── stakeholder-dashboard.tsx
│   │   └── ui/            # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── tabs.tsx
│   │       └── ...
│   ├── lib/
│   │   └── utils.ts       # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   ├── data/              # Dummy data for demo
│   └── App.tsx            # Main application component
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔌 API Documentation

### Authentication Endpoints

```typescript
// Login
POST /api/auth/login
{
  "userType": "student" | "admin" | "stakeholder",
  "id": "string", // NIM atau NIP
  "password": "string"
}

// Response
{
  "token": "jwt_token",
  "user": {
    "id": "string",
    "name": "string",
    "type": "string",
    "permissions": "string[]"
  }
}
```

### Student Endpoints

```typescript
// Get student profile
GET /api/student/profile/:nim

// Get KRS data
GET /api/student/krs/:nim

// Get KHS data  
GET /api/student/khs/:nim

// Get financial status
GET /api/student/finance/:nim
```

### Admin Endpoints

```typescript
// CRUD Students
GET    /api/admin/students
POST   /api/admin/students
PUT    /api/admin/students/:id
DELETE /api/admin/students/:id

// Academic Management
GET    /api/admin/courses
POST   /api/admin/courses
PUT    /api/admin/courses/:id
DELETE /api/admin/courses/:id

// Financial Management
GET /api/admin/payments
GET /api/admin/financial-reports
```

### Stakeholder Endpoints

```typescript
// University Analytics
GET /api/stakeholder/analytics/overview
GET /api/stakeholder/analytics/academic
GET /api/stakeholder/analytics/financial
GET /api/stakeholder/analytics/research

// Reports
GET /api/stakeholder/reports/generate
POST /api/stakeholder/reports/schedule
```

## 🎨 Customization

### Mengubah Theme

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Menambah Chart Baru

```typescript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CustomChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
)
```

### Menambah Role Baru

1. Update type definition:
```typescript
type UserRole = "student" | "admin" | "stakeholder" | "lecturer"
```

2. Buat dashboard component baru:
```typescript
export function LecturerDashboard({ user, onLogout }) {
  // Implementation
}
```

3. Update routing di App.tsx

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:coverage
```

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Build project
npm run build

# Deploy dist folder to Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Development Guidelines

- Gunakan TypeScript untuk type safety
- Follow ESLint rules
- Write meaningful commit messages
- Add tests untuk fitur baru
- Update documentation

## 🐛 Known Issues

- [ ] Date picker conflict dengan date-fns v4 (solved dengan --legacy-peer-deps)
- [ ] Chart responsiveness di mobile landscape
- [ ] Export PDF masih simulasi (butuh backend integration)

## 🔮 Roadmap

### Version 2.0
- [ ] Real backend integration
- [ ] JWT authentication
- [ ] Real-time notifications dengan WebSocket
- [ ] Advanced filtering dan search
- [ ] Mobile app dengan React Native

### Version 2.1
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme
- [ ] Advanced analytics dengan AI insights
- [ ] Offline support dengan PWA

## 👥 Team

- **UI/UX Designer** - [Septian Hadi Nugroho](https://github.com/septianhadinugroho)
- **FullStack Developer** - [Septian Hadi Nugroho](https://github.com/septianhadinugroho)

## 🙏 Acknowledgments

- [React Team](https://reactjs.org/) untuk amazing framework
- [Tailwind CSS](https://tailwindcss.com/) untuk utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) untuk beautiful components
- [Recharts](https://recharts.org/) untuk data visualization
- [Lucide](https://lucide.dev/) untuk beautiful icons

---

⭐ **Star project ini jika membantu!** ⭐