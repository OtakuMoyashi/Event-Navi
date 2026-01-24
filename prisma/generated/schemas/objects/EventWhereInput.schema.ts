import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StoreListRelationFilterObjectSchema as StoreListRelationFilterObjectSchema } from './StoreListRelationFilter.schema';
import { AdminListRelationFilterObjectSchema as AdminListRelationFilterObjectSchema } from './AdminListRelationFilter.schema'

const eventwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EventWhereInputObjectSchema), z.lazy(() => EventWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventWhereInputObjectSchema), z.lazy(() => EventWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  startedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  finishedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  stores: z.lazy(() => StoreListRelationFilterObjectSchema).optional(),
  admins: z.lazy(() => AdminListRelationFilterObjectSchema).optional()
}).strict();
export const EventWhereInputObjectSchema: z.ZodType<Prisma.EventWhereInput> = eventwhereinputSchema as unknown as z.ZodType<Prisma.EventWhereInput>;
export const EventWhereInputObjectZodSchema = eventwhereinputSchema;
