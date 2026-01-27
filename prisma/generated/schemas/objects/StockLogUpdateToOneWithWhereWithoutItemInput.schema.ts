import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './StockLogWhereInput.schema';
import { StockLogUpdateWithoutItemInputObjectSchema as StockLogUpdateWithoutItemInputObjectSchema } from './StockLogUpdateWithoutItemInput.schema';
import { StockLogUncheckedUpdateWithoutItemInputObjectSchema as StockLogUncheckedUpdateWithoutItemInputObjectSchema } from './StockLogUncheckedUpdateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StockLogWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StockLogUpdateWithoutItemInputObjectSchema), z.lazy(() => StockLogUncheckedUpdateWithoutItemInputObjectSchema)])
}).strict();
export const StockLogUpdateToOneWithWhereWithoutItemInputObjectSchema: z.ZodType<Prisma.StockLogUpdateToOneWithWhereWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogUpdateToOneWithWhereWithoutItemInput>;
export const StockLogUpdateToOneWithWhereWithoutItemInputObjectZodSchema = makeSchema();
