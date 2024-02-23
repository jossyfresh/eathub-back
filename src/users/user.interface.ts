export interface User {
  id?: string;
  username: string;
  email: string;
  phone?: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
  image?: string;
  address?: string;
}
