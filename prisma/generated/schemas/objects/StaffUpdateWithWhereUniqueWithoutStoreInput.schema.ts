import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffUpdateWithoutStoreInputObjectSchema as StaffUpdateWithoutStoreInputObjectSchema } from './StaffUpdateWithoutStoreInput.schema';
import { StaffUncheckedUpdateWithoutStoreInputObjectSchema as StaffUncheckedUpdateWithoutStoreInputObjectSchema } from './StaffUncheckedUpdateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StaffUpdateWithoutStoreInputObjectSchema), z.lazy(() => StaffUncheckedUpdateWithoutStoreInputObjectSchema)])
}).strict();
export const StaffUpdateWithWhereUniqueWithoutStoreInputObjectSchema: z.ZodType<Prisma.StaffUpdateWithWhereUniqueWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateWithWhereUniqueWithoutStoreInput>;
export const StaffUpdateWithWhereUniqueWithoutStoreInputObjectZodSchema = makeSchema();
