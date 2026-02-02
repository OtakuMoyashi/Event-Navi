import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutAttractionInputObjectSchema as TicketCreateWithoutAttractionInputObjectSchema } from './TicketCreateWithoutAttractionInput.schema';
import { TicketUncheckedCreateWithoutAttractionInputObjectSchema as TicketUncheckedCreateWithoutAttractionInputObjectSchema } from './TicketUncheckedCreateWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TicketCreateWithoutAttractionInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutAttractionInputObjectSchema)])
}).strict();
export const TicketCreateOrConnectWithoutAttractionInputObjectSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateOrConnectWithoutAttractionInput>;
export const TicketCreateOrConnectWithoutAttractionInputObjectZodSchema = makeSchema();
