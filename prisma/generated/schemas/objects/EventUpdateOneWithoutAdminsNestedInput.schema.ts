import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventCreateWithoutAdminsInputObjectSchema as EventCreateWithoutAdminsInputObjectSchema } from './EventCreateWithoutAdminsInput.schema';
import { EventUncheckedCreateWithoutAdminsInputObjectSchema as EventUncheckedCreateWithoutAdminsInputObjectSchema } from './EventUncheckedCreateWithoutAdminsInput.schema';
import { EventCreateOrConnectWithoutAdminsInputObjectSchema as EventCreateOrConnectWithoutAdminsInputObjectSchema } from './EventCreateOrConnectWithoutAdminsInput.schema';
import { EventUpsertWithoutAdminsInputObjectSchema as EventUpsertWithoutAdminsInputObjectSchema } from './EventUpsertWithoutAdminsInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateToOneWithWhereWithoutAdminsInputObjectSchema as EventUpdateToOneWithWhereWithoutAdminsInputObjectSchema } from './EventUpdateToOneWithWhereWithoutAdminsInput.schema';
import { EventUpdateWithoutAdminsInputObjectSchema as EventUpdateWithoutAdminsInputObjectSchema } from './EventUpdateWithoutAdminsInput.schema';
import { EventUncheckedUpdateWithoutAdminsInputObjectSchema as EventUncheckedUpdateWithoutAdminsInputObjectSchema } from './EventUncheckedUpdateWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutAdminsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutAdminsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutAdminsInputObjectSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutAdminsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EventUpdateToOneWithWhereWithoutAdminsInputObjectSchema), z.lazy(() => EventUpdateWithoutAdminsInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutAdminsInputObjectSchema)]).optional()
}).strict();
export const EventUpdateOneWithoutAdminsNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateOneWithoutAdminsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateOneWithoutAdminsNestedInput>;
export const EventUpdateOneWithoutAdminsNestedInputObjectZodSchema = makeSchema();
