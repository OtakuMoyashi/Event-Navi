import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { UserCreateWithoutPushSubscriptionsInputObjectSchema as UserCreateWithoutPushSubscriptionsInputObjectSchema } from './UserCreateWithoutPushSubscriptionsInput.schema';
import { UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema as UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema } from './UserUncheckedCreateWithoutPushSubscriptionsInput.schema';
import { UserCreateOrConnectWithoutPushSubscriptionsInputObjectSchema as UserCreateOrConnectWithoutPushSubscriptionsInputObjectSchema } from './UserCreateOrConnectWithoutPushSubscriptionsInput.schema';
import { UserUpsertWithoutPushSubscriptionsInputObjectSchema as UserUpsertWithoutPushSubscriptionsInputObjectSchema } from './UserUpsertWithoutPushSubscriptionsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPushSubscriptionsInputObjectSchema as UserUpdateToOneWithWhereWithoutPushSubscriptionsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPushSubscriptionsInput.schema';
import { UserUpdateWithoutPushSubscriptionsInputObjectSchema as UserUpdateWithoutPushSubscriptionsInputObjectSchema } from './UserUpdateWithoutPushSubscriptionsInput.schema';
import { UserUncheckedUpdateWithoutPushSubscriptionsInputObjectSchema as UserUncheckedUpdateWithoutPushSubscriptionsInputObjectSchema } from './UserUncheckedUpdateWithoutPushSubscriptionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPushSubscriptionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPushSubscriptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPushSubscriptionsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPushSubscriptionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPushSubscriptionsInputObjectSchema), z.lazy(() => UserUpdateWithoutPushSubscriptionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPushSubscriptionsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPushSubscriptionsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput>;
export const UserUpdateOneRequiredWithoutPushSubscriptionsNestedInputObjectZodSchema = makeSchema();
