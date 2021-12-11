import dotenv from "dotenv"
import express, { Request, Response } from "express"
import mongoose, { ConnectOptions } from "mongoose"

import roomRoutes from "./routes/room"

dotenv.config()

const app = express();

app.use(express.json());

// Connect to MongoDB
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions, (err) => {
    if (err) throw err;
    console.log("MongoDB Connected");
  })
} else {
  console.log("MongoDB URI not found");
}


app.use("/api/rooms", roomRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World")
})

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})