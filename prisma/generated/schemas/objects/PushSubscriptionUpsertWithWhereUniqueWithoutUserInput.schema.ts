import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './PushSubscriptionWhereUniqueInput.schema';
import { PushSubscriptionUpdateWithoutUserInputObjectSchema as PushSubscriptionUpdateWithoutUserInputObjectSchema } from './PushSubscriptionUpdateWithoutUserInput.schema';
import { PushSubscriptionUncheckedUpdateWithoutUserInputObjectSchema as PushSubscriptionUncheckedUpdateWithoutUserInputObjectSchema } from './PushSubscriptionUncheckedUpdateWithoutUserInput.schema';
import { PushSubscriptionCreateWithoutUserInputObjectSchema as PushSubscriptionCreateWithoutUserInputObjectSchema } from './PushSubscriptionCreateWithoutUserInput.schema';
import { PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema as PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from './PushSubscriptionUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PushSubscriptionUpdateWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => PushSubscriptionCreateWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PushSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PushSubscriptionUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionUpsertWithWhereUniqueWithoutUserInput>;
export const PushSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
