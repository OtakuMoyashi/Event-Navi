import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventUpdateWithoutAdminsInputObjectSchema as EventUpdateWithoutAdminsInputObjectSchema } from './EventUpdateWithoutAdminsInput.schema';
import { EventUncheckedUpdateWithoutAdminsInputObjectSchema as EventUncheckedUpdateWithoutAdminsInputObjectSchema } from './EventUncheckedUpdateWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EventUpdateWithoutAdminsInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutAdminsInputObjectSchema)])
}).strict();
export const EventUpdateToOneWithWhereWithoutAdminsInputObjectSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutAdminsInput>;
export const EventUpdateToOneWithWhereWithoutAdminsInputObjectZodSchema = makeSchema();
