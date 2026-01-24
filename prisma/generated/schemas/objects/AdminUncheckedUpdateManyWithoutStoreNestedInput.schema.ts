import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminCreateWithoutStoreInputObjectSchema as AdminCreateWithoutStoreInputObjectSchema } from './AdminCreateWithoutStoreInput.schema';
import { AdminUncheckedCreateWithoutStoreInputObjectSchema as AdminUncheckedCreateWithoutStoreInputObjectSchema } from './AdminUncheckedCreateWithoutStoreInput.schema';
import { AdminCreateOrConnectWithoutStoreInputObjectSchema as AdminCreateOrConnectWithoutStoreInputObjectSchema } from './AdminCreateOrConnectWithoutStoreInput.schema';
import { AdminUpsertWithWhereUniqueWithoutStoreInputObjectSchema as AdminUpsertWithWhereUniqueWithoutStoreInputObjectSchema } from './AdminUpsertWithWhereUniqueWithoutStoreInput.schema';
import { AdminCreateManyStoreInputEnvelopeObjectSchema as AdminCreateManyStoreInputEnvelopeObjectSchema } from './AdminCreateManyStoreInputEnvelope.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateWithWhereUniqueWithoutStoreInputObjectSchema as AdminUpdateWithWhereUniqueWithoutStoreInputObjectSchema } from './AdminUpdateWithWhereUniqueWithoutStoreInput.schema';
import { AdminUpdateManyWithWhereWithoutStoreInputObjectSchema as AdminUpdateManyWithWhereWithoutStoreInputObjectSchema } from './AdminUpdateManyWithWhereWithoutStoreInput.schema';
import { AdminScalarWhereInputObjectSchema as AdminScalarWhereInputObjectSchema } from './AdminScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdminCreateWithoutStoreInputObjectSchema), z.lazy(() => AdminCreateWithoutStoreInputObjectSchema).array(), z.lazy(() => AdminUncheckedCreateWithoutStoreInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutStoreInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AdminCreateOrConnectWithoutStoreInputObjectSchema), z.lazy(() => AdminCreateOrConnectWithoutStoreInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AdminUpsertWithWhereUniqueWithoutStoreInputObjectSchema), z.lazy(() => AdminUpsertWithWhereUniqueWithoutStoreInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AdminCreateManyStoreInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AdminUpdateWithWhereUniqueWithoutStoreInputObjectSchema), z.lazy(() => AdminUpdateWithWhereUniqueWithoutStoreInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AdminUpdateManyWithWhereWithoutStoreInputObjectSchema), z.lazy(() => AdminUpdateManyWithWhereWithoutStoreInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AdminScalarWhereInputObjectSchema), z.lazy(() => AdminScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AdminUncheckedUpdateManyWithoutStoreNestedInputObjectSchema: z.ZodType<Prisma.AdminUncheckedUpdateManyWithoutStoreNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUncheckedUpdateManyWithoutStoreNestedInput>;
export const AdminUncheckedUpdateManyWithoutStoreNestedInputObjectZodSchema = makeSchema();
