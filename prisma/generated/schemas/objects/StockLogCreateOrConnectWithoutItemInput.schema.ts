import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogWhereUniqueInputObjectSchema as StockLogWhereUniqueInputObjectSchema } from './StockLogWhereUniqueInput.schema';
import { StockLogCreateWithoutItemInputObjectSchema as StockLogCreateWithoutItemInputObjectSchema } from './StockLogCreateWithoutItemInput.schema';
import { StockLogUncheckedCreateWithoutItemInputObjectSchema as StockLogUncheckedCreateWithoutItemInputObjectSchema } from './StockLogUncheckedCreateWithoutItemInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StockLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StockLogCreateWithoutItemInputObjectSchema), z.lazy(() => StockLogUncheckedCreateWithoutItemInputObjectSchema)])
}).strict();
export const StockLogCreateOrConnectWithoutItemInputObjectSchema: z.ZodType<Prisma.StockLogCreateOrConnectWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogCreateOrConnectWithoutItemInput>;
export const StockLogCreateOrConnectWithoutItemInputObjectZodSchema = makeSchema();
