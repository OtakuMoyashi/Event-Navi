import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketWhereInputObjectSchema).optional()
}).strict();
export const AttractionCountOutputTypeCountTicketsArgsObjectSchema = makeSchema();
export const AttractionCountOutputTypeCountTicketsArgsObjectZodSchema = makeSchema();
