import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema';
import { StoreUpdateWithoutAttractionInputObjectSchema as StoreUpdateWithoutAttractionInputObjectSchema } from './StoreUpdateWithoutAttractionInput.schema';
import { StoreUncheckedUpdateWithoutAttractionInputObjectSchema as StoreUncheckedUpdateWithoutAttractionInputObjectSchema } from './StoreUncheckedUpdateWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StoreUpdateWithoutAttractionInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutAttractionInputObjectSchema)])
}).strict();
export const StoreUpdateToOneWithWhereWithoutAttractionInputObjectSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutAttractionInput>;
export const StoreUpdateToOneWithWhereWithoutAttractionInputObjectZodSchema = makeSchema();
