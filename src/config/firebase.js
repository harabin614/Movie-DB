import Firebase from "firebase/app";
import config from "./firebaseConfig";
import "firebase/database";

const app = Firebase.initializeApp(config);
const database = app.database();
export default database;
