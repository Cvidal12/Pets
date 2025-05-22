export interface Puppy {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  description: string;
  characteristics: string[];
  imageUrl: string;
  status: 'available' | 'pending' | 'adopted';
}

export interface SuccessStory {
  id: string;
  puppyName: string;
  familyName: string;
  date: string;
  story: string;
  imageUrl: string;
}

export interface AdoptionStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}