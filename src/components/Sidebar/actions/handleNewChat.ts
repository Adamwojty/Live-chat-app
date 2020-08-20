import db from "../../../config/firebase/firebaseInit";

export const handleNewChat = async () => {
  const name = await prompt("Please enter name for chat");
  if (name) {
    await db.collection("rooms").add({
      name,
    });
  } else return;
};
