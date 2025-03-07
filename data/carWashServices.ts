import { Service } from "./types";

export interface CarWashService extends Service {}

export const carWashServices: CarWashService[] = [
  {
    id: 1,
    name: "Premium Wash Center",
    description: "Professional car washing services with premium quality",

    address: "123 Clean St",
    phone: "+1 234-567-8900",
    services: ["Premium Wash", "Interior Cleaning"],
    imageUrl: "https://example.com/premium-wash.jpg",
    rating: 4.8,
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 2,
    name: "Express Wash Hub",
    description: "Professional car washing services with premium quality",

    address: "456 Quick Ave",
    phone: "+1 234-567-8901",
    services: ["Express Wash", "Waxing"],
    imageUrl: "https://example.com/express-wash.jpg",
    rating: 4.5,
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 3,
    name: "Express Wash Hub",
    description: "Professional car washing services with premium quality",

    address: "456 Quick Ave",
    phone: "+1 234-567-8901",
    services: ["Express Wash", "Waxing"],
    imageUrl: "https://example.com/express-wash.jpg",
    rating: 4.5,
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 4,
    name: "Express Wash Hub",
    description: "Professional car washing services with premium quality",

    address: "456 Quick Ave",
    phone: "+1 234-567-8901",
    services: ["Express Wash", "Waxing"],
    imageUrl: "https://example.com/express-wash.jpg",
    rating: 4.5,
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 5,
    name: "Express Wash Hub",
    description: "Professional car washing services with premium quality",

    address: "456 Quick Ave",
    phone: "+1 234-567-8901",
    services: ["Express Wash", "Waxing"],
    imageUrl: "https://example.com/express-wash.jpg",
    rating: 4.5,
    userRating: 0,
    totalVotes: 0,
  },
];
