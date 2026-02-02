import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateWithoutEventInputObjectSchema as AdminUpdateWithoutEventInputObjectSchema } from './AdminUpdateWithoutEventInput.schema';
import { AdminUncheckedUpdateWithoutEventInputObjectSchema as AdminUncheckedUpdateWithoutEventInputObjectSchema } from './AdminUncheckedUpdateWithoutEventInput.schema';
import { AdminCreateWithoutEventInputObjectSchema as AdminCreateWithoutEventInputObjectSchema } from './AdminCreateWithoutEventInput.schema';
import { AdminUncheckedCreateWithoutEventInputObjectSchema as AdminUncheckedCreateWithoutEventInputObjectSchema } from './AdminUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AdminUpdateWithoutEventInputObjectSchema), z.lazy(() => AdminUncheckedUpdateWithoutEventInputObjectSchema)]),
  create: z.union([z.lazy(() => AdminCreateWithoutEventInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const AdminUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.AdminUpsertWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpsertWithWhereUniqueWithoutEventInput>;
export const AdminUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
