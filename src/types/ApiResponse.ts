type DoctoreData = {
  id: string;
  name: string;
  email: string;
  image: string;
  specialization: string;
  consultation: string;
  commissionRate: string;
  experience: string;
  qualifications: string;
  
};

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};

