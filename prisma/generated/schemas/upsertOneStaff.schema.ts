import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffSelectObjectSchema as StaffSelectObjectSchema } from './objects/StaffSelect.schema';
import { StaffIncludeObjectSchema as StaffIncludeObjectSchema } from './objects/StaffInclude.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './objects/StaffWhereUniqueInput.schema';
import { StaffCreateInputObjectSchema as StaffCreateInputObjectSchema } from './objects/StaffCreateInput.schema';
import { StaffUncheckedCreateInputObjectSchema as StaffUncheckedCreateInputObjectSchema } from './objects/StaffUncheckedCreateInput.schema';
import { StaffUpdateInputObjectSchema as StaffUpdateInputObjectSchema } from './objects/StaffUpdateInput.schema';
import { StaffUncheckedUpdateInputObjectSchema as StaffUncheckedUpdateInputObjectSchema } from './objects/StaffUncheckedUpdateInput.schema';

export const StaffUpsertOneSchema: z.ZodType<Prisma.StaffUpsertArgs> = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), where: StaffWhereUniqueInputObjectSchema, create: z.union([ StaffCreateInputObjectSchema, StaffUncheckedCreateInputObjectSchema ]), update: z.union([ StaffUpdateInputObjectSchema, StaffUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StaffUpsertArgs>;

export const StaffUpsertOneZodSchema = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), where: StaffWhereUniqueInputObjectSchema, create: z.union([ StaffCreateInputObjectSchema, StaffUncheckedCreateInputObjectSchema ]), update: z.union([ StaffUpdateInputObjectSchema, StaffUncheckedUpdateInputObjectSchema ]) }).strict();