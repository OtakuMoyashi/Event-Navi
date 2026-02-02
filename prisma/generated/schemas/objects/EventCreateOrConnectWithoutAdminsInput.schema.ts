import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutAdminsInputObjectSchema as EventCreateWithoutAdminsInputObjectSchema } from './EventCreateWithoutAdminsInput.schema';
import { EventUncheckedCreateWithoutAdminsInputObjectSchema as EventUncheckedCreateWithoutAdminsInputObjectSchema } from './EventUncheckedCreateWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutAdminsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutAdminsInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutAdminsInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutAdminsInput>;
export const EventCreateOrConnectWithoutAdminsInputObjectZodSchema = makeSchema();
