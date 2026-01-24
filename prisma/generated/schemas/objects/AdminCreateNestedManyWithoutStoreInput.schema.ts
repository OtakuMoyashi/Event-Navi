import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminCreateWithoutStoreInputObjectSchema as AdminCreateWithoutStoreInputObjectSchema } from './AdminCreateWithoutStoreInput.schema';
import { AdminUncheckedCreateWithoutStoreInputObjectSchema as AdminUncheckedCreateWithoutStoreInputObjectSchema } from './AdminUncheckedCreateWithoutStoreInput.schema';
import { AdminCreateOrConnectWithoutStoreInputObjectSchema as AdminCreateOrConnectWithoutStoreInputObjectSchema } from './AdminCreateOrConnectWithoutStoreInput.schema';
import { AdminCreateManyStoreInputEnvelopeObjectSchema as AdminCreateManyStoreInputEnvelopeObjectSchema } from './AdminCreateManyStoreInputEnvelope.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdminCreateWithoutStoreInputObjectSchema), z.lazy(() => AdminCreateWithoutStoreInputObjectSchema).array(), z.lazy(() => AdminUncheckedCreateWithoutStoreInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutStoreInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AdminCreateOrConnectWithoutStoreInputObjectSchema), z.lazy(() => AdminCreateOrConnectWithoutStoreInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AdminCreateManyStoreInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AdminCreateNestedManyWithoutStoreInputObjectSchema: z.ZodType<Prisma.AdminCreateNestedManyWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateNestedManyWithoutStoreInput>;
export const AdminCreateNestedManyWithoutStoreInputObjectZodSchema = makeSchema();
