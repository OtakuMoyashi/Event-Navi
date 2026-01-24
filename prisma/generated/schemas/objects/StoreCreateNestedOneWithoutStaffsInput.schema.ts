import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutStaffsInputObjectSchema as StoreCreateWithoutStaffsInputObjectSchema } from './StoreCreateWithoutStaffsInput.schema';
import { StoreUncheckedCreateWithoutStaffsInputObjectSchema as StoreUncheckedCreateWithoutStaffsInputObjectSchema } from './StoreUncheckedCreateWithoutStaffsInput.schema';
import { StoreCreateOrConnectWithoutStaffsInputObjectSchema as StoreCreateOrConnectWithoutStaffsInputObjectSchema } from './StoreCreateOrConnectWithoutStaffsInput.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutStaffsInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutStaffsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoreCreateOrConnectWithoutStaffsInputObjectSchema).optional(),
  connect: z.lazy(() => StoreWhereUniqueInputObjectSchema).optional()
}).strict();
export const StoreCreateNestedOneWithoutStaffsInputObjectSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutStaffsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateNestedOneWithoutStaffsInput>;
export const StoreCreateNestedOneWithoutStaffsInputObjectZodSchema = makeSchema();
