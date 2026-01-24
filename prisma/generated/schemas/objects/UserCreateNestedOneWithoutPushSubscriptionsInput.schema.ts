import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { UserCreateWithoutPushSubscriptionsInputObjectSchema as UserCreateWithoutPushSubscriptionsInputObjectSchema } from './UserCreateWithoutPushSubscriptionsInput.schema';
import { UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema as UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema } from './UserUncheckedCreateWithoutPushSubscriptionsInput.schema';
import { UserCreateOrConnectWithoutPushSubscriptionsInputObjectSchema as UserCreateOrConnectWithoutPushSubscriptionsInputObjectSchema } from './UserCreateOrConnectWithoutPushSubscriptionsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPushSubscriptionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPushSubscriptionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPushSubscriptionsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPushSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPushSubscriptionsInput>;
export const UserCreateNestedOneWithoutPushSubscriptionsInputObjectZodSchema = makeSchema();
