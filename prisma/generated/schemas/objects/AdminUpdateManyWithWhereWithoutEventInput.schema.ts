import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminScalarWhereInputObjectSchema as AdminScalarWhereInputObjectSchema } from './AdminScalarWhereInput.schema';
import { AdminUpdateManyMutationInputObjectSchema as AdminUpdateManyMutationInputObjectSchema } from './AdminUpdateManyMutationInput.schema';
import { AdminUncheckedUpdateManyWithoutEventInputObjectSchema as AdminUncheckedUpdateManyWithoutEventInputObjectSchema } from './AdminUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AdminUpdateManyMutationInputObjectSchema), z.lazy(() => AdminUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const AdminUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.AdminUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateManyWithWhereWithoutEventInput>;
export const AdminUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
