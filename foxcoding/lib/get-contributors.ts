import * as fs from "fs/promises";
import * as path from "path";

export interface UserInfo {
  id: string;
  name: string;
  role: string;
  github: string;
  bio: string;
  tags: string[];
}

export async function getContributors(targetDir: string): Promise<UserInfo[]> {
  const contributors: UserInfo[] = [];
  try {
    const entries = await fs.readdir(targetDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const filePath = path.join(targetDir, entry.name, "card.json");
      const rawData = await fs.readFile(filePath, "utf-8");
      const contributorData = JSON.parse(rawData) as Omit<UserInfo, "id">;
      contributors.push({ ...contributorData, id: entry.name });
    }
  } catch (error) {
    console.error("Error reading directory: ", error);
  }
  return contributors.sort((a, b) => a.name.localeCompare(b.name));
}
