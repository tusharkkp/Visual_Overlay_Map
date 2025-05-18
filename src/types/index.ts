export interface Category {
  id: string;
  name: string;
}

export interface Friend {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  title: string;
  category: string;
  rating: number;
  description: string;
  tags?: string[];
}