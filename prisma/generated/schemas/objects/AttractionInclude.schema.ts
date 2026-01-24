import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreArgsObjectSchema as StoreArgsObjectSchema } from './StoreArgs.schema';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { AttractionCountOutputTypeArgsObjectSchema as AttractionCountOutputTypeArgsObjectSchema } from './AttractionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  store: z.union([z.boolean(), z.lazy(() => StoreArgsObjectSchema)]).optional(),
  tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AttractionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AttractionIncludeObjectSchema: z.ZodType<Prisma.AttractionInclude> = makeSchema() as unknown as z.ZodType<Prisma.AttractionInclude>;
export const AttractionIncludeObjectZodSchema = makeSchema();
