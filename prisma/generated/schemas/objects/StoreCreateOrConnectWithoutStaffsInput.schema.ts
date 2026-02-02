import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreCreateWithoutStaffsInputObjectSchema as StoreCreateWithoutStaffsInputObjectSchema } from './StoreCreateWithoutStaffsInput.schema';
import { StoreUncheckedCreateWithoutStaffsInputObjectSchema as StoreUncheckedCreateWithoutStaffsInputObjectSchema } from './StoreUncheckedCreateWithoutStaffsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StoreCreateWithoutStaffsInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutStaffsInputObjectSchema)])
}).strict();
export const StoreCreateOrConnectWithoutStaffsInputObjectSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutStaffsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateOrConnectWithoutStaffsInput>;
export const StoreCreateOrConnectWithoutStaffsInputObjectZodSchema = makeSchema();
