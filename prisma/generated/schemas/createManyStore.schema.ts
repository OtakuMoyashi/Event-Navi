import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StoreCreateManyInputObjectSchema as StoreCreateManyInputObjectSchema } from './objects/StoreCreateManyInput.schema';

export const StoreCreateManySchema: z.ZodType<Prisma.StoreCreateManyArgs> = z.object({ data: z.union([ StoreCreateManyInputObjectSchema, z.array(StoreCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StoreCreateManyArgs>;

export const StoreCreateManyZodSchema = z.object({ data: z.union([ StoreCreateManyInputObjectSchema, z.array(StoreCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();