import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffSelectObjectSchema as StaffSelectObjectSchema } from './objects/StaffSelect.schema';
import { StaffCreateManyInputObjectSchema as StaffCreateManyInputObjectSchema } from './objects/StaffCreateManyInput.schema';

export const StaffCreateManyAndReturnSchema: z.ZodType<Prisma.StaffCreateManyAndReturnArgs> = z.object({ select: StaffSelectObjectSchema.optional(), data: z.union([ StaffCreateManyInputObjectSchema, z.array(StaffCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StaffCreateManyAndReturnArgs>;

export const StaffCreateManyAndReturnZodSchema = z.object({ select: StaffSelectObjectSchema.optional(), data: z.union([ StaffCreateManyInputObjectSchema, z.array(StaffCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();