// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
import path from "path";

export type Data = {
  id: number,
  name: string,
  title: string,
  image: string,
  highlight: string,
}

// build path to API - could go without it here, but useful with larger apps.
export function buildPath() {
    return path.join(process.cwd(), "data", "data.json");
}

// extract data from filepath to API.
export function extractData(filePath: string) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    return data;
}

// handle response from API
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = buildPath();
  const data = extractData(filePath);
  res.status(200).json(data)
}
