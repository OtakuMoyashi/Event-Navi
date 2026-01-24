import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { UserUpdateWithoutPushSubscriptionsInputObjectSchema as UserUpdateWithoutPushSubscriptionsInputObjectSchema } from './UserUpdateWithoutPushSubscriptionsInput.schema';
import { UserUncheckedUpdateWithoutPushSubscriptionsInputObjectSchema as UserUncheckedUpdateWithoutPushSubscriptionsInputObjectSchema } from './UserUncheckedUpdateWithoutPushSubscriptionsInput.schema';
import { UserCreateWithoutPushSubscriptionsInputObjectSchema as UserCreateWithoutPushSubscriptionsInputObjectSchema } from './UserCreateWithoutPushSubscriptionsInput.schema';
import { UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema as UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema } from './UserUncheckedCreateWithoutPushSubscriptionsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPushSubscriptionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPushSubscriptionsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPushSubscriptionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPushSubscriptionsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPushSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPushSubscriptionsInput>;
export const UserUpsertWithoutPushSubscriptionsInputObjectZodSchema = makeSchema();
