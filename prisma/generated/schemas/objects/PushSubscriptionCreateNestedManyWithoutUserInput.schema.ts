import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionCreateWithoutUserInputObjectSchema as PushSubscriptionCreateWithoutUserInputObjectSchema } from './PushSubscriptionCreateWithoutUserInput.schema';
import { PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema as PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from './PushSubscriptionUncheckedCreateWithoutUserInput.schema';
import { PushSubscriptionCreateOrConnectWithoutUserInputObjectSchema as PushSubscriptionCreateOrConnectWithoutUserInputObjectSchema } from './PushSubscriptionCreateOrConnectWithoutUserInput.schema';
import { PushSubscriptionCreateManyUserInputEnvelopeObjectSchema as PushSubscriptionCreateManyUserInputEnvelopeObjectSchema } from './PushSubscriptionCreateManyUserInputEnvelope.schema';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './PushSubscriptionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PushSubscriptionCreateWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PushSubscriptionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PushSubscriptionCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PushSubscriptionCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.PushSubscriptionCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionCreateNestedManyWithoutUserInput>;
export const PushSubscriptionCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
