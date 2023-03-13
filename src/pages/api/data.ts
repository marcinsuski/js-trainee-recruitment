// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
import path from "path";

export type Data = {
  id: number,
  name: string,
  title: string,
  image: string,
}

export function buildPath() {
    return path.join(process.cwd(), "data", "data.json");
}

export function extractData(filePath: string) {
    const fileData: Data = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = buildPath();
  const data = extractData(filePath);
  res.status(200).json(data)
}
