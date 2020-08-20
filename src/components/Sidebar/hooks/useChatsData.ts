import { useState, useEffect } from "react";
import db from "../../../config/firebase/firebaseInit";
export const useChatsData = () => {
  const [rooms, setRooms] = useState<any>([]);
  const subscribe = () => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  };

  useEffect(() => {
    subscribe();
    return () => {
      subscribe();
    };
  }, []);
  return rooms;
};
