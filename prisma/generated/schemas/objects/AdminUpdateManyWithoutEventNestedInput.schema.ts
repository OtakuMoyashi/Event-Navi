import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminCreateWithoutEventInputObjectSchema as AdminCreateWithoutEventInputObjectSchema } from './AdminCreateWithoutEventInput.schema';
import { AdminUncheckedCreateWithoutEventInputObjectSchema as AdminUncheckedCreateWithoutEventInputObjectSchema } from './AdminUncheckedCreateWithoutEventInput.schema';
import { AdminCreateOrConnectWithoutEventInputObjectSchema as AdminCreateOrConnectWithoutEventInputObjectSchema } from './AdminCreateOrConnectWithoutEventInput.schema';
import { AdminUpsertWithWhereUniqueWithoutEventInputObjectSchema as AdminUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './AdminUpsertWithWhereUniqueWithoutEventInput.schema';
import { AdminCreateManyEventInputEnvelopeObjectSchema as AdminCreateManyEventInputEnvelopeObjectSchema } from './AdminCreateManyEventInputEnvelope.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateWithWhereUniqueWithoutEventInputObjectSchema as AdminUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './AdminUpdateWithWhereUniqueWithoutEventInput.schema';
import { AdminUpdateManyWithWhereWithoutEventInputObjectSchema as AdminUpdateManyWithWhereWithoutEventInputObjectSchema } from './AdminUpdateManyWithWhereWithoutEventInput.schema';
import { AdminScalarWhereInputObjectSchema as AdminScalarWhereInputObjectSchema } from './AdminScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdminCreateWithoutEventInputObjectSchema), z.lazy(() => AdminCreateWithoutEventInputObjectSchema).array(), z.lazy(() => AdminUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AdminCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => AdminCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AdminUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => AdminUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AdminCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AdminUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => AdminUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AdminUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => AdminUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AdminScalarWhereInputObjectSchema), z.lazy(() => AdminScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AdminUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.AdminUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateManyWithoutEventNestedInput>;
export const AdminUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
