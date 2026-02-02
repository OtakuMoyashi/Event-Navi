import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketCreateManyAttractionInputObjectSchema as TicketCreateManyAttractionInputObjectSchema } from './TicketCreateManyAttractionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TicketCreateManyAttractionInputObjectSchema), z.lazy(() => TicketCreateManyAttractionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TicketCreateManyAttractionInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketCreateManyAttractionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateManyAttractionInputEnvelope>;
export const TicketCreateManyAttractionInputEnvelopeObjectZodSchema = makeSchema();
