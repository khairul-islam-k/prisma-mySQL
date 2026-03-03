import express from "express";
import cors from "cors";
import prisma from "./prisma";

const app = express();

app.use(cors());
app.use(express.json());


app.post('/create',async (req, res) => {
    const data = req.body;
    const result = await prisma.user.create({
        data,
    })
    res.send(result);
})


app.get("/", async (req, res) => {
  res.send('server is running');
});

export default app;