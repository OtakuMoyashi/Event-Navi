import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketUncheckedCreateNestedManyWithoutAttractionInputObjectSchema as TicketUncheckedCreateNestedManyWithoutAttractionInputObjectSchema } from './TicketUncheckedCreateNestedManyWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tickets: z.lazy(() => TicketUncheckedCreateNestedManyWithoutAttractionInputObjectSchema).optional()
}).strict();
export const AttractionUncheckedCreateWithoutStoreInputObjectSchema: z.ZodType<Prisma.AttractionUncheckedCreateWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUncheckedCreateWithoutStoreInput>;
export const AttractionUncheckedCreateWithoutStoreInputObjectZodSchema = makeSchema();
