import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateWithoutStoreInputObjectSchema as AdminUpdateWithoutStoreInputObjectSchema } from './AdminUpdateWithoutStoreInput.schema';
import { AdminUncheckedUpdateWithoutStoreInputObjectSchema as AdminUncheckedUpdateWithoutStoreInputObjectSchema } from './AdminUncheckedUpdateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AdminUpdateWithoutStoreInputObjectSchema), z.lazy(() => AdminUncheckedUpdateWithoutStoreInputObjectSchema)])
}).strict();
export const AdminUpdateWithWhereUniqueWithoutStoreInputObjectSchema: z.ZodType<Prisma.AdminUpdateWithWhereUniqueWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateWithWhereUniqueWithoutStoreInput>;
export const AdminUpdateWithWhereUniqueWithoutStoreInputObjectZodSchema = makeSchema();
