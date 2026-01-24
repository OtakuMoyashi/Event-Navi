import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionArgsObjectSchema as AttractionArgsObjectSchema } from './AttractionArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  attraction: z.union([z.boolean(), z.lazy(() => AttractionArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const TicketIncludeObjectSchema: z.ZodType<Prisma.TicketInclude> = makeSchema() as unknown as z.ZodType<Prisma.TicketInclude>;
export const TicketIncludeObjectZodSchema = makeSchema();
