export interface Survey {
  id: number;
  title: string;
  description?: string;
  isActive: boolean;
  isAnonymous: boolean;
  startDate: Date;
  endDate?: Date;
  createdBy: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SurveyQuestion {
  id: number;
  surveyId: number;
  questionText: string;
  questionType: 'multiple_choice' | 'text' | 'rating' | 'yes_no';
  options?: string[];
  isRequired: boolean;
  orderIndex: number;
  createdAt: Date;
}

export interface SurveyResponse {
  id: number;
  surveyId: number;
  questionId: number;
  userId?: number;
  answerText?: string;
  answerChoice?: string;
  submittedAt: Date;
}
