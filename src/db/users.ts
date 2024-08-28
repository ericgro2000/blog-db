import { unstable_cache } from "next/cache";
import { cache } from "react";
import prisma from "./db";

export const getUsers = unstable_cache(
  cache(async () => {
    return prisma.user.findMany();
  }),
  ["users"]
);
