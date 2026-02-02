import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPushSubscriptionsInputObjectSchema as UserUpdateWithoutPushSubscriptionsInputObjectSchema } from './UserUpdateWithoutPushSubscriptionsInput.schema';
import { UserUncheckedUpdateWithoutPushSubscriptionsInputObjectSchema as UserUncheckedUpdateWithoutPushSubscriptionsInputObjectSchema } from './UserUncheckedUpdateWithoutPushSubscriptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPushSubscriptionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPushSubscriptionsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPushSubscriptionsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPushSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPushSubscriptionsInput>;
export const UserUpdateToOneWithWhereWithoutPushSubscriptionsInputObjectZodSchema = makeSchema();
