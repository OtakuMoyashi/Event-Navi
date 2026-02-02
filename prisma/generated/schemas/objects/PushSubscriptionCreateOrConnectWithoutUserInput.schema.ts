import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './PushSubscriptionWhereUniqueInput.schema';
import { PushSubscriptionCreateWithoutUserInputObjectSchema as PushSubscriptionCreateWithoutUserInputObjectSchema } from './PushSubscriptionCreateWithoutUserInput.schema';
import { PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema as PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from './PushSubscriptionUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PushSubscriptionCreateWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PushSubscriptionCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.PushSubscriptionCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionCreateOrConnectWithoutUserInput>;
export const PushSubscriptionCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
