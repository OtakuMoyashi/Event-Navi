import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketOrderByWithRelationInputObjectSchema as TicketOrderByWithRelationInputObjectSchema } from './objects/TicketOrderByWithRelationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketScalarFieldEnumSchema } from './enums/TicketScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TicketSelect> = z.object({
    id: z.boolean().optional(),
    index: z.boolean().optional(),
    numberOfPeople: z.boolean().optional(),
    status: z.boolean().optional(),
    attractionId: z.boolean().optional(),
    attraction: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TicketSelect>;

export const TicketFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    index: z.boolean().optional(),
    numberOfPeople: z.boolean().optional(),
    status: z.boolean().optional(),
    attractionId: z.boolean().optional(),
    attraction: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const TicketFindFirstOrThrowSchema: z.ZodType<Prisma.TicketFindFirstOrThrowArgs> = z.object({ select: TicketFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TicketIncludeObjectSchema.optional()), orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketScalarFieldEnumSchema, TicketScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketFindFirstOrThrowArgs>;

export const TicketFindFirstOrThrowZodSchema = z.object({ select: TicketFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TicketIncludeObjectSchema.optional()), orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TicketScalarFieldEnumSchema, TicketScalarFieldEnumSchema.array()]).optional() }).strict();