import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AdminSelectObjectSchema as AdminSelectObjectSchema } from './objects/AdminSelect.schema';
import { AdminIncludeObjectSchema as AdminIncludeObjectSchema } from './objects/AdminInclude.schema';
import { AdminCreateInputObjectSchema as AdminCreateInputObjectSchema } from './objects/AdminCreateInput.schema';
import { AdminUncheckedCreateInputObjectSchema as AdminUncheckedCreateInputObjectSchema } from './objects/AdminUncheckedCreateInput.schema';

export const AdminCreateOneSchema: z.ZodType<Prisma.AdminCreateArgs> = z.object({ select: AdminSelectObjectSchema.optional(), include: AdminIncludeObjectSchema.optional(), data: z.union([AdminCreateInputObjectSchema, AdminUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AdminCreateArgs>;

export const AdminCreateOneZodSchema = z.object({ select: AdminSelectObjectSchema.optional(), include: AdminIncludeObjectSchema.optional(), data: z.union([AdminCreateInputObjectSchema, AdminUncheckedCreateInputObjectSchema]) }).strict();