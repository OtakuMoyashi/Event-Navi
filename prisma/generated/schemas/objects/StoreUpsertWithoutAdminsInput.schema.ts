import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreUpdateWithoutAdminsInputObjectSchema as StoreUpdateWithoutAdminsInputObjectSchema } from './StoreUpdateWithoutAdminsInput.schema';
import { StoreUncheckedUpdateWithoutAdminsInputObjectSchema as StoreUncheckedUpdateWithoutAdminsInputObjectSchema } from './StoreUncheckedUpdateWithoutAdminsInput.schema';
import { StoreCreateWithoutAdminsInputObjectSchema as StoreCreateWithoutAdminsInputObjectSchema } from './StoreCreateWithoutAdminsInput.schema';
import { StoreUncheckedCreateWithoutAdminsInputObjectSchema as StoreUncheckedCreateWithoutAdminsInputObjectSchema } from './StoreUncheckedCreateWithoutAdminsInput.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StoreUpdateWithoutAdminsInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutAdminsInputObjectSchema)]),
  create: z.union([z.lazy(() => StoreCreateWithoutAdminsInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutAdminsInputObjectSchema)]),
  where: z.lazy(() => StoreWhereInputObjectSchema).optional()
}).strict();
export const StoreUpsertWithoutAdminsInputObjectSchema: z.ZodType<Prisma.StoreUpsertWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpsertWithoutAdminsInput>;
export const StoreUpsertWithoutAdminsInputObjectZodSchema = makeSchema();
