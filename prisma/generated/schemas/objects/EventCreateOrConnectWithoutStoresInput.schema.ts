import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutStoresInputObjectSchema as EventCreateWithoutStoresInputObjectSchema } from './EventCreateWithoutStoresInput.schema';
import { EventUncheckedCreateWithoutStoresInputObjectSchema as EventUncheckedCreateWithoutStoresInputObjectSchema } from './EventUncheckedCreateWithoutStoresInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutStoresInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutStoresInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutStoresInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutStoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutStoresInput>;
export const EventCreateOrConnectWithoutStoresInputObjectZodSchema = makeSchema();
