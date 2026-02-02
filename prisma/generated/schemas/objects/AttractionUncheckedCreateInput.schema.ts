import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketUncheckedCreateNestedManyWithoutAttractionInputObjectSchema as TicketUncheckedCreateNestedManyWithoutAttractionInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  storeId: z.string(),
  createdAt: z.coerce.date().optional(),
  tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutAttractionInputObjectSchema).optional()
}).strict();
export const AttractionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AttractionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUncheckedCreateInput>;
export const AttractionUncheckedCreateInputObjectZodSchema = makeSchema();
