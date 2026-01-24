import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventUpdateWithoutAdminsInputObjectSchema as EventUpdateWithoutAdminsInputObjectSchema } from './EventUpdateWithoutAdminsInput.schema';
import { EventUncheckedUpdateWithoutAdminsInputObjectSchema as EventUncheckedUpdateWithoutAdminsInputObjectSchema } from './EventUncheckedUpdateWithoutAdminsInput.schema';
import { EventCreateWithoutAdminsInputObjectSchema as EventCreateWithoutAdminsInputObjectSchema } from './EventCreateWithoutAdminsInput.schema';
import { EventUncheckedCreateWithoutAdminsInputObjectSchema as EventUncheckedCreateWithoutAdminsInputObjectSchema } from './EventUncheckedCreateWithoutAdminsInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EventUpdateWithoutAdminsInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutAdminsInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutAdminsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutAdminsInputObjectSchema)]),
  where: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const EventUpsertWithoutAdminsInputObjectSchema: z.ZodType<Prisma.EventUpsertWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithoutAdminsInput>;
export const EventUpsertWithoutAdminsInputObjectZodSchema = makeSchema();
