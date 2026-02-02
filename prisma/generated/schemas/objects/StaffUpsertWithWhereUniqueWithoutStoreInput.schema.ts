import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffUpdateWithoutStoreInputObjectSchema as StaffUpdateWithoutStoreInputObjectSchema } from './StaffUpdateWithoutStoreInput.schema';
import { StaffUncheckedUpdateWithoutStoreInputObjectSchema as StaffUncheckedUpdateWithoutStoreInputObjectSchema } from './StaffUncheckedUpdateWithoutStoreInput.schema';
import { StaffCreateWithoutStoreInputObjectSchema as StaffCreateWithoutStoreInputObjectSchema } from './StaffCreateWithoutStoreInput.schema';
import { StaffUncheckedCreateWithoutStoreInputObjectSchema as StaffUncheckedCreateWithoutStoreInputObjectSchema } from './StaffUncheckedCreateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StaffUpdateWithoutStoreInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutStoreInputObjectSchema)]),
  create: z.union([z.lazy(() => StaffCreateWithoutStoreInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutStoreInputObjectSchema)])
}).strict();
export const StaffUpsertWithWhereUniqueWithoutStoreInputObjectSchema: z.ZodType<Prisma.StaffUpsertWithWhereUniqueWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpsertWithWhereUniqueWithoutStoreInput>;
export const StaffUpsertWithWhereUniqueWithoutStoreInputObjectZodSchema = makeSchema();
