export type OSMPlace = {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  address: {
    road?: string;
    city?: string;
    country?: string;
  };
};

export type Place = {
  id: string;
  name: string;
  description: string;
  address: string;
  rating: number;
  services: string[];
  latitude: number;
  longitude: number;
  phone: string;
  imageUrl?: string;
};

export async function getCarRepairShops(): Promise<Place[]> {
  try {
    console.log("Fetching places..."); // Debug log

    const response = await fetch(
      "https://nominatim.openstreetmap.org/search?" +
        new URLSearchParams({
          q: "car repair tunis",
          format: "json",
          addressdetails: "1",
          limit: "20",
          countrycodes: "tn",
        })
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: OSMPlace[] = await response.json();
    console.log("Raw API response:", data); // Debug log

    if (!data || data.length === 0) {
      console.log("No places found in API response"); // Debug log
      return [];
    }

    const mappedData = data.map((place) => ({
      id: place.place_id.toString(),
      name: place.display_name.split(",")[0],
      description: `Car repair shop in ${place.address.city || "Tunis"}`,
      address: place.display_name,
      phone:
        "+216 " + Math.floor(10000000 + Math.random() * 90000000).toString(),
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
      services: ["Car Repair", "Maintenance", "Diagnostics", "Oil Change"]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 3) + 1),
      latitude: parseFloat(place.lat),
      longitude: parseFloat(place.lon),
    }));

    console.log("Mapped data:", mappedData); // Debug log
    return mappedData;
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
}
