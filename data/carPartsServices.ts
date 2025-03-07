import { Service } from "./types";

export interface CarPartsService extends Service {}

export const carPartsServices: CarPartsService[] = [
  {
    id: 1,
    name: "AutoParts Plus",
    description: "Professional car washing services with premium quality",

    address: "789 Parts Ave",
    phone: "+1 234-567-8902",
    services: ["Brake Parts", "Oil Filters", "Engine Parts"],
    imageUrl: "https://example.com/autoparts-plus.jpg",
    rating: 4.9,
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 2,
    name: "Elite Parts Store",
    description: "Professional car washing services with premium quality",

    address: "321 Component St",
    phone: "+1 234-567-8903",
    services: ["Performance Parts", "Accessories", "Tools"],
    imageUrl: "https://example.com/elite-parts.jpg",
    rating: 4.7,
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 3,
    name: "Elite Parts Store",
    description: "Professional car washing services with premium quality",

    address: "321 Component St",
    phone: "+1 234-567-8903",
    services: ["Performance Parts", "Accessories", "Tools"],
    imageUrl: "https://example.com/elite-parts.jpg",
    rating: 4.7,
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 4,
    name: "Elite Parts Store",
    description: "Professional car washing services with premium quality",

    address: "321 Component St",
    phone: "+1 234-567-8903",
    services: ["Performance Parts", "Accessories", "Tools"],
    imageUrl: "https://example.com/elite-parts.jpg",
    rating: 4.7,
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 5,
    name: "Elite Parts Store",
    description: "Professional car washing services with premium quality",

    address: "321 Component St",
    phone: "+1 234-567-8903",
    services: ["Performance Parts", "Accessories", "Tools"],
    imageUrl: "https://example.com/elite-parts.jpg",
    rating: 4.7,
    userRating: 0,
    totalVotes: 0,
  },
];
