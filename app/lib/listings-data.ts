export type Amenity = {
  icon: string;
  label: string;
};

export type Listing = {
  id: string;
  title: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  hostName: string;
  hostYears: number;
  imageUrl: string;
  photos: string[];
  amenities: Amenity[];
};

const sharedRoomImage = "/imagenes/hoteles-de-la-costa-mediterranea-de-Espana.webp";

export const categoryOptions = [
  { id: "all", label: "Todas", icon: "🌍" },
  { id: "playa", label: "Playa", icon: "🏖" },
  { id: "mansiones", label: "Mansiones", icon: "🏛" },
  { id: "tendencias", label: "Tendencias", icon: "🔥" },
];

export const listingsData: Listing[] = [
  {
    id: "room-1",
    title: "Habitacion en Alicante",
    location: "Alicante, Espana",
    category: "playa",
    pricePerNight: 47,
    rating: 4.94,
    reviews: 53,
    hostName: "Mauro",
    hostYears: 2,
    imageUrl: sharedRoomImage,
    photos: [sharedRoomImage, sharedRoomImage, sharedRoomImage, sharedRoomImage],
    amenities: [
      { icon: "📶", label: "Wifi" },
      { icon: "🚿", label: "Bano privado" },
      { icon: "❄", label: "Aire acondicionado" },
      { icon: "🍳", label: "Cocina" },
    ],
  },
  {
    id: "room-2",
    title: "Apartamento en Alicante",
    location: "Alicante, Espana",
    category: "tendencias",
    pricePerNight: 170,
    rating: 4.93,
    reviews: 41,
    hostName: "Laura",
    hostYears: 3,
    imageUrl: sharedRoomImage,
    photos: [sharedRoomImage, sharedRoomImage, sharedRoomImage, sharedRoomImage],
    amenities: [
      { icon: "📶", label: "Wifi" },
      { icon: "🧺", label: "Lavadora" },
      { icon: "🚗", label: "Parking" },
      { icon: "🍽", label: "Cocina completa" },
    ],
  },
  {
    id: "room-3",
    title: "Loft moderno",
    location: "Alicante, Espana",
    category: "mansiones",
    pricePerNight: 199,
    rating: 4.89,
    reviews: 67,
    hostName: "Carlos",
    hostYears: 5,
    imageUrl: sharedRoomImage,
    photos: [sharedRoomImage, sharedRoomImage, sharedRoomImage, sharedRoomImage],
    amenities: [
      { icon: "📶", label: "Wifi" },
      { icon: "💻", label: "Zona de trabajo" },
      { icon: "🛗", label: "Ascensor" },
      { icon: "🏋", label: "Gimnasio" },
    ],
  },
  {
    id: "room-4",
    title: "Suite luminosa",
    location: "Alicante, Espana",
    category: "playa",
    pricePerNight: 129,
    rating: 4.91,
    reviews: 35,
    hostName: "Nora",
    hostYears: 4,
    imageUrl: sharedRoomImage,
    photos: [sharedRoomImage, sharedRoomImage, sharedRoomImage, sharedRoomImage],
    amenities: [
      { icon: "📶", label: "Wifi" },
      { icon: "📺", label: "Smart TV" },
      { icon: "🧴", label: "Secador" },
      { icon: "☕", label: "Cafetera" },
    ],
  },
];

export const findListingById = (id: string) =>
  listingsData.find((listing) => listing.id === id);
