import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StoreSelectObjectSchema as StoreSelectObjectSchema } from './objects/StoreSelect.schema';
import { StoreCreateManyInputObjectSchema as StoreCreateManyInputObjectSchema } from './objects/StoreCreateManyInput.schema';

export const StoreCreateManyAndReturnSchema: z.ZodType<Prisma.StoreCreateManyAndReturnArgs> = z.object({ select: StoreSelectObjectSchema.optional(), data: z.union([ StoreCreateManyInputObjectSchema, z.array(StoreCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StoreCreateManyAndReturnArgs>;

export const StoreCreateManyAndReturnZodSchema = z.object({ select: StoreSelectObjectSchema.optional(), data: z.union([ StoreCreateManyInputObjectSchema, z.array(StoreCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();