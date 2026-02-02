import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventUpdateWithoutStoresInputObjectSchema as EventUpdateWithoutStoresInputObjectSchema } from './EventUpdateWithoutStoresInput.schema';
import { EventUncheckedUpdateWithoutStoresInputObjectSchema as EventUncheckedUpdateWithoutStoresInputObjectSchema } from './EventUncheckedUpdateWithoutStoresInput.schema';
import { EventCreateWithoutStoresInputObjectSchema as EventCreateWithoutStoresInputObjectSchema } from './EventCreateWithoutStoresInput.schema';
import { EventUncheckedCreateWithoutStoresInputObjectSchema as EventUncheckedCreateWithoutStoresInputObjectSchema } from './EventUncheckedCreateWithoutStoresInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EventUpdateWithoutStoresInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutStoresInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutStoresInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutStoresInputObjectSchema)]),
  where: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const EventUpsertWithoutStoresInputObjectSchema: z.ZodType<Prisma.EventUpsertWithoutStoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithoutStoresInput>;
export const EventUpsertWithoutStoresInputObjectZodSchema = makeSchema();
