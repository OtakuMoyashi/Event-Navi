import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffCreateWithoutStoreInputObjectSchema as StaffCreateWithoutStoreInputObjectSchema } from './StaffCreateWithoutStoreInput.schema';
import { StaffUncheckedCreateWithoutStoreInputObjectSchema as StaffUncheckedCreateWithoutStoreInputObjectSchema } from './StaffUncheckedCreateWithoutStoreInput.schema';
import { StaffCreateOrConnectWithoutStoreInputObjectSchema as StaffCreateOrConnectWithoutStoreInputObjectSchema } from './StaffCreateOrConnectWithoutStoreInput.schema';
import { StaffCreateManyStoreInputEnvelopeObjectSchema as StaffCreateManyStoreInputEnvelopeObjectSchema } from './StaffCreateManyStoreInputEnvelope.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StaffCreateWithoutStoreInputObjectSchema), z.lazy(() => StaffCreateWithoutStoreInputObjectSchema).array(), z.lazy(() => StaffUncheckedCreateWithoutStoreInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutStoreInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StaffCreateOrConnectWithoutStoreInputObjectSchema), z.lazy(() => StaffCreateOrConnectWithoutStoreInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StaffCreateManyStoreInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StaffWhereUniqueInputObjectSchema), z.lazy(() => StaffWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StaffUncheckedCreateNestedManyWithoutStoreInputObjectSchema: z.ZodType<Prisma.StaffUncheckedCreateNestedManyWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUncheckedCreateNestedManyWithoutStoreInput>;
export const StaffUncheckedCreateNestedManyWithoutStoreInputObjectZodSchema = makeSchema();
