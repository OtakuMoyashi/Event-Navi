import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionCreateWithoutStoreInputObjectSchema as AttractionCreateWithoutStoreInputObjectSchema } from './AttractionCreateWithoutStoreInput.schema';
import { AttractionUncheckedCreateWithoutStoreInputObjectSchema as AttractionUncheckedCreateWithoutStoreInputObjectSchema } from './AttractionUncheckedCreateWithoutStoreInput.schema';
import { AttractionCreateOrConnectWithoutStoreInputObjectSchema as AttractionCreateOrConnectWithoutStoreInputObjectSchema } from './AttractionCreateOrConnectWithoutStoreInput.schema';
import { AttractionUpsertWithoutStoreInputObjectSchema as AttractionUpsertWithoutStoreInputObjectSchema } from './AttractionUpsertWithoutStoreInput.schema';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './AttractionWhereInput.schema';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './AttractionWhereUniqueInput.schema';
import { AttractionUpdateToOneWithWhereWithoutStoreInputObjectSchema as AttractionUpdateToOneWithWhereWithoutStoreInputObjectSchema } from './AttractionUpdateToOneWithWhereWithoutStoreInput.schema';
import { AttractionUpdateWithoutStoreInputObjectSchema as AttractionUpdateWithoutStoreInputObjectSchema } from './AttractionUpdateWithoutStoreInput.schema';
import { AttractionUncheckedUpdateWithoutStoreInputObjectSchema as AttractionUncheckedUpdateWithoutStoreInputObjectSchema } from './AttractionUncheckedUpdateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttractionCreateWithoutStoreInputObjectSchema), z.lazy(() => AttractionUncheckedCreateWithoutStoreInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AttractionCreateOrConnectWithoutStoreInputObjectSchema).optional(),
  upsert: z.lazy(() => AttractionUpsertWithoutStoreInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AttractionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AttractionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AttractionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AttractionUpdateToOneWithWhereWithoutStoreInputObjectSchema), z.lazy(() => AttractionUpdateWithoutStoreInputObjectSchema), z.lazy(() => AttractionUncheckedUpdateWithoutStoreInputObjectSchema)]).optional()
}).strict();
export const AttractionUncheckedUpdateOneWithoutStoreNestedInputObjectSchema: z.ZodType<Prisma.AttractionUncheckedUpdateOneWithoutStoreNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUncheckedUpdateOneWithoutStoreNestedInput>;
export const AttractionUncheckedUpdateOneWithoutStoreNestedInputObjectZodSchema = makeSchema();
