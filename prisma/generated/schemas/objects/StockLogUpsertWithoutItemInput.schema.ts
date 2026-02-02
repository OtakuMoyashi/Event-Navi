import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogUpdateWithoutItemInputObjectSchema as StockLogUpdateWithoutItemInputObjectSchema } from './StockLogUpdateWithoutItemInput.schema';
import { StockLogUncheckedUpdateWithoutItemInputObjectSchema as StockLogUncheckedUpdateWithoutItemInputObjectSchema } from './StockLogUncheckedUpdateWithoutItemInput.schema';
import { StockLogCreateWithoutItemInputObjectSchema as StockLogCreateWithoutItemInputObjectSchema } from './StockLogCreateWithoutItemInput.schema';
import { StockLogUncheckedCreateWithoutItemInputObjectSchema as StockLogUncheckedCreateWithoutItemInputObjectSchema } from './StockLogUncheckedCreateWithoutItemInput.schema';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './StockLogWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StockLogUpdateWithoutItemInputObjectSchema), z.lazy(() => StockLogUncheckedUpdateWithoutItemInputObjectSchema)]),
  create: z.union([z.lazy(() => StockLogCreateWithoutItemInputObjectSchema), z.lazy(() => StockLogUncheckedCreateWithoutItemInputObjectSchema)]),
  where: z.lazy(() => StockLogWhereInputObjectSchema).optional()
}).strict();
export const StockLogUpsertWithoutItemInputObjectSchema: z.ZodType<Prisma.StockLogUpsertWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogUpsertWithoutItemInput>;
export const StockLogUpsertWithoutItemInputObjectZodSchema = makeSchema();
