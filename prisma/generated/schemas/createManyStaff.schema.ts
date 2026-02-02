import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffCreateManyInputObjectSchema as StaffCreateManyInputObjectSchema } from './objects/StaffCreateManyInput.schema';

export const StaffCreateManySchema: z.ZodType<Prisma.StaffCreateManyArgs> = z.object({ data: z.union([ StaffCreateManyInputObjectSchema, z.array(StaffCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StaffCreateManyArgs>;

export const StaffCreateManyZodSchema = z.object({ data: z.union([ StaffCreateManyInputObjectSchema, z.array(StaffCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();