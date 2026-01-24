import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  endpoint: z.string().optional()
}).strict();
export const PushSubscriptionWhereUniqueInputObjectSchema: z.ZodType<Prisma.PushSubscriptionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionWhereUniqueInput>;
export const PushSubscriptionWhereUniqueInputObjectZodSchema = makeSchema();
