import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreArgsObjectSchema as StoreArgsObjectSchema } from './StoreArgs.schema';
import { ItemArgsObjectSchema as ItemArgsObjectSchema } from './ItemArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  storeId: z.boolean().optional(),
  store: z.union([z.boolean(), z.lazy(() => StoreArgsObjectSchema)]).optional(),
  item: z.union([z.boolean(), z.lazy(() => ItemArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const FoodSelectObjectSchema: z.ZodType<Prisma.FoodSelect> = makeSchema() as unknown as z.ZodType<Prisma.FoodSelect>;
export const FoodSelectObjectZodSchema = makeSchema();
