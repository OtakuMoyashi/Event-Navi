import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { PushSubscriptionIncludeObjectSchema as PushSubscriptionIncludeObjectSchema } from './objects/PushSubscriptionInclude.schema';
import { PushSubscriptionOrderByWithRelationInputObjectSchema as PushSubscriptionOrderByWithRelationInputObjectSchema } from './objects/PushSubscriptionOrderByWithRelationInput.schema';
import { PushSubscriptionWhereInputObjectSchema as PushSubscriptionWhereInputObjectSchema } from './objects/PushSubscriptionWhereInput.schema';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './objects/PushSubscriptionWhereUniqueInput.schema';
import { PushSubscriptionScalarFieldEnumSchema } from './enums/PushSubscriptionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PushSubscriptionFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PushSubscriptionSelect> = z.object({
    id: z.boolean().optional(),
    endpoint: z.boolean().optional(),
    p256dh: z.boolean().optional(),
    auth: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionSelect>;

export const PushSubscriptionFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    endpoint: z.boolean().optional(),
    p256dh: z.boolean().optional(),
    auth: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const PushSubscriptionFindFirstOrThrowSchema: z.ZodType<Prisma.PushSubscriptionFindFirstOrThrowArgs> = z.object({ select: PushSubscriptionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PushSubscriptionIncludeObjectSchema.optional()), orderBy: z.union([PushSubscriptionOrderByWithRelationInputObjectSchema, PushSubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PushSubscriptionWhereInputObjectSchema.optional(), cursor: PushSubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PushSubscriptionScalarFieldEnumSchema, PushSubscriptionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PushSubscriptionFindFirstOrThrowArgs>;

export const PushSubscriptionFindFirstOrThrowZodSchema = z.object({ select: PushSubscriptionFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PushSubscriptionIncludeObjectSchema.optional()), orderBy: z.union([PushSubscriptionOrderByWithRelationInputObjectSchema, PushSubscriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PushSubscriptionWhereInputObjectSchema.optional(), cursor: PushSubscriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PushSubscriptionScalarFieldEnumSchema, PushSubscriptionScalarFieldEnumSchema.array()]).optional() }).strict();