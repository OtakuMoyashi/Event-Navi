import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreArgsObjectSchema as StoreArgsObjectSchema } from './StoreArgs.schema';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { AttractionCountOutputTypeArgsObjectSchema as AttractionCountOutputTypeArgsObjectSchema } from './AttractionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  storeId: z.boolean().optional(),
  store: z.union([z.boolean(), z.lazy(() => StoreArgsObjectSchema)]).optional(),
  tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => AttractionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AttractionSelectObjectSchema: z.ZodType<Prisma.AttractionSelect> = makeSchema() as unknown as z.ZodType<Prisma.AttractionSelect>;
export const AttractionSelectObjectZodSchema = makeSchema();
