import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StaffWhereInputObjectSchema).optional(),
  some: z.lazy(() => StaffWhereInputObjectSchema).optional(),
  none: z.lazy(() => StaffWhereInputObjectSchema).optional()
}).strict();
export const StaffListRelationFilterObjectSchema: z.ZodType<Prisma.StaffListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StaffListRelationFilter>;
export const StaffListRelationFilterObjectZodSchema = makeSchema();
