import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionArgsObjectSchema as AttractionArgsObjectSchema } from './AttractionArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  index: z.boolean().optional(),
  numberOfPeople: z.boolean().optional(),
  status: z.boolean().optional(),
  attractionId: z.boolean().optional(),
  attraction: z.union([z.boolean(), z.lazy(() => AttractionArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const TicketSelectObjectSchema: z.ZodType<Prisma.TicketSelect> = makeSchema() as unknown as z.ZodType<Prisma.TicketSelect>;
export const TicketSelectObjectZodSchema = makeSchema();
