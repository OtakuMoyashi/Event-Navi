import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumTicketStatusFilterObjectSchema as EnumTicketStatusFilterObjectSchema } from './EnumTicketStatusFilter.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AttractionScalarRelationFilterObjectSchema as AttractionScalarRelationFilterObjectSchema } from './AttractionScalarRelationFilter.schema';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './AttractionWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const ticketwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketWhereInputObjectSchema), z.lazy(() => TicketWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketWhereInputObjectSchema), z.lazy(() => TicketWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  index: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  numberOfPeople: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumTicketStatusFilterObjectSchema), TicketStatusSchema]).optional(),
  attractionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  attraction: z.union([z.lazy(() => AttractionScalarRelationFilterObjectSchema), z.lazy(() => AttractionWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const TicketWhereInputObjectSchema: z.ZodType<Prisma.TicketWhereInput> = ticketwhereinputSchema as unknown as z.ZodType<Prisma.TicketWhereInput>;
export const TicketWhereInputObjectZodSchema = ticketwhereinputSchema;
