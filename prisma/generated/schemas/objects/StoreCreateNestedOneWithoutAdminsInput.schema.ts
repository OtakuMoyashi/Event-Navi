import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutAdminsInputObjectSchema as StoreCreateWithoutAdminsInputObjectSchema } from './StoreCreateWithoutAdminsInput.schema';
import { StoreUncheckedCreateWithoutAdminsInputObjectSchema as StoreUncheckedCreateWithoutAdminsInputObjectSchema } from './StoreUncheckedCreateWithoutAdminsInput.schema';
import { StoreCreateOrConnectWithoutAdminsInputObjectSchema as StoreCreateOrConnectWithoutAdminsInputObjectSchema } from './StoreCreateOrConnectWithoutAdminsInput.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutAdminsInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutAdminsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoreCreateOrConnectWithoutAdminsInputObjectSchema).optional(),
  connect: z.lazy(() => StoreWhereUniqueInputObjectSchema).optional()
}).strict();
export const StoreCreateNestedOneWithoutAdminsInputObjectSchema: z.ZodType<Prisma.StoreCreateNestedOneWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateNestedOneWithoutAdminsInput>;
export const StoreCreateNestedOneWithoutAdminsInputObjectZodSchema = makeSchema();
