// // import { MongoClient } from 'mongodb';

// import axios from "axios";

// const uri = 'http://0.0.0.0:4000'; // Replace with your MongoDB connection string

// export async function getProducts() {


//   const response=await fetch(`${uri}/api/v1`)
//   const json=await response.json()
//   return json
// }



// // api.js


// // export const getProducts = async () => {
// //   try {
// //     const response = await axios.get(uri);
// //     return response.data;
// //   } catch (error) {
// //     console.error(error);
// //     return null;
// //   }
// // };

import axios from "axios";

const apiUrl = "http://0.0.0.0:4000/api/v1"; // Replace with your API endpoint URL

export async function getProducts() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}