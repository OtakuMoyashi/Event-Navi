import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema';
import { StoreUpdateWithoutStaffsInputObjectSchema as StoreUpdateWithoutStaffsInputObjectSchema } from './StoreUpdateWithoutStaffsInput.schema';
import { StoreUncheckedUpdateWithoutStaffsInputObjectSchema as StoreUncheckedUpdateWithoutStaffsInputObjectSchema } from './StoreUncheckedUpdateWithoutStaffsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StoreUpdateWithoutStaffsInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutStaffsInputObjectSchema)])
}).strict();
export const StoreUpdateToOneWithWhereWithoutStaffsInputObjectSchema: z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutStaffsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateToOneWithWhereWithoutStaffsInput>;
export const StoreUpdateToOneWithWhereWithoutStaffsInputObjectZodSchema = makeSchema();
