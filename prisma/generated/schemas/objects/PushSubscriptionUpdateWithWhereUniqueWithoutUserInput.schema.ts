import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './PushSubscriptionWhereUniqueInput.schema';
import { PushSubscriptionUpdateWithoutUserInputObjectSchema as PushSubscriptionUpdateWithoutUserInputObjectSchema } from './PushSubscriptionUpdateWithoutUserInput.schema';
import { PushSubscriptionUncheckedUpdateWithoutUserInputObjectSchema as PushSubscriptionUncheckedUpdateWithoutUserInputObjectSchema } from './PushSubscriptionUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PushSubscriptionUpdateWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PushSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PushSubscriptionUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionUpdateWithWhereUniqueWithoutUserInput>;
export const PushSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
