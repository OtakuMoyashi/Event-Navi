import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminWhereInputObjectSchema as AdminWhereInputObjectSchema } from './AdminWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AdminWhereInputObjectSchema).optional(),
  some: z.lazy(() => AdminWhereInputObjectSchema).optional(),
  none: z.lazy(() => AdminWhereInputObjectSchema).optional()
}).strict();
export const AdminListRelationFilterObjectSchema: z.ZodType<Prisma.AdminListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AdminListRelationFilter>;
export const AdminListRelationFilterObjectZodSchema = makeSchema();
