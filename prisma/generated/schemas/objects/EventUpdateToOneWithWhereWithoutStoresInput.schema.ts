import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventUpdateWithoutStoresInputObjectSchema as EventUpdateWithoutStoresInputObjectSchema } from './EventUpdateWithoutStoresInput.schema';
import { EventUncheckedUpdateWithoutStoresInputObjectSchema as EventUncheckedUpdateWithoutStoresInputObjectSchema } from './EventUncheckedUpdateWithoutStoresInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EventUpdateWithoutStoresInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutStoresInputObjectSchema)])
}).strict();
export const EventUpdateToOneWithWhereWithoutStoresInputObjectSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutStoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutStoresInput>;
export const EventUpdateToOneWithWhereWithoutStoresInputObjectZodSchema = makeSchema();
