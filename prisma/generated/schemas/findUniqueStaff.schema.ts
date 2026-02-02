import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffSelectObjectSchema as StaffSelectObjectSchema } from './objects/StaffSelect.schema';
import { StaffIncludeObjectSchema as StaffIncludeObjectSchema } from './objects/StaffInclude.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './objects/StaffWhereUniqueInput.schema';

export const StaffFindUniqueSchema: z.ZodType<Prisma.StaffFindUniqueArgs> = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), where: StaffWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StaffFindUniqueArgs>;

export const StaffFindUniqueZodSchema = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), where: StaffWhereUniqueInputObjectSchema }).strict();