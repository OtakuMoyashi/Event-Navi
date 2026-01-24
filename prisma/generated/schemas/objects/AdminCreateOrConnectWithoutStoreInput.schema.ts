import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminCreateWithoutStoreInputObjectSchema as AdminCreateWithoutStoreInputObjectSchema } from './AdminCreateWithoutStoreInput.schema';
import { AdminUncheckedCreateWithoutStoreInputObjectSchema as AdminUncheckedCreateWithoutStoreInputObjectSchema } from './AdminUncheckedCreateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AdminCreateWithoutStoreInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutStoreInputObjectSchema)])
}).strict();
export const AdminCreateOrConnectWithoutStoreInputObjectSchema: z.ZodType<Prisma.AdminCreateOrConnectWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateOrConnectWithoutStoreInput>;
export const AdminCreateOrConnectWithoutStoreInputObjectZodSchema = makeSchema();
