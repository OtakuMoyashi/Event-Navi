import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const TicketWhereUniqueInputObjectSchema: z.ZodType<Prisma.TicketWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketWhereUniqueInput>;
export const TicketWhereUniqueInputObjectZodSchema = makeSchema();
