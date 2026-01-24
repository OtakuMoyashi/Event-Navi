/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { StoreType } from "@/generated/prisma/enums";
import prisma from "@/lib/prisma";

export async function createStore(prevState: any, formData: FormData) {
  const slug = formData.get("slug") as string;
  const name = formData.get("name") as string;
  const storeType = formData.get("storeType") as StoreType;

  await prisma.store.create({
    data: {
      slug: slug,
      name: name,
      storeType: storeType,
    },
  });
}
