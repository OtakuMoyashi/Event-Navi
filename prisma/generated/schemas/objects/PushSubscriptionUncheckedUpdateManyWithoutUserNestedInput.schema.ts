import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionCreateWithoutUserInputObjectSchema as PushSubscriptionCreateWithoutUserInputObjectSchema } from './PushSubscriptionCreateWithoutUserInput.schema';
import { PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema as PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from './PushSubscriptionUncheckedCreateWithoutUserInput.schema';
import { PushSubscriptionCreateOrConnectWithoutUserInputObjectSchema as PushSubscriptionCreateOrConnectWithoutUserInputObjectSchema } from './PushSubscriptionCreateOrConnectWithoutUserInput.schema';
import { PushSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectSchema as PushSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PushSubscriptionUpsertWithWhereUniqueWithoutUserInput.schema';
import { PushSubscriptionCreateManyUserInputEnvelopeObjectSchema as PushSubscriptionCreateManyUserInputEnvelopeObjectSchema } from './PushSubscriptionCreateManyUserInputEnvelope.schema';
import { PushSubscriptionWhereUniqueInputObjectSchema as PushSubscriptionWhereUniqueInputObjectSchema } from './PushSubscriptionWhereUniqueInput.schema';
import { PushSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectSchema as PushSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PushSubscriptionUpdateWithWhereUniqueWithoutUserInput.schema';
import { PushSubscriptionUpdateManyWithWhereWithoutUserInputObjectSchema as PushSubscriptionUpdateManyWithWhereWithoutUserInputObjectSchema } from './PushSubscriptionUpdateManyWithWhereWithoutUserInput.schema';
import { PushSubscriptionScalarWhereInputObjectSchema as PushSubscriptionScalarWhereInputObjectSchema } from './PushSubscriptionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PushSubscriptionCreateWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PushSubscriptionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PushSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PushSubscriptionCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema), z.lazy(() => PushSubscriptionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PushSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PushSubscriptionUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => PushSubscriptionUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PushSubscriptionScalarWhereInputObjectSchema), z.lazy(() => PushSubscriptionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PushSubscriptionUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput>;
export const PushSubscriptionUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
