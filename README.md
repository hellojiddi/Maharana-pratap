# Maharana Pratap College of Pharmacy

A modern, responsive website for Maharana Pratap College of Pharmacy, built with React, TypeScript, and Tailwind CSS.

## 🎓 About

Maharana Pratap College of Pharmacy is an institution approved by Pharmacy Council of India (PCI), New Delhi, and affiliated with Bihar University of Health Sciences (BUHS), Patna. We offer D.Pharm and B.Pharm programs with world-class facilities.

**Location**: Chilhari, Buxar, Bihar - 802133  
**Phone**: +91 97099 08168  
**Email**: maharanapratapcoe@gmail.com

## ✨ Features

- **Responsive Design** - Works seamlessly on all devices
- **Smooth Animations** - Enhanced UX with GSAP animations
- **Modern UI Components** - Built with Radix UI
- **Mobile Navigation** - User-friendly menu system
- **Course Information** - Detailed program descriptions
- **Gallery Showcase** - College facilities and moments
- **Contact Integration** - Easy inquiry submission
- **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Framework |
| TypeScript | 5.9.3 | Type Safety |
| Tailwind CSS | 3.4.19 | Styling |
| Vite | 7.2.4 | Build Tool |
| React Router | 7.15.1 | Client-side Routing |
| GSAP | 3.15.0 | Animations |
| Radix UI | Latest | UI Components |
| Lenis | 1.3.23 | Smooth Scrolling |

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── common/                  # Reusable components
│   │   ├── WhatsAppButton.tsx
│   │   └── PageHeader.tsx
│   ├── sections/
│   │   └── home/                # Home page sections
│   │       ├── Hero.tsx
│   │       ├── AnnouncementBar.tsx
│   │       ├── WelcomeSection.tsx
│   │       ├── ProgramsSection.tsx
│   │       ├── FacilitiesPreview.tsx
│   │       ├── WhyChooseSection.tsx
│   │       ├── GalleryPreview.tsx
│   │       ├── AffiliationsSection.tsx
│   │       └── CTASection.tsx
│   └── ui/                      # Radix UI wrapped components
├── pages/                       # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Courses.tsx
│   ├── Facilities.tsx
│   ├── Gallery.tsx
│   ├── Documents.tsx
│   └── Contact.tsx
├── hooks/                       # Custom React hooks
│   ├── useLenis.ts
│   ├── useCountUp.ts
│   ├── useScrollReveal.ts
│   ├── useNavScroll.ts
│   └── use-mobile.ts
├── styles/                      # Global styles
│   ├── index.css
│   └── App.css
├── App.tsx                      # Main app component
└── main.tsx                     # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/hellojiddi/Maharana-pratap.git
cd Maharana-pratap

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 📄 Available Pages

- **Home** - Landing page with hero section and featured content
- **About** - College information, chairman's message, and history
- **Courses** - D.Pharm and B.Pharm program details
- **Facilities** - Campus facilities and infrastructure
- **Gallery** - Photo gallery of college life
- **Documents** - Important documents and prospectus
- **Contact** - Contact form and location information

## 🎨 Customization

### Tailwind Configuration

Edit `tailwind.config.js` to customize colors, fonts, and other design tokens.

### Environment Variables

Create a `.env` file in the root directory for any environment-specific variables.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 License

© 2024 Maharana Pratap College of Pharmacy. All Rights Reserved.

## 📞 Support

For issues, suggestions, or inquiries:
- **WhatsApp**: +91 97099 08168
- **Email**: maharanapratapcoe@gmail.com

---

**Built with ❤️ by the MPCP Team**
