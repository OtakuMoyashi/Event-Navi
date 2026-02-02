import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPushSubscriptionsInputObjectSchema as UserCreateWithoutPushSubscriptionsInputObjectSchema } from './UserCreateWithoutPushSubscriptionsInput.schema';
import { UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema as UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema } from './UserUncheckedCreateWithoutPushSubscriptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPushSubscriptionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPushSubscriptionsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPushSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPushSubscriptionsInput>;
export const UserCreateOrConnectWithoutPushSubscriptionsInputObjectZodSchema = makeSchema();
