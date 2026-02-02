import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionCountOutputTypeCountTicketsArgsObjectSchema as AttractionCountOutputTypeCountTicketsArgsObjectSchema } from './AttractionCountOutputTypeCountTicketsArgs.schema'

const makeSchema = () => z.object({
  tickets: z.union([z.boolean(), z.lazy(() => AttractionCountOutputTypeCountTicketsArgsObjectSchema)]).optional()
}).strict();
export const AttractionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AttractionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AttractionCountOutputTypeSelect>;
export const AttractionCountOutputTypeSelectObjectZodSchema = makeSchema();
