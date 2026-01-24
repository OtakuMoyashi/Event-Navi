import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StoreSelectObjectSchema as StoreSelectObjectSchema } from './objects/StoreSelect.schema';
import { StoreIncludeObjectSchema as StoreIncludeObjectSchema } from './objects/StoreInclude.schema';
import { StoreCreateInputObjectSchema as StoreCreateInputObjectSchema } from './objects/StoreCreateInput.schema';
import { StoreUncheckedCreateInputObjectSchema as StoreUncheckedCreateInputObjectSchema } from './objects/StoreUncheckedCreateInput.schema';

export const StoreCreateOneSchema: z.ZodType<Prisma.StoreCreateArgs> = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), data: z.union([StoreCreateInputObjectSchema, StoreUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StoreCreateArgs>;

export const StoreCreateOneZodSchema = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), data: z.union([StoreCreateInputObjectSchema, StoreUncheckedCreateInputObjectSchema]) }).strict();