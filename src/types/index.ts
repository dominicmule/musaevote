export type Chapter = 'Kibwezi East' | 'Kibwezi West' | 'Kaiti' | 'Kilome' | 'Makueni' | 'Mbooni';

export type ChapterPosition = 
  | 'Chairperson'
  | 'Vice Chairperson'
  | 'Treasurer'
  | 'Secretary General'
  | 'Assistant Secretary General'
  | 'Project Coordinator'
  | 'College Representative';

export type CouncilPosition = 
  | 'President'
  | 'Vice President'
  | 'Finance Director'
  | 'Secretary General'
  | 'Administrator General'
  | 'Logistics Director';

export type Level = 'Bachelor\'s' | 'Masters' | 'Doctorate' | 'Diploma' | 'Certificate';

export interface User {
  id: string;
  email: string;
  phoneNumber: string;
  nationalId: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  university: string;
  level: Level;
  program: string;
  graduationYear: number;
  chapter: Chapter;
  ward: string;
  isElectoralCommission?: boolean;
  isChapterLeader?: boolean;
  hasVoted?: boolean;
}

export interface Candidate {
  id: string;
  userId: string;
  position: ChapterPosition | CouncilPosition;
  chapter: Chapter;
  proofOfSchooling?: string;
  status: 'pending' | 'approved' | 'voided';
  voidReason?: string;
  votes?: number;
}