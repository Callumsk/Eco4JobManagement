# ECO4 CRM - Grant Management System

A comprehensive Customer Relationship Management (CRM) system specifically designed for managing UK ECO4 grant projects, contractors, and leads. This modern web application helps organizations efficiently track and manage energy efficiency grant projects.

## 🚀 Features

### 📊 Dashboard
- Real-time overview of key metrics
- Quick action buttons for common tasks
- Recent activity feed
- Navigation to all major sections

### 👥 Lead Management
- Track potential customers and their eligibility
- Filter by status, eligibility, and search terms
- Comprehensive customer information including:
  - Personal details and contact information
  - Property information and current heating
  - Benefit eligibility and household income
  - Lead status tracking (new, contacted, qualified, converted, lost)

### 🏗️ Job Management
- Track ECO4 grant projects from start to finish
- Monitor project status (pending, approved, in-progress, completed, cancelled)
- Link jobs to leads and contractors
- Track grant amounts and estimated values
- Document management and timeline tracking

### 👷 Contractor Management
- Manage approved ECO4 installers
- Track contractor certifications and specializations
- Performance monitoring with ratings and completed jobs
- Status management (active, inactive, pending)
- ECO4 certification requirements guide

### 📈 Analytics & Reporting
- Comprehensive statistics and metrics
- Grant value tracking
- Conversion rates and performance insights
- Monthly and overall project statistics

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Heroicons
- **Date Handling**: date-fns
- **Forms**: React Hook Form

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eco4-crm
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
eco4-crm/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard page
│   ├── leads/             # Lead management
│   ├── jobs/              # Job management
│   └── contractors/       # Contractor management
├── components/            # Reusable components
├── store/                 # Zustand state management
│   └── crmStore.ts       # Main CRM store
├── types/                 # TypeScript type definitions
│   └── index.ts          # All type interfaces
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎯 Key Features for ECO4 Grants

### Eligibility Tracking
- Automatic eligibility assessment based on benefits and income
- Property type and age considerations
- Current heating system evaluation

### Grant Management
- Support for multiple grant types (ECO4, LA Flex, Other)
- Grant amount calculation and tracking
- Document management for compliance

### Contractor Compliance
- PAS 2030:2019 certification tracking
- TrustMark registration monitoring
- Quality standards enforcement
- Performance rating system

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Sample Data

The application comes with sample data including:
- 2 sample leads with different eligibility statuses
- 2 active contractors with certifications
- 2 sample jobs in different stages
- 1 sample project

## 🎨 Customization

### Styling
The application uses Tailwind CSS with custom color schemes:
- Primary colors for general UI elements
- ECO-specific green colors for success states
- Status-specific colors for different states

### Adding New Features
1. Define types in `types/index.ts`
2. Add state management in `store/crmStore.ts`
3. Create new pages in the `app/` directory
4. Update navigation as needed

## 🔒 Data Management

Currently, the application uses in-memory state management with Zustand. For production use, consider:
- Adding a backend API
- Implementing database storage
- Adding user authentication
- Setting up data persistence

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions about the ECO4 CRM system, please create an issue in the repository.

## 🔮 Future Enhancements

- User authentication and role-based access
- Advanced reporting and analytics
- Email integration and notifications
- Document upload and management
- API integration with external systems
- Mobile app development
- Advanced filtering and search capabilities
- Workflow automation
- Integration with government grant systems

---

**Built with ❤️ for the UK ECO4 grant community**
