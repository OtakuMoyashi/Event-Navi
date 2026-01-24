import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreCreateWithoutAttractionInputObjectSchema as StoreCreateWithoutAttractionInputObjectSchema } from './StoreCreateWithoutAttractionInput.schema';
import { StoreUncheckedCreateWithoutAttractionInputObjectSchema as StoreUncheckedCreateWithoutAttractionInputObjectSchema } from './StoreUncheckedCreateWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StoreCreateWithoutAttractionInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutAttractionInputObjectSchema)])
}).strict();
export const StoreCreateOrConnectWithoutAttractionInputObjectSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateOrConnectWithoutAttractionInput>;
export const StoreCreateOrConnectWithoutAttractionInputObjectZodSchema = makeSchema();
