export type Service = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  address: string;
  phone: string;
  services: string[];
  rating: number; // Initial/admin rating
  userRating: number; // Average of user votes
  totalVotes: number; // To calculate average
};
