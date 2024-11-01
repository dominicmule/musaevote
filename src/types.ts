export type Level = 'Bachelor\'s' | 'Masters' | 'Doctorate' | 'Diploma' | 'Certificate';

export type Chapter = 'Kibwezi East' | 'Kibwezi West' | 'Kaiti' | 'Kilome' | 'Makueni' | 'Mbooni';

export interface User {
  id: string;
  email: string;
  phoneNumber: string;
  nationalId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  university?: string;
  level?: Level;
  program?: string;
  graduationYear?: number;
  chapter?: Chapter;
  ward?: string;
  hasVoted?: boolean;
  isElectoralCommission?: boolean;
  isChapterLeader?: boolean;
  isCouncilMember?: boolean;
}