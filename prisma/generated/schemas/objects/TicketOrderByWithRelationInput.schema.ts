import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AttractionOrderByWithRelationInputObjectSchema as AttractionOrderByWithRelationInputObjectSchema } from './AttractionOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  index: SortOrderSchema.optional(),
  numberOfPeople: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  attractionId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  attraction: z.lazy(() => AttractionOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TicketOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TicketOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketOrderByWithRelationInput>;
export const TicketOrderByWithRelationInputObjectZodSchema = makeSchema();
