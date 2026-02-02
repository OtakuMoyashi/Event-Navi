import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutAttractionInputObjectSchema as StoreCreateWithoutAttractionInputObjectSchema } from './StoreCreateWithoutAttractionInput.schema';
import { StoreUncheckedCreateWithoutAttractionInputObjectSchema as StoreUncheckedCreateWithoutAttractionInputObjectSchema } from './StoreUncheckedCreateWithoutAttractionInput.schema';
import { StoreCreateOrConnectWithoutAttractionInputObjectSchema as StoreCreateOrConnectWithoutAttractionInputObjectSchema } from './StoreCreateOrConnectWithoutAttractionInput.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutAttractionInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutAttractionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoreCreateOrConnectWithoutAttractionInputObjectSchema).optional(),
  connect: z.lazy(() => StoreWhereUniqueInputObjectSchema).optional()
}).strict();
export const StoreCreateNestedOneWithoutAttractionInputObjectSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateNestedOneWithoutAttractionInput>;
export const StoreCreateNestedOneWithoutAttractionInputObjectZodSchema = makeSchema();
