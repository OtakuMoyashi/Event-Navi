import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketScalarWhereInputObjectSchema as TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';
import { TicketUpdateManyMutationInputObjectSchema as TicketUpdateManyMutationInputObjectSchema } from './TicketUpdateManyMutationInput.schema';
import { TicketUncheckedUpdateManyWithoutAttractionInputObjectSchema as TicketUncheckedUpdateManyWithoutAttractionInputObjectSchema } from './TicketUncheckedUpdateManyWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TicketUpdateManyMutationInputObjectSchema), z.lazy(() => TicketUncheckedUpdateManyWithoutAttractionInputObjectSchema)])
}).strict();
export const TicketUpdateManyWithWhereWithoutAttractionInputObjectSchema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutAttractionInput>;
export const TicketUpdateManyWithWhereWithoutAttractionInputObjectZodSchema = makeSchema();
