import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StockLogCreateWithoutItemInputObjectSchema as StockLogCreateWithoutItemInputObjectSchema } from './StockLogCreateWithoutItemInput.schema';
import { StockLogUncheckedCreateWithoutItemInputObjectSchema as StockLogUncheckedCreateWithoutItemInputObjectSchema } from './StockLogUncheckedCreateWithoutItemInput.schema';
import { StockLogCreateOrConnectWithoutItemInputObjectSchema as StockLogCreateOrConnectWithoutItemInputObjectSchema } from './StockLogCreateOrConnectWithoutItemInput.schema';
import { StockLogUpsertWithoutItemInputObjectSchema as StockLogUpsertWithoutItemInputObjectSchema } from './StockLogUpsertWithoutItemInput.schema';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './StockLogWhereInput.schema';
import { StockLogWhereUniqueInputObjectSchema as StockLogWhereUniqueInputObjectSchema } from './StockLogWhereUniqueInput.schema';
import { StockLogUpdateToOneWithWhereWithoutItemInputObjectSchema as StockLogUpdateToOneWithWhereWithoutItemInputObjectSchema } from './StockLogUpdateToOneWithWhereWithoutItemInput.schema';
import { StockLogUpdateWithoutItemInputObjectSchema as StockLogUpdateWithoutItemInputObjectSchema } from './StockLogUpdateWithoutItemInput.schema';
import { StockLogUncheckedUpdateWithoutItemInputObjectSchema as StockLogUncheckedUpdateWithoutItemInputObjectSchema } from './StockLogUncheckedUpdateWithoutItemInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StockLogCreateWithoutItemInputObjectSchema), z.lazy(() => StockLogUncheckedCreateWithoutItemInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StockLogCreateOrConnectWithoutItemInputObjectSchema).optional(),
  upsert: z.lazy(() => StockLogUpsertWithoutItemInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => StockLogWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => StockLogWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => StockLogWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StockLogUpdateToOneWithWhereWithoutItemInputObjectSchema), z.lazy(() => StockLogUpdateWithoutItemInputObjectSchema), z.lazy(() => StockLogUncheckedUpdateWithoutItemInputObjectSchema)]).optional()
}).strict();
export const StockLogUncheckedUpdateOneWithoutItemNestedInputObjectSchema: z.ZodType<Prisma.StockLogUncheckedUpdateOneWithoutItemNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StockLogUncheckedUpdateOneWithoutItemNestedInput>;
export const StockLogUncheckedUpdateOneWithoutItemNestedInputObjectZodSchema = makeSchema();
