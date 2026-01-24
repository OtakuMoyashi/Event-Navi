import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketCreateNestedManyWithoutAttractionInputObjectSchema as TicketCreateNestedManyWithoutAttractionInputObjectSchema } from './TicketCreateNestedManyWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutAttractionInputObjectSchema).optional()
}).strict();
export const AttractionCreateWithoutStoreInputObjectSchema: z.ZodType<Prisma.AttractionCreateWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionCreateWithoutStoreInput>;
export const AttractionCreateWithoutStoreInputObjectZodSchema = makeSchema();
