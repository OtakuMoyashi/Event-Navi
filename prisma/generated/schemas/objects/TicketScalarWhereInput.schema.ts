import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumTicketStatusFilterObjectSchema as EnumTicketStatusFilterObjectSchema } from './EnumTicketStatusFilter.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const ticketscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketScalarWhereInputObjectSchema), z.lazy(() => TicketScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketScalarWhereInputObjectSchema), z.lazy(() => TicketScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  index: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  numberOfPeople: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumTicketStatusFilterObjectSchema), TicketStatusSchema]).optional(),
  attractionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TicketScalarWhereInputObjectSchema: z.ZodType<Prisma.TicketScalarWhereInput> = ticketscalarwhereinputSchema as unknown as z.ZodType<Prisma.TicketScalarWhereInput>;
export const TicketScalarWhereInputObjectZodSchema = ticketscalarwhereinputSchema;
