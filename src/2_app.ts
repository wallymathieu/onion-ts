import * as Domain from "./1_domain";

// 2. think about IO but not its implementation
export async function add(getX: () => Promise<number>, y: number) {
  const x = await getX();
  return Domain.add(x, y);
}
