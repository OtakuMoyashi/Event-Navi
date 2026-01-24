import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreUpdateWithoutStaffsInputObjectSchema as StoreUpdateWithoutStaffsInputObjectSchema } from './StoreUpdateWithoutStaffsInput.schema';
import { StoreUncheckedUpdateWithoutStaffsInputObjectSchema as StoreUncheckedUpdateWithoutStaffsInputObjectSchema } from './StoreUncheckedUpdateWithoutStaffsInput.schema';
import { StoreCreateWithoutStaffsInputObjectSchema as StoreCreateWithoutStaffsInputObjectSchema } from './StoreCreateWithoutStaffsInput.schema';
import { StoreUncheckedCreateWithoutStaffsInputObjectSchema as StoreUncheckedCreateWithoutStaffsInputObjectSchema } from './StoreUncheckedCreateWithoutStaffsInput.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StoreUpdateWithoutStaffsInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutStaffsInputObjectSchema)]),
  create: z.union([z.lazy(() => StoreCreateWithoutStaffsInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutStaffsInputObjectSchema)]),
  where: z.lazy(() => StoreWhereInputObjectSchema).optional()
}).strict();
export const StoreUpsertWithoutStaffsInputObjectSchema: z.ZodType<Prisma.StoreUpsertWithoutStaffsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpsertWithoutStaffsInput>;
export const StoreUpsertWithoutStaffsInputObjectZodSchema = makeSchema();
