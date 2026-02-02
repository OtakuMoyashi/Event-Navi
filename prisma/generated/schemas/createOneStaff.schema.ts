import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffSelectObjectSchema as StaffSelectObjectSchema } from './objects/StaffSelect.schema';
import { StaffIncludeObjectSchema as StaffIncludeObjectSchema } from './objects/StaffInclude.schema';
import { StaffCreateInputObjectSchema as StaffCreateInputObjectSchema } from './objects/StaffCreateInput.schema';
import { StaffUncheckedCreateInputObjectSchema as StaffUncheckedCreateInputObjectSchema } from './objects/StaffUncheckedCreateInput.schema';

export const StaffCreateOneSchema: z.ZodType<Prisma.StaffCreateArgs> = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), data: z.union([StaffCreateInputObjectSchema, StaffUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StaffCreateArgs>;

export const StaffCreateOneZodSchema = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), data: z.union([StaffCreateInputObjectSchema, StaffUncheckedCreateInputObjectSchema]) }).strict();