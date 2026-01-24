import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StoreSelectObjectSchema as StoreSelectObjectSchema } from './objects/StoreSelect.schema';
import { StoreIncludeObjectSchema as StoreIncludeObjectSchema } from './objects/StoreInclude.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './objects/StoreWhereUniqueInput.schema';
import { StoreCreateInputObjectSchema as StoreCreateInputObjectSchema } from './objects/StoreCreateInput.schema';
import { StoreUncheckedCreateInputObjectSchema as StoreUncheckedCreateInputObjectSchema } from './objects/StoreUncheckedCreateInput.schema';
import { StoreUpdateInputObjectSchema as StoreUpdateInputObjectSchema } from './objects/StoreUpdateInput.schema';
import { StoreUncheckedUpdateInputObjectSchema as StoreUncheckedUpdateInputObjectSchema } from './objects/StoreUncheckedUpdateInput.schema';

export const StoreUpsertOneSchema: z.ZodType<Prisma.StoreUpsertArgs> = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), where: StoreWhereUniqueInputObjectSchema, create: z.union([ StoreCreateInputObjectSchema, StoreUncheckedCreateInputObjectSchema ]), update: z.union([ StoreUpdateInputObjectSchema, StoreUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StoreUpsertArgs>;

export const StoreUpsertOneZodSchema = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), where: StoreWhereUniqueInputObjectSchema, create: z.union([ StoreCreateInputObjectSchema, StoreUncheckedCreateInputObjectSchema ]), update: z.union([ StoreUpdateInputObjectSchema, StoreUncheckedUpdateInputObjectSchema ]) }).strict();