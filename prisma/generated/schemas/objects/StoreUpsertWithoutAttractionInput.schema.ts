import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreUpdateWithoutAttractionInputObjectSchema as StoreUpdateWithoutAttractionInputObjectSchema } from './StoreUpdateWithoutAttractionInput.schema';
import { StoreUncheckedUpdateWithoutAttractionInputObjectSchema as StoreUncheckedUpdateWithoutAttractionInputObjectSchema } from './StoreUncheckedUpdateWithoutAttractionInput.schema';
import { StoreCreateWithoutAttractionInputObjectSchema as StoreCreateWithoutAttractionInputObjectSchema } from './StoreCreateWithoutAttractionInput.schema';
import { StoreUncheckedCreateWithoutAttractionInputObjectSchema as StoreUncheckedCreateWithoutAttractionInputObjectSchema } from './StoreUncheckedCreateWithoutAttractionInput.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StoreUpdateWithoutAttractionInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutAttractionInputObjectSchema)]),
  create: z.union([z.lazy(() => StoreCreateWithoutAttractionInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutAttractionInputObjectSchema)]),
  where: z.lazy(() => StoreWhereInputObjectSchema).optional()
}).strict();
export const StoreUpsertWithoutAttractionInputObjectSchema: z.ZodType<Prisma.StoreUpsertWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpsertWithoutAttractionInput>;
export const StoreUpsertWithoutAttractionInputObjectZodSchema = makeSchema();
