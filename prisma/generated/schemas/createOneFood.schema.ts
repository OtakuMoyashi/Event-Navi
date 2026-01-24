import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { FoodSelectObjectSchema as FoodSelectObjectSchema } from './objects/FoodSelect.schema';
import { FoodIncludeObjectSchema as FoodIncludeObjectSchema } from './objects/FoodInclude.schema';
import { FoodCreateInputObjectSchema as FoodCreateInputObjectSchema } from './objects/FoodCreateInput.schema';
import { FoodUncheckedCreateInputObjectSchema as FoodUncheckedCreateInputObjectSchema } from './objects/FoodUncheckedCreateInput.schema';

export const FoodCreateOneSchema: z.ZodType<Prisma.FoodCreateArgs> = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), data: z.union([FoodCreateInputObjectSchema, FoodUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FoodCreateArgs>;

export const FoodCreateOneZodSchema = z.object({ select: FoodSelectObjectSchema.optional(), include: FoodIncludeObjectSchema.optional(), data: z.union([FoodCreateInputObjectSchema, FoodUncheckedCreateInputObjectSchema]) }).strict();