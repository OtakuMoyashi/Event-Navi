import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutAdminsInputObjectSchema as StoreCreateWithoutAdminsInputObjectSchema } from './StoreCreateWithoutAdminsInput.schema';
import { StoreUncheckedCreateWithoutAdminsInputObjectSchema as StoreUncheckedCreateWithoutAdminsInputObjectSchema } from './StoreUncheckedCreateWithoutAdminsInput.schema';
import { StoreCreateOrConnectWithoutAdminsInputObjectSchema as StoreCreateOrConnectWithoutAdminsInputObjectSchema } from './StoreCreateOrConnectWithoutAdminsInput.schema';
import { StoreUpsertWithoutAdminsInputObjectSchema as StoreUpsertWithoutAdminsInputObjectSchema } from './StoreUpsertWithoutAdminsInput.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreUpdateToOneWithWhereWithoutAdminsInputObjectSchema as StoreUpdateToOneWithWhereWithoutAdminsInputObjectSchema } from './StoreUpdateToOneWithWhereWithoutAdminsInput.schema';
import { StoreUpdateWithoutAdminsInputObjectSchema as StoreUpdateWithoutAdminsInputObjectSchema } from './StoreUpdateWithoutAdminsInput.schema';
import { StoreUncheckedUpdateWithoutAdminsInputObjectSchema as StoreUncheckedUpdateWithoutAdminsInputObjectSchema } from './StoreUncheckedUpdateWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutAdminsInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutAdminsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoreCreateOrConnectWithoutAdminsInputObjectSchema).optional(),
  upsert: z.lazy(() => StoreUpsertWithoutAdminsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => StoreWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => StoreWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => StoreWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StoreUpdateToOneWithWhereWithoutAdminsInputObjectSchema), z.lazy(() => StoreUpdateWithoutAdminsInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutAdminsInputObjectSchema)]).optional()
}).strict();
export const StoreUpdateOneWithoutAdminsNestedInputObjectSchema: z.ZodType<Prisma.StoreUpdateOneWithoutAdminsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateOneWithoutAdminsNestedInput>;
export const StoreUpdateOneWithoutAdminsNestedInputObjectZodSchema = makeSchema();
