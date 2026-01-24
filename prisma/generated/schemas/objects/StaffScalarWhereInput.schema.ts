import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const staffscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StaffScalarWhereInputObjectSchema), z.lazy(() => StaffScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StaffScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StaffScalarWhereInputObjectSchema), z.lazy(() => StaffScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  supabaseUserId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  storeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const StaffScalarWhereInputObjectSchema: z.ZodType<Prisma.StaffScalarWhereInput> = staffscalarwhereinputSchema as unknown as z.ZodType<Prisma.StaffScalarWhereInput>;
export const StaffScalarWhereInputObjectZodSchema = staffscalarwhereinputSchema;
