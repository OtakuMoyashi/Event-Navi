import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutAttractionInputObjectSchema as TicketUpdateWithoutAttractionInputObjectSchema } from './TicketUpdateWithoutAttractionInput.schema';
import { TicketUncheckedUpdateWithoutAttractionInputObjectSchema as TicketUncheckedUpdateWithoutAttractionInputObjectSchema } from './TicketUncheckedUpdateWithoutAttractionInput.schema';
import { TicketCreateWithoutAttractionInputObjectSchema as TicketCreateWithoutAttractionInputObjectSchema } from './TicketCreateWithoutAttractionInput.schema';
import { TicketUncheckedCreateWithoutAttractionInputObjectSchema as TicketUncheckedCreateWithoutAttractionInputObjectSchema } from './TicketUncheckedCreateWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TicketUpdateWithoutAttractionInputObjectSchema), z.lazy(() => TicketUncheckedUpdateWithoutAttractionInputObjectSchema)]),
  create: z.union([z.lazy(() => TicketCreateWithoutAttractionInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutAttractionInputObjectSchema)])
}).strict();
export const TicketUpsertWithWhereUniqueWithoutAttractionInputObjectSchema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutAttractionInput>;
export const TicketUpsertWithWhereUniqueWithoutAttractionInputObjectZodSchema = makeSchema();
