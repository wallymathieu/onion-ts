// 3. IO implementation
import fetch from "node-fetch";

export async function getX(apiUrl: string): Promise<number> {
  const response = await fetch(apiUrl, { method: "GET" });
  const data = await response.json();
  if (response.ok) {
    return data as number;
  } else {
    return Promise.reject(`Got an error response ${JSON.stringify(data)}`);
  }
}

export function getConfigurationUrl(): string {
  throw new Error("Function not implemented.");
}
