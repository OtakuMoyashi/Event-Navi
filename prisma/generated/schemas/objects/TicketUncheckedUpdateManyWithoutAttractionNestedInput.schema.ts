import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketCreateWithoutAttractionInputObjectSchema as TicketCreateWithoutAttractionInputObjectSchema } from './TicketCreateWithoutAttractionInput.schema';
import { TicketUncheckedCreateWithoutAttractionInputObjectSchema as TicketUncheckedCreateWithoutAttractionInputObjectSchema } from './TicketUncheckedCreateWithoutAttractionInput.schema';
import { TicketCreateOrConnectWithoutAttractionInputObjectSchema as TicketCreateOrConnectWithoutAttractionInputObjectSchema } from './TicketCreateOrConnectWithoutAttractionInput.schema';
import { TicketUpsertWithWhereUniqueWithoutAttractionInputObjectSchema as TicketUpsertWithWhereUniqueWithoutAttractionInputObjectSchema } from './TicketUpsertWithWhereUniqueWithoutAttractionInput.schema';
import { TicketCreateManyAttractionInputEnvelopeObjectSchema as TicketCreateManyAttractionInputEnvelopeObjectSchema } from './TicketCreateManyAttractionInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithWhereUniqueWithoutAttractionInputObjectSchema as TicketUpdateWithWhereUniqueWithoutAttractionInputObjectSchema } from './TicketUpdateWithWhereUniqueWithoutAttractionInput.schema';
import { TicketUpdateManyWithWhereWithoutAttractionInputObjectSchema as TicketUpdateManyWithWhereWithoutAttractionInputObjectSchema } from './TicketUpdateManyWithWhereWithoutAttractionInput.schema';
import { TicketScalarWhereInputObjectSchema as TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketCreateWithoutAttractionInputObjectSchema), z.lazy(() => TicketCreateWithoutAttractionInputObjectSchema).array(), z.lazy(() => TicketUncheckedCreateWithoutAttractionInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutAttractionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketCreateOrConnectWithoutAttractionInputObjectSchema), z.lazy(() => TicketCreateOrConnectWithoutAttractionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TicketUpsertWithWhereUniqueWithoutAttractionInputObjectSchema), z.lazy(() => TicketUpsertWithWhereUniqueWithoutAttractionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketCreateManyAttractionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TicketUpdateWithWhereUniqueWithoutAttractionInputObjectSchema), z.lazy(() => TicketUpdateWithWhereUniqueWithoutAttractionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TicketUpdateManyWithWhereWithoutAttractionInputObjectSchema), z.lazy(() => TicketUpdateManyWithWhereWithoutAttractionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TicketScalarWhereInputObjectSchema), z.lazy(() => TicketScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TicketUncheckedUpdateManyWithoutAttractionNestedInputObjectSchema: z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutAttractionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutAttractionNestedInput>;
export const TicketUncheckedUpdateManyWithoutAttractionNestedInputObjectZodSchema = makeSchema();
