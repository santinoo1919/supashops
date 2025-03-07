import { Service } from "./types";

export interface CarService extends Service {}

export const carServices: CarService[] = [
  {
    id: 1,
    name: "AutoFix Tunis",
    description:
      "Professional auto repair services with certified mechanics specializing in European and Japanese vehicles.",
    address: "56 Rue de Libya, Tunis",
    phone: "+216 71 890 123",
    rating: 4.7,
    services: ["Engine Repair", "Brake Service", "Oil Change", "Diagnostics"],
    imageUrl:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1548&auto=format&fit=crop", // Modern auto repair shop interior
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 2,
    name: "Mechanic Express",
    description:
      "Fast and reliable car repair services with same-day service for minor repairs and maintenance.",
    address: "23 Avenue Habib Thameur, Tunis",
    phone: "+216 71 456 789",
    rating: 4.5,
    services: [
      "Tire Replacement",
      "Battery Service",
      "AC Repair",
      "Suspension",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1548&auto=format&fit=crop", // Modern auto repair shop interior
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 3,
    name: "Tunis Auto Center",
    description:
      "Full-service auto center offering mechanical repairs, body work, painting, and vehicle inspection services.",
    address: "112 Avenue Mohamed V, Tunis",
    phone: "+216 71 234 567",
    rating: 4.8,
    services: ["Body Repair", "Painting", "Mechanical Repairs", "Inspection"],
    imageUrl:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1548&auto=format&fit=crop", // Professional garage equipment
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 4,
    name: "ElectroCar Tunis",
    description:
      "Specialized in electrical and electronic systems for all car makes, including computer diagnostics and programming.",
    address: "78 Rue du Lac Léman, Les Berges du Lac, Tunis",
    phone: "+216 71 345 678",
    rating: 4.6,
    services: [
      "Computer Diagnostics",
      "Electrical Repairs",
      "ECU Programming",
      "Battery Systems",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1548&auto=format&fit=crop", // Professional garage equipment
    userRating: 0,
    totalVotes: 0,
  },
  {
    id: 5,
    name: "Premium Car Service",
    description:
      "Luxury car service specializing in high-end vehicles with original parts and manufacturer-approved repair methods.",
    address: "45 Avenue Kheireddine Pacha, Tunis",
    phone: "+216 71 567 890",
    rating: 4.9,
    services: [
      "Luxury Vehicle Repair",
      "Original Parts",
      "Performance Tuning",
      "Detailing",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1548&auto=format&fit=crop", // Professional garage equipment
    userRating: 0,
    totalVotes: 0,
  },
];
