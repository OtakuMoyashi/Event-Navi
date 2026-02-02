import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StaffSelectObjectSchema as StaffSelectObjectSchema } from './objects/StaffSelect.schema';
import { StaffUpdateManyMutationInputObjectSchema as StaffUpdateManyMutationInputObjectSchema } from './objects/StaffUpdateManyMutationInput.schema';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './objects/StaffWhereInput.schema';

export const StaffUpdateManyAndReturnSchema: z.ZodType<Prisma.StaffUpdateManyAndReturnArgs> = z.object({ select: StaffSelectObjectSchema.optional(), data: StaffUpdateManyMutationInputObjectSchema, where: StaffWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StaffUpdateManyAndReturnArgs>;

export const StaffUpdateManyAndReturnZodSchema = z.object({ select: StaffSelectObjectSchema.optional(), data: StaffUpdateManyMutationInputObjectSchema, where: StaffWhereInputObjectSchema.optional() }).strict();