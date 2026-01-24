import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutAttractionInputObjectSchema as StoreCreateWithoutAttractionInputObjectSchema } from './StoreCreateWithoutAttractionInput.schema';
import { StoreUncheckedCreateWithoutAttractionInputObjectSchema as StoreUncheckedCreateWithoutAttractionInputObjectSchema } from './StoreUncheckedCreateWithoutAttractionInput.schema';
import { StoreCreateOrConnectWithoutAttractionInputObjectSchema as StoreCreateOrConnectWithoutAttractionInputObjectSchema } from './StoreCreateOrConnectWithoutAttractionInput.schema';
import { StoreUpsertWithoutAttractionInputObjectSchema as StoreUpsertWithoutAttractionInputObjectSchema } from './StoreUpsertWithoutAttractionInput.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreUpdateToOneWithWhereWithoutAttractionInputObjectSchema as StoreUpdateToOneWithWhereWithoutAttractionInputObjectSchema } from './StoreUpdateToOneWithWhereWithoutAttractionInput.schema';
import { StoreUpdateWithoutAttractionInputObjectSchema as StoreUpdateWithoutAttractionInputObjectSchema } from './StoreUpdateWithoutAttractionInput.schema';
import { StoreUncheckedUpdateWithoutAttractionInputObjectSchema as StoreUncheckedUpdateWithoutAttractionInputObjectSchema } from './StoreUncheckedUpdateWithoutAttractionInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutAttractionInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutAttractionInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StoreCreateOrConnectWithoutAttractionInputObjectSchema).optional(),
  upsert: z.lazy(() => StoreUpsertWithoutAttractionInputObjectSchema).optional(),
  connect: z.lazy(() => StoreWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StoreUpdateToOneWithWhereWithoutAttractionInputObjectSchema), z.lazy(() => StoreUpdateWithoutAttractionInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutAttractionInputObjectSchema)]).optional()
}).strict();
export const StoreUpdateOneRequiredWithoutAttractionNestedInputObjectSchema: z.ZodType<Prisma.StoreUpdateOneRequiredWithoutAttractionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateOneRequiredWithoutAttractionNestedInput>;
export const StoreUpdateOneRequiredWithoutAttractionNestedInputObjectZodSchema = makeSchema();
