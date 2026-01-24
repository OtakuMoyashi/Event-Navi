import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { PushSubscriptionScalarWhereInputObjectSchema as PushSubscriptionScalarWhereInputObjectSchema } from './PushSubscriptionScalarWhereInput.schema';
import { PushSubscriptionUpdateManyMutationInputObjectSchema as PushSubscriptionUpdateManyMutationInputObjectSchema } from './PushSubscriptionUpdateManyMutationInput.schema';
import { PushSubscriptionUncheckedUpdateManyWithoutUserInputObjectSchema as PushSubscriptionUncheckedUpdateManyWithoutUserInputObjectSchema } from './PushSubscriptionUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PushSubscriptionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PushSubscriptionUpdateManyMutationInputObjectSchema), z.lazy(() => PushSubscriptionUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PushSubscriptionUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.PushSubscriptionUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PushSubscriptionUpdateManyWithWhereWithoutUserInput>;
export const PushSubscriptionUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
