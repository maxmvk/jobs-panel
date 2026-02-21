import express, { Response } from 'express';
import cors from "cors";
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaPg({ connectionString });

export const prisma = new PrismaClient({
  adapter,
});

const app = express();

//middlewares
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/jobs', async (req: any, res: Response) => {
  const jobs = await prisma.job.findMany();
  res.json(jobs);
});

app.listen(3000);