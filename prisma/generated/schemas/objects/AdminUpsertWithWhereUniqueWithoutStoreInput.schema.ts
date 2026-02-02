import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateWithoutStoreInputObjectSchema as AdminUpdateWithoutStoreInputObjectSchema } from './AdminUpdateWithoutStoreInput.schema';
import { AdminUncheckedUpdateWithoutStoreInputObjectSchema as AdminUncheckedUpdateWithoutStoreInputObjectSchema } from './AdminUncheckedUpdateWithoutStoreInput.schema';
import { AdminCreateWithoutStoreInputObjectSchema as AdminCreateWithoutStoreInputObjectSchema } from './AdminCreateWithoutStoreInput.schema';
import { AdminUncheckedCreateWithoutStoreInputObjectSchema as AdminUncheckedCreateWithoutStoreInputObjectSchema } from './AdminUncheckedCreateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AdminUpdateWithoutStoreInputObjectSchema), z.lazy(() => AdminUncheckedUpdateWithoutStoreInputObjectSchema)]),
  create: z.union([z.lazy(() => AdminCreateWithoutStoreInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutStoreInputObjectSchema)])
}).strict();
export const AdminUpsertWithWhereUniqueWithoutStoreInputObjectSchema: z.ZodType<Prisma.AdminUpsertWithWhereUniqueWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpsertWithWhereUniqueWithoutStoreInput>;
export const AdminUpsertWithWhereUniqueWithoutStoreInputObjectZodSchema = makeSchema();
