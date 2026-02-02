import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutAttractionInputObjectSchema as TicketUpdateWithoutAttractionInputObjectSchema } from './TicketUpdateWithoutAttractionInput.schema';
import { TicketUncheckedUpdateWithoutAttractionInputObjectSchema as TicketUncheckedUpdateWithoutAttractionInputObjectSchema } from './TicketUncheckedUpdateWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TicketUpdateWithoutAttractionInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutAttractionInputObjectSchema)])
}).strict();
export const TicketUpdateWithWhereUniqueWithoutAttractionInputObjectSchema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutAttractionInput>;
export const TicketUpdateWithWhereUniqueWithoutAttractionInputObjectZodSchema = makeSchema();
