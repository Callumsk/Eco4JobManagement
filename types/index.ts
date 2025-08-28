export interface Contractor {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  certification: string;
  specializations: string[];
  status: 'active' | 'inactive' | 'pending';
  rating: number;
  completedJobs: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  propertyType: 'house' | 'flat' | 'bungalow' | 'other';
  propertyAge: string;
  currentHeating: string;
  householdIncome: 'low' | 'medium' | 'high';
  benefits: string[];
  eligibility: 'eligible' | 'ineligible' | 'pending';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  notes: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  leadId: string;
  contractorId?: string;
  propertyAddress: string;
  propertyPostcode: string;
  grantType: 'ECO4' | 'LA Flex' | 'Other';
  measures: string[];
  estimatedValue: number;
  grantAmount: number;
  status: 'pending' | 'approved' | 'in-progress' | 'completed' | 'cancelled';
  startDate?: Date;
  completionDate?: Date;
  documents: string[];
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  jobs: string[];
  totalValue: number;
  totalGrant: number;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardStats {
  totalLeads: number;
  activeLeads: number;
  totalJobs: number;
  activeJobs: number;
  totalContractors: number;
  activeContractors: number;
  totalProjects: number;
  totalGrantValue: number;
  monthlyConversions: number;
  averageJobValue: number;
}
