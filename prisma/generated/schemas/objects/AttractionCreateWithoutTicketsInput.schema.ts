import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateNestedOneWithoutAttractionInputObjectSchema as StoreCreateNestedOneWithoutAttractionInputObjectSchema } from './StoreCreateNestedOneWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  store: z.lazy(() => StoreCreateNestedOneWithoutAttractionInputObjectSchema)
}).strict();
export const AttractionCreateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.AttractionCreateWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionCreateWithoutTicketsInput>;
export const AttractionCreateWithoutTicketsInputObjectZodSchema = makeSchema();
