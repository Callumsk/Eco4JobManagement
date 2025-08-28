import { create } from 'zustand';
import { Contractor, Lead, Job, Project, DashboardStats } from '../types';

interface CRMStore {
  // Data
  leads: Lead[];
  contractors: Contractor[];
  jobs: Job[];
  projects: Project[];
  
  // UI State
  selectedLead: Lead | null;
  selectedContractor: Contractor | null;
  selectedJob: Job | null;
  selectedProject: Project | null;
  
  // Actions
  addLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateLead: (id: string, updates: Partial<Lead>) => void;
  deleteLead: (id: string) => void;
  
  addContractor: (contractor: Omit<Contractor, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateContractor: (id: string, updates: Partial<Contractor>) => void;
  deleteContractor: (id: string) => void;
  
  addJob: (job: Omit<Job, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateJob: (id: string, updates: Partial<Job>) => void;
  deleteJob: (id: string) => void;
  
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  
  // UI Actions
  setSelectedLead: (lead: Lead | null) => void;
  setSelectedContractor: (contractor: Contractor | null) => void;
  setSelectedJob: (job: Job | null) => void;
  setSelectedProject: (project: Project | null) => void;
  
  // Computed
  getDashboardStats: () => DashboardStats;
}

const generateId = () => Math.random().toString(36).substr(2, 9);

export const useCRMStore = create<CRMStore>((set, get) => ({
  // Initial data
  leads: [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@email.com',
      phone: '07700 900123',
      address: '123 Main Street',
      postcode: 'M1 1AA',
      propertyType: 'house',
      propertyAge: '1980s',
      currentHeating: 'Gas boiler',
      householdIncome: 'low',
      benefits: ['Universal Credit', 'Child Benefit'],
      eligibility: 'eligible',
      status: 'qualified',
      notes: 'Interested in insulation and new boiler',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@email.com',
      phone: '07700 900456',
      address: '456 Oak Avenue',
      postcode: 'M2 2BB',
      propertyType: 'flat',
      propertyAge: '1990s',
      currentHeating: 'Electric storage heaters',
      householdIncome: 'medium',
      benefits: ['Pension Credit'],
      eligibility: 'eligible',
      status: 'contacted',
      notes: 'Looking for heating upgrade',
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-20'),
    },
  ],
  
  contractors: [
    {
      id: '1',
      name: 'Mike Wilson',
      company: 'Green Energy Solutions',
      email: 'mike@greenenergy.com',
      phone: '0161 123 4567',
      address: 'Unit 5, Industrial Estate',
      postcode: 'M3 3CC',
      certification: 'PAS 2030',
      specializations: ['Insulation', 'Boiler Installation', 'Solar'],
      status: 'active',
      rating: 4.8,
      completedJobs: 45,
      createdAt: new Date('2023-06-01'),
      updatedAt: new Date('2024-01-10'),
    },
    {
      id: '2',
      name: 'Lisa Thompson',
      company: 'Eco Install Ltd',
      email: 'lisa@ecoinstall.co.uk',
      phone: '0161 987 6543',
      address: '15 Business Park',
      postcode: 'M4 4DD',
      certification: 'PAS 2030, TrustMark',
      specializations: ['Heat Pumps', 'Insulation'],
      status: 'active',
      rating: 4.9,
      completedJobs: 32,
      createdAt: new Date('2023-08-15'),
      updatedAt: new Date('2024-01-05'),
    },
  ],
  
  jobs: [
    {
      id: '1',
      title: 'Loft Insulation & Boiler Replacement',
      description: 'Full property upgrade including loft insulation and new A-rated boiler',
      leadId: '1',
      contractorId: '1',
      propertyAddress: '123 Main Street',
      propertyPostcode: 'M1 1AA',
      grantType: 'ECO4',
      measures: ['Loft Insulation', 'Boiler Replacement'],
      estimatedValue: 8500,
      grantAmount: 6800,
      status: 'in-progress',
      startDate: new Date('2024-01-25'),
      documents: ['survey.pdf', 'contract.pdf'],
      notes: 'Customer very happy with progress',
      createdAt: new Date('2024-01-20'),
      updatedAt: new Date('2024-01-25'),
    },
    {
      id: '2',
      title: 'Cavity Wall Insulation',
      description: 'Cavity wall insulation for 3-bed semi-detached',
      leadId: '2',
      propertyAddress: '456 Oak Avenue',
      propertyPostcode: 'M2 2BB',
      grantType: 'ECO4',
      measures: ['Cavity Wall Insulation'],
      estimatedValue: 1200,
      grantAmount: 1200,
      status: 'pending',
      documents: ['survey.pdf'],
      notes: 'Awaiting approval',
      createdAt: new Date('2024-01-22'),
      updatedAt: new Date('2024-01-22'),
    },
  ],
  
  projects: [
    {
      id: '1',
      name: 'Manchester Winter Upgrade Program',
      description: 'Large-scale upgrade program for Manchester properties',
      jobs: ['1', '2'],
      totalValue: 9700,
      totalGrant: 8000,
      status: 'active',
      startDate: new Date('2024-01-01'),
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-25'),
    },
  ],
  
  // UI State
  selectedLead: null,
  selectedContractor: null,
  selectedJob: null,
  selectedProject: null,
  
  // Actions
  addLead: (leadData) => {
    const newLead: Lead = {
      ...leadData,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ leads: [...state.leads, newLead] }));
  },
  
  updateLead: (id, updates) => {
    set((state) => ({
      leads: state.leads.map((lead) =>
        lead.id === id ? { ...lead, ...updates, updatedAt: new Date() } : lead
      ),
    }));
  },
  
  deleteLead: (id) => {
    set((state) => ({
      leads: state.leads.filter((lead) => lead.id !== id),
    }));
  },
  
  addContractor: (contractorData) => {
    const newContractor: Contractor = {
      ...contractorData,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ contractors: [...state.contractors, newContractor] }));
  },
  
  updateContractor: (id, updates) => {
    set((state) => ({
      contractors: state.contractors.map((contractor) =>
        contractor.id === id ? { ...contractor, ...updates, updatedAt: new Date() } : contractor
      ),
    }));
  },
  
  deleteContractor: (id) => {
    set((state) => ({
      contractors: state.contractors.filter((contractor) => contractor.id !== id),
    }));
  },
  
  addJob: (jobData) => {
    const newJob: Job = {
      ...jobData,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ jobs: [...state.jobs, newJob] }));
  },
  
  updateJob: (id, updates) => {
    set((state) => ({
      jobs: state.jobs.map((job) =>
        job.id === id ? { ...job, ...updates, updatedAt: new Date() } : job
      ),
    }));
  },
  
  deleteJob: (id) => {
    set((state) => ({
      jobs: state.jobs.filter((job) => job.id !== id),
    }));
  },
  
  addProject: (projectData) => {
    const newProject: Project = {
      ...projectData,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ projects: [...state.projects, newProject] }));
  },
  
  updateProject: (id, updates) => {
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id ? { ...project, ...updates, updatedAt: new Date() } : project
      ),
    }));
  },
  
  deleteProject: (id) => {
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    }));
  },
  
  // UI Actions
  setSelectedLead: (lead) => set({ selectedLead: lead }),
  setSelectedContractor: (contractor) => set({ selectedContractor: contractor }),
  setSelectedJob: (job) => set({ selectedJob: job }),
  setSelectedProject: (project) => set({ selectedProject: project }),
  
  // Computed
  getDashboardStats: () => {
    const state = get();
    const activeLeads = state.leads.filter(lead => lead.status !== 'lost').length;
    const activeJobs = state.jobs.filter(job => job.status !== 'cancelled').length;
    const activeContractors = state.contractors.filter(contractor => contractor.status === 'active').length;
    const totalGrantValue = state.jobs.reduce((sum, job) => sum + job.grantAmount, 0);
    const averageJobValue = state.jobs.length > 0 ? totalGrantValue / state.jobs.length : 0;
    
    return {
      totalLeads: state.leads.length,
      activeLeads,
      totalJobs: state.jobs.length,
      activeJobs,
      totalContractors: state.contractors.length,
      activeContractors,
      totalProjects: state.projects.length,
      totalGrantValue,
      monthlyConversions: state.leads.filter(lead => 
        lead.status === 'converted' && 
        lead.updatedAt > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      ).length,
      averageJobValue,
    };
  },
}));
