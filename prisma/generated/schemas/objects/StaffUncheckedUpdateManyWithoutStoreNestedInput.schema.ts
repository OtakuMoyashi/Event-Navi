import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffCreateWithoutStoreInputObjectSchema as StaffCreateWithoutStoreInputObjectSchema } from './StaffCreateWithoutStoreInput.schema';
import { StaffUncheckedCreateWithoutStoreInputObjectSchema as StaffUncheckedCreateWithoutStoreInputObjectSchema } from './StaffUncheckedCreateWithoutStoreInput.schema';
import { StaffCreateOrConnectWithoutStoreInputObjectSchema as StaffCreateOrConnectWithoutStoreInputObjectSchema } from './StaffCreateOrConnectWithoutStoreInput.schema';
import { StaffUpsertWithWhereUniqueWithoutStoreInputObjectSchema as StaffUpsertWithWhereUniqueWithoutStoreInputObjectSchema } from './StaffUpsertWithWhereUniqueWithoutStoreInput.schema';
import { StaffCreateManyStoreInputEnvelopeObjectSchema as StaffCreateManyStoreInputEnvelopeObjectSchema } from './StaffCreateManyStoreInputEnvelope.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffUpdateWithWhereUniqueWithoutStoreInputObjectSchema as StaffUpdateWithWhereUniqueWithoutStoreInputObjectSchema } from './StaffUpdateWithWhereUniqueWithoutStoreInput.schema';
import { StaffUpdateManyWithWhereWithoutStoreInputObjectSchema as StaffUpdateManyWithWhereWithoutStoreInputObjectSchema } from './StaffUpdateManyWithWhereWithoutStoreInput.schema';
import { StaffScalarWhereInputObjectSchema as StaffScalarWhereInputObjectSchema } from './StaffScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StaffCreateWithoutStoreInputObjectSchema), z.lazy(() => StaffCreateWithoutStoreInputObjectSchema).array(), z.lazy(() => StaffUncheckedCreateWithoutStoreInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutStoreInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StaffCreateOrConnectWithoutStoreInputObjectSchema), z.lazy(() => StaffCreateOrConnectWithoutStoreInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StaffUpsertWithWhereUniqueWithoutStoreInputObjectSchema), z.lazy(() => StaffUpsertWithWhereUniqueWithoutStoreInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StaffCreateManyStoreInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StaffUpdateWithWhereUniqueWithoutStoreInputObjectSchema), z.lazy(() => StaffUpdateWithWhereUniqueWithoutStoreInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StaffUpdateManyWithWhereWithoutStoreInputObjectSchema), z.lazy(() => StaffUpdateManyWithWhereWithoutStoreInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StaffScalarWhereInputObjectSchema), z.lazy(() => StaffScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StaffUncheckedUpdateManyWithoutStoreNestedInputObjectSchema: z.ZodType<Prisma.StaffUncheckedUpdateManyWithoutStoreNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUncheckedUpdateManyWithoutStoreNestedInput>;
export const StaffUncheckedUpdateManyWithoutStoreNestedInputObjectZodSchema = makeSchema();
