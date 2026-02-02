import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffSelectObjectSchema as StaffSelectObjectSchema } from './objects/StaffSelect.schema';
import { StaffIncludeObjectSchema as StaffIncludeObjectSchema } from './objects/StaffInclude.schema';
import { StaffUpdateInputObjectSchema as StaffUpdateInputObjectSchema } from './objects/StaffUpdateInput.schema';
import { StaffUncheckedUpdateInputObjectSchema as StaffUncheckedUpdateInputObjectSchema } from './objects/StaffUncheckedUpdateInput.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './objects/StaffWhereUniqueInput.schema';

export const StaffUpdateOneSchema: z.ZodType<Prisma.StaffUpdateArgs> = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), data: z.union([StaffUpdateInputObjectSchema, StaffUncheckedUpdateInputObjectSchema]), where: StaffWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StaffUpdateArgs>;

export const StaffUpdateOneZodSchema = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), data: z.union([StaffUpdateInputObjectSchema, StaffUncheckedUpdateInputObjectSchema]), where: StaffWhereUniqueInputObjectSchema }).strict();