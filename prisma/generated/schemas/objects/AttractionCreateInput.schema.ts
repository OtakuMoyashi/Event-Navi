import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateNestedOneWithoutAttractionInputObjectSchema as StoreCreateNestedOneWithoutAttractionInputObjectSchema } from './StoreCreateNestedOneWithoutAttractionInput.schema';
import { TicketCreateNestedManyWithoutAttractionInputObjectSchema as TicketCreateNestedManyWithoutAttractionInputObjectSchema } from './TicketCreateNestedManyWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  store: z.lazy(() => StoreCreateNestedOneWithoutAttractionInputObjectSchema),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutAttractionInputObjectSchema).optional()
}).strict();
export const AttractionCreateInputObjectSchema: z.ZodType<Prisma.AttractionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionCreateInput>;
export const AttractionCreateInputObjectZodSchema = makeSchema();
