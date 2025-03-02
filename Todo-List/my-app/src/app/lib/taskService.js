import { db } from "./firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export const addTask = async (task) => {
  try {
    await addDoc(collection(db, "tasks"), task);
    console.log("Task added successfully!");
  } catch (error) {
    console.error("Error adding task:", error);
  }
};

export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
    console.log("Task deleted successfully!");
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
