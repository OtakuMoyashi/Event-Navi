import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminCreateWithoutEventInputObjectSchema as AdminCreateWithoutEventInputObjectSchema } from './AdminCreateWithoutEventInput.schema';
import { AdminUncheckedCreateWithoutEventInputObjectSchema as AdminUncheckedCreateWithoutEventInputObjectSchema } from './AdminUncheckedCreateWithoutEventInput.schema';
import { AdminCreateOrConnectWithoutEventInputObjectSchema as AdminCreateOrConnectWithoutEventInputObjectSchema } from './AdminCreateOrConnectWithoutEventInput.schema';
import { AdminCreateManyEventInputEnvelopeObjectSchema as AdminCreateManyEventInputEnvelopeObjectSchema } from './AdminCreateManyEventInputEnvelope.schema';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AdminCreateWithoutEventInputObjectSchema), z.lazy(() => AdminCreateWithoutEventInputObjectSchema).array(), z.lazy(() => AdminUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AdminCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => AdminCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AdminCreateManyEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AdminWhereUniqueInputObjectSchema), z.lazy(() => AdminWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AdminCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.AdminCreateNestedManyWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateNestedManyWithoutEventInput>;
export const AdminCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
