import { useState, useEffect, useCallback } from "react";
import db from "../../../config/firebase/firebaseInit";
export const useLatestMsg = (roomId: string | undefined) => {
  const [message, setMessage] = useState<any>([]);

  const handleLatestMsg = useCallback(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(snapshot.docs.map((msg) => msg.data()))
        );
    }
  }, [roomId]);
  useEffect(() => {
    handleLatestMsg();
  }, [handleLatestMsg]);
  return message;
};
