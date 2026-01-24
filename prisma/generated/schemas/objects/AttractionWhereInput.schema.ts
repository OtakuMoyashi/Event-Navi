import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StoreScalarRelationFilterObjectSchema as StoreScalarRelationFilterObjectSchema } from './StoreScalarRelationFilter.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema';
import { TicketListRelationFilterObjectSchema as TicketListRelationFilterObjectSchema } from './TicketListRelationFilter.schema'

const attractionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AttractionWhereInputObjectSchema), z.lazy(() => AttractionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AttractionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AttractionWhereInputObjectSchema), z.lazy(() => AttractionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  storeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  store: z.union([z.lazy(() => StoreScalarRelationFilterObjectSchema), z.lazy(() => StoreWhereInputObjectSchema)]).optional(),
  tickets: z.lazy(() => TicketListRelationFilterObjectSchema).optional()
}).strict();
export const AttractionWhereInputObjectSchema: z.ZodType<Prisma.AttractionWhereInput> = attractionwhereinputSchema as unknown as z.ZodType<Prisma.AttractionWhereInput>;
export const AttractionWhereInputObjectZodSchema = attractionwhereinputSchema;
