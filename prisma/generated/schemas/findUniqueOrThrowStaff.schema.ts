import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffSelectObjectSchema as StaffSelectObjectSchema } from './objects/StaffSelect.schema';
import { StaffIncludeObjectSchema as StaffIncludeObjectSchema } from './objects/StaffInclude.schema';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './objects/StaffWhereUniqueInput.schema';

export const StaffFindUniqueOrThrowSchema: z.ZodType<Prisma.StaffFindUniqueOrThrowArgs> = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), where: StaffWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StaffFindUniqueOrThrowArgs>;

export const StaffFindUniqueOrThrowZodSchema = z.object({ select: StaffSelectObjectSchema.optional(), include: StaffIncludeObjectSchema.optional(), where: StaffWhereUniqueInputObjectSchema }).strict();