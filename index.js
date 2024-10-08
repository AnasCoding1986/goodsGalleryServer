const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 5000;

// middlewire
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zdajqzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const productsCollection = client.db("GoodGallery").collection("products");

    app.get('/products', async (req, res) => {
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
      const skip = (page - 1) * limit;
  
      const productsCollection = client.db("GoodGallery").collection("products");
  
      const totalProducts = await productsCollection.countDocuments(); // Get total number of products
      const products = await productsCollection.find().skip(skip).limit(limit).toArray(); // Get products for the current page
  
      res.send({
          products,
          totalProducts,
          totalPages: Math.ceil(totalProducts / limit), // Calculate total pages
          currentPage: page,
      });
  });
  

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req,res) => {
    res.send("goodsGallery running")
})

app.listen(port, () => {
    console.log(`goodsGallery is running on port ${port}`);
    
})