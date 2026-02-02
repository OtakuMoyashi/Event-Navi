import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminScalarWhereInputObjectSchema as AdminScalarWhereInputObjectSchema } from './AdminScalarWhereInput.schema';
import { AdminUpdateManyMutationInputObjectSchema as AdminUpdateManyMutationInputObjectSchema } from './AdminUpdateManyMutationInput.schema';
import { AdminUncheckedUpdateManyWithoutStoreInputObjectSchema as AdminUncheckedUpdateManyWithoutStoreInputObjectSchema } from './AdminUncheckedUpdateManyWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AdminUpdateManyMutationInputObjectSchema), z.lazy(() => AdminUncheckedUpdateManyWithoutStoreInputObjectSchema)])
}).strict();
export const AdminUpdateManyWithWhereWithoutStoreInputObjectSchema: z.ZodType<Prisma.AdminUpdateManyWithWhereWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateManyWithWhereWithoutStoreInput>;
export const AdminUpdateManyWithWhereWithoutStoreInputObjectZodSchema = makeSchema();
