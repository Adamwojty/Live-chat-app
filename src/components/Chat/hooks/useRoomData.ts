import { useState, useEffect } from "react";
import db from "../../../config/firebase/firebaseInit";
export const useRoomData = (roomId: string) => {
  const [roomName, setRoomName] = useState<string>("");
  const [messages, setMessages] = useState<any>([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot: any) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);
  return { roomName, messages };
};
