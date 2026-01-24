import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventCreateWithoutStoresInputObjectSchema as EventCreateWithoutStoresInputObjectSchema } from './EventCreateWithoutStoresInput.schema';
import { EventUncheckedCreateWithoutStoresInputObjectSchema as EventUncheckedCreateWithoutStoresInputObjectSchema } from './EventUncheckedCreateWithoutStoresInput.schema';
import { EventCreateOrConnectWithoutStoresInputObjectSchema as EventCreateOrConnectWithoutStoresInputObjectSchema } from './EventCreateOrConnectWithoutStoresInput.schema';
import { EventUpsertWithoutStoresInputObjectSchema as EventUpsertWithoutStoresInputObjectSchema } from './EventUpsertWithoutStoresInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateToOneWithWhereWithoutStoresInputObjectSchema as EventUpdateToOneWithWhereWithoutStoresInputObjectSchema } from './EventUpdateToOneWithWhereWithoutStoresInput.schema';
import { EventUpdateWithoutStoresInputObjectSchema as EventUpdateWithoutStoresInputObjectSchema } from './EventUpdateWithoutStoresInput.schema';
import { EventUncheckedUpdateWithoutStoresInputObjectSchema as EventUncheckedUpdateWithoutStoresInputObjectSchema } from './EventUncheckedUpdateWithoutStoresInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutStoresInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutStoresInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutStoresInputObjectSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutStoresInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EventUpdateToOneWithWhereWithoutStoresInputObjectSchema), z.lazy(() => EventUpdateWithoutStoresInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutStoresInputObjectSchema)]).optional()
}).strict();
export const EventUpdateOneWithoutStoresNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateOneWithoutStoresNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateOneWithoutStoresNestedInput>;
export const EventUpdateOneWithoutStoresNestedInputObjectZodSchema = makeSchema();
