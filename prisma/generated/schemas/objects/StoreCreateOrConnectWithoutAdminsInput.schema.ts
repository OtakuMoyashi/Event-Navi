import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreCreateWithoutAdminsInputObjectSchema as StoreCreateWithoutAdminsInputObjectSchema } from './StoreCreateWithoutAdminsInput.schema';
import { StoreUncheckedCreateWithoutAdminsInputObjectSchema as StoreUncheckedCreateWithoutAdminsInputObjectSchema } from './StoreUncheckedCreateWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StoreCreateWithoutAdminsInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutAdminsInputObjectSchema)])
}).strict();
export const StoreCreateOrConnectWithoutAdminsInputObjectSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateOrConnectWithoutAdminsInput>;
export const StoreCreateOrConnectWithoutAdminsInputObjectZodSchema = makeSchema();
