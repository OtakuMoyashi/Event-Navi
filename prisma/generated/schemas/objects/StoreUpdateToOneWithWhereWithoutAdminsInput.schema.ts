import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema';
import { StoreUpdateWithoutAdminsInputObjectSchema as StoreUpdateWithoutAdminsInputObjectSchema } from './StoreUpdateWithoutAdminsInput.schema';
import { StoreUncheckedUpdateWithoutAdminsInputObjectSchema as StoreUncheckedUpdateWithoutAdminsInputObjectSchema } from './StoreUncheckedUpdateWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StoreUpdateWithoutAdminsInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutAdminsInputObjectSchema)])
}).strict();
export const StoreUpdateToOneWithWhereWithoutAdminsInputObjectSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutAdminsInput>;
export const StoreUpdateToOneWithWhereWithoutAdminsInputObjectZodSchema = makeSchema();
