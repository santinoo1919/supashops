import { createContext, useContext } from "react";

type ServiceContextType = {
  updateRating: (serviceId: number, category: number, rating: number) => void;
};

export const ServiceContext = createContext<ServiceContextType | null>(null);

export const useUpdateServiceRating = () => {
  const context = useContext(ServiceContext);
  if (!context)
    throw new Error(
      "useUpdateServiceRating must be used within ServiceProvider"
    );
  return context;
};
