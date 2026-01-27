import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogCreateWithoutItemInputObjectSchema as StockLogCreateWithoutItemInputObjectSchema } from './StockLogCreateWithoutItemInput.schema';
import { StockLogUncheckedCreateWithoutItemInputObjectSchema as StockLogUncheckedCreateWithoutItemInputObjectSchema } from './StockLogUncheckedCreateWithoutItemInput.schema';
import { StockLogCreateOrConnectWithoutItemInputObjectSchema as StockLogCreateOrConnectWithoutItemInputObjectSchema } from './StockLogCreateOrConnectWithoutItemInput.schema';
import { StockLogWhereUniqueInputObjectSchema as StockLogWhereUniqueInputObjectSchema } from './StockLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StockLogCreateWithoutItemInputObjectSchema), z.lazy(() => StockLogUncheckedCreateWithoutItemInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StockLogCreateOrConnectWithoutItemInputObjectSchema).optional(),
  connect: z.lazy(() => StockLogWhereUniqueInputObjectSchema).optional()
}).strict();
export const StockLogCreateNestedOneWithoutItemInputObjectSchema: z.ZodType<Prisma.StockLogCreateNestedOneWithoutItemInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogCreateNestedOneWithoutItemInput>;
export const StockLogCreateNestedOneWithoutItemInputObjectZodSchema = makeSchema();
