import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffScalarWhereInputObjectSchema as StaffScalarWhereInputObjectSchema } from './StaffScalarWhereInput.schema';
import { StaffUpdateManyMutationInputObjectSchema as StaffUpdateManyMutationInputObjectSchema } from './StaffUpdateManyMutationInput.schema';
import { StaffUncheckedUpdateManyWithoutStoreInputObjectSchema as StaffUncheckedUpdateManyWithoutStoreInputObjectSchema } from './StaffUncheckedUpdateManyWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StaffUpdateManyMutationInputObjectSchema), z.lazy(() => StaffUncheckedUpdateManyWithoutStoreInputObjectSchema)])
}).strict();
export const StaffUpdateManyWithWhereWithoutStoreInputObjectSchema: z.ZodType<Prisma.StaffUpdateManyWithWhereWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateManyWithWhereWithoutStoreInput>;
export const StaffUpdateManyWithWhereWithoutStoreInputObjectZodSchema = makeSchema();
