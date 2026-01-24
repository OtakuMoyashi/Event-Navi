import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumTicketStatusWithAggregatesFilterObjectSchema as EnumTicketStatusWithAggregatesFilterObjectSchema } from './EnumTicketStatusWithAggregatesFilter.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const ticketscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  index: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  numberOfPeople: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumTicketStatusWithAggregatesFilterObjectSchema), TicketStatusSchema]).optional(),
  attractionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TicketScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput> = ticketscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput>;
export const TicketScalarWhereWithAggregatesInputObjectZodSchema = ticketscalarwherewithaggregatesinputSchema;
