import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StoreScalarRelationFilterObjectSchema as StoreScalarRelationFilterObjectSchema } from './StoreScalarRelationFilter.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema'

const staffwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StaffWhereInputObjectSchema), z.lazy(() => StaffWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StaffWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StaffWhereInputObjectSchema), z.lazy(() => StaffWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  supabaseUserId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  storeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  store: z.union([z.lazy(() => StoreScalarRelationFilterObjectSchema), z.lazy(() => StoreWhereInputObjectSchema)]).optional()
}).strict();
export const StaffWhereInputObjectSchema: z.ZodType<Prisma.StaffWhereInput> = staffwhereinputSchema as unknown as z.ZodType<Prisma.StaffWhereInput>;
export const StaffWhereInputObjectZodSchema = staffwhereinputSchema;
