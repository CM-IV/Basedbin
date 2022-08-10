import { Deta } from "deta";
import * as dotenv from "dotenv";

dotenv.config();

const deta = Deta(process.env.DB_KEY);

export const db = deta.Base("pastebins");