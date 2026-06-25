import { useEffect, useState } from "react";

/*
Hook: useRoomDetailState
Relacion de layout:
- Encapsula estado e interacciones de la vista /rooms/[id].
*/
export const useRoomDetailState = (listingId: string, photosLength: number) => {
  const [loading, setLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [listingId]);

  const prevPhoto = () => {
    setPhotoIndex((current) => (current === 0 ? photosLength - 1 : current - 1));
  };

  const nextPhoto = () => {
    setPhotoIndex((current) => (current === photosLength - 1 ? 0 : current + 1));
  };

  const decreaseGuests = () => {
    setGuests((current) => Math.max(1, current - 1));
  };

  const increaseGuests = () => {
    setGuests((current) => Math.min(8, current + 1));
  };

  return {
    loading,
    photoIndex,
    guests,
    prevPhoto,
    nextPhoto,
    decreaseGuests,
    increaseGuests,
  };
};
