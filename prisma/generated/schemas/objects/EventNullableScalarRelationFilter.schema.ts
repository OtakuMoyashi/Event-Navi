import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => EventWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => EventWhereInputObjectSchema).optional().nullable()
}).strict();
export const EventNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.EventNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EventNullableScalarRelationFilter>;
export const EventNullableScalarRelationFilterObjectZodSchema = makeSchema();
