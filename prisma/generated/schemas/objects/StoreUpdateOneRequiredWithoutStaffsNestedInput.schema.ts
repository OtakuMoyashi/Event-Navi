import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutStaffsInputObjectSchema as StoreCreateWithoutStaffsInputObjectSchema } from './StoreCreateWithoutStaffsInput.schema';
import { StoreUncheckedCreateWithoutStaffsInputObjectSchema as StoreUncheckedCreateWithoutStaffsInputObjectSchema } from './StoreUncheckedCreateWithoutStaffsInput.schema';
import { StoreCreateOrConnectWithoutStaffsInputObjectSchema as StoreCreateOrConnectWithoutStaffsInputObjectSchema } from './StoreCreateOrConnectWithoutStaffsInput.schema';
import { StoreUpsertWithoutStaffsInputObjectSchema as StoreUpsertWithoutStaffsInputObjectSchema } from './StoreUpsertWithoutStaffsInput.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreUpdateToOneWithWhereWithoutStaffsInputObjectSchema as StoreUpdateToOneWithWhereWithoutStaffsInputObjectSchema } from './StoreUpdateToOneWithWhereWithoutStaffsInput.schema';
import { StoreUpdateWithoutStaffsInputObjectSchema as StoreUpdateWithoutStaffsInputObjectSchema } from './StoreUpdateWithoutStaffsInput.schema';
import { StoreUncheckedUpdateWithoutStaffsInputObjectSchema as StoreUncheckedUpdateWithoutStaffsInputObjectSchema } from './StoreUncheckedUpdateWithoutStaffsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutStaffsInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutStaffsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoreCreateOrConnectWithoutStaffsInputObjectSchema).optional(),
  upsert: z.lazy(() => StoreUpsertWithoutStaffsInputObjectSchema).optional(),
  connect: z.lazy(() => StoreWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StoreUpdateToOneWithWhereWithoutStaffsInputObjectSchema), z.lazy(() => StoreUpdateWithoutStaffsInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutStaffsInputObjectSchema)]).optional()
}).strict();
export const StoreUpdateOneRequiredWithoutStaffsNestedInputObjectSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutStaffsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateOneRequiredWithoutStaffsNestedInput>;
export const StoreUpdateOneRequiredWithoutStaffsNestedInputObjectZodSchema = makeSchema();
