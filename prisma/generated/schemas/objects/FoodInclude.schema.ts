import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreArgsObjectSchema as StoreArgsObjectSchema } from './StoreArgs.schema'

const makeSchema = () => z.object({
  store: z.union([z.boolean(), z.lazy(() => StoreArgsObjectSchema)]).optional()
}).strict();
export const FoodIncludeObjectSchema: z.ZodType<Prisma.FoodInclude> = makeSchema() as unknown as z.ZodType<Prisma.FoodInclude>;
export const FoodIncludeObjectZodSchema = makeSchema();
