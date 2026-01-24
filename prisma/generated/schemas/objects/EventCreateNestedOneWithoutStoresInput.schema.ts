import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventCreateWithoutStoresInputObjectSchema as EventCreateWithoutStoresInputObjectSchema } from './EventCreateWithoutStoresInput.schema';
import { EventUncheckedCreateWithoutStoresInputObjectSchema as EventUncheckedCreateWithoutStoresInputObjectSchema } from './EventUncheckedCreateWithoutStoresInput.schema';
import { EventCreateOrConnectWithoutStoresInputObjectSchema as EventCreateOrConnectWithoutStoresInputObjectSchema } from './EventCreateOrConnectWithoutStoresInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutStoresInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutStoresInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutStoresInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional()
}).strict();
export const EventCreateNestedOneWithoutStoresInputObjectSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutStoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedOneWithoutStoresInput>;
export const EventCreateNestedOneWithoutStoresInputObjectZodSchema = makeSchema();
