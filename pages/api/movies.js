import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("ecommerce");

       const movies = await db
           .collection("users")
           .find()
        //    .limit(10)
           .toArray();

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};
