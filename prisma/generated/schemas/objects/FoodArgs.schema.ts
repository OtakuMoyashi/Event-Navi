import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { FoodSelectObjectSchema as FoodSelectObjectSchema } from './FoodSelect.schema';
import { FoodIncludeObjectSchema as FoodIncludeObjectSchema } from './FoodInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FoodSelectObjectSchema).optional(),
  include: z.lazy(() => FoodIncludeObjectSchema).optional()
}).strict();
export const FoodArgsObjectSchema = makeSchema();
export const FoodArgsObjectZodSchema = makeSchema();
