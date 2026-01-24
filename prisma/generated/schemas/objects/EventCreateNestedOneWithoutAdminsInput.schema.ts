import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventCreateWithoutAdminsInputObjectSchema as EventCreateWithoutAdminsInputObjectSchema } from './EventCreateWithoutAdminsInput.schema';
import { EventUncheckedCreateWithoutAdminsInputObjectSchema as EventUncheckedCreateWithoutAdminsInputObjectSchema } from './EventUncheckedCreateWithoutAdminsInput.schema';
import { EventCreateOrConnectWithoutAdminsInputObjectSchema as EventCreateOrConnectWithoutAdminsInputObjectSchema } from './EventCreateOrConnectWithoutAdminsInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutAdminsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutAdminsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutAdminsInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional()
}).strict();
export const EventCreateNestedOneWithoutAdminsInputObjectSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedOneWithoutAdminsInput>;
export const EventCreateNestedOneWithoutAdminsInputObjectZodSchema = makeSchema();
