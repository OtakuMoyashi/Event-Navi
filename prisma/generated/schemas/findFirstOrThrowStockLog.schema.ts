import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StockLogIncludeObjectSchema as StockLogIncludeObjectSchema } from './objects/StockLogInclude.schema';
import { StockLogOrderByWithRelationInputObjectSchema as StockLogOrderByWithRelationInputObjectSchema } from './objects/StockLogOrderByWithRelationInput.schema';
import { StockLogWhereInputObjectSchema as StockLogWhereInputObjectSchema } from './objects/StockLogWhereInput.schema';
import { StockLogWhereUniqueInputObjectSchema as StockLogWhereUniqueInputObjectSchema } from './objects/StockLogWhereUniqueInput.schema';
import { StockLogScalarFieldEnumSchema } from './enums/StockLogScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StockLogFindFirstOrThrowSelectSchema: z.ZodType<Prisma.StockLogSelect> = z.object({
    id: z.boolean().optional(),
    itemId: z.boolean().optional(),
    item: z.boolean().optional(),
    change: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StockLogSelect>;

export const StockLogFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    itemId: z.boolean().optional(),
    item: z.boolean().optional(),
    change: z.boolean().optional(),
    reason: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const StockLogFindFirstOrThrowSchema: z.ZodType<Prisma.StockLogFindFirstOrThrowArgs> = z.object({ select: StockLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => StockLogIncludeObjectSchema.optional()), orderBy: z.union([StockLogOrderByWithRelationInputObjectSchema, StockLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: StockLogWhereInputObjectSchema.optional(), cursor: StockLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StockLogScalarFieldEnumSchema, StockLogScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StockLogFindFirstOrThrowArgs>;

export const StockLogFindFirstOrThrowZodSchema = z.object({ select: StockLogFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => StockLogIncludeObjectSchema.optional()), orderBy: z.union([StockLogOrderByWithRelationInputObjectSchema, StockLogOrderByWithRelationInputObjectSchema.array()]).optional(), where: StockLogWhereInputObjectSchema.optional(), cursor: StockLogWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StockLogScalarFieldEnumSchema, StockLogScalarFieldEnumSchema.array()]).optional() }).strict();