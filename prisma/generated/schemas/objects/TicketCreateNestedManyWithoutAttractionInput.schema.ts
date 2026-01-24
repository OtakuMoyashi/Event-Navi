import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketCreateWithoutAttractionInputObjectSchema as TicketCreateWithoutAttractionInputObjectSchema } from './TicketCreateWithoutAttractionInput.schema';
import { TicketUncheckedCreateWithoutAttractionInputObjectSchema as TicketUncheckedCreateWithoutAttractionInputObjectSchema } from './TicketUncheckedCreateWithoutAttractionInput.schema';
import { TicketCreateOrConnectWithoutAttractionInputObjectSchema as TicketCreateOrConnectWithoutAttractionInputObjectSchema } from './TicketCreateOrConnectWithoutAttractionInput.schema';
import { TicketCreateManyAttractionInputEnvelopeObjectSchema as TicketCreateManyAttractionInputEnvelopeObjectSchema } from './TicketCreateManyAttractionInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketCreateWithoutAttractionInputObjectSchema), z.lazy(() => TicketCreateWithoutAttractionInputObjectSchema).array(), z.lazy(() => TicketUncheckedCreateWithoutAttractionInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutAttractionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketCreateOrConnectWithoutAttractionInputObjectSchema), z.lazy(() => TicketCreateOrConnectWithoutAttractionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketCreateManyAttractionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TicketCreateNestedManyWithoutAttractionInputObjectSchema: z.ZodType<Prisma.TicketCreateNestedManyWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateNestedManyWithoutAttractionInput>;
export const TicketCreateNestedManyWithoutAttractionInputObjectZodSchema = makeSchema();
