import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionUpdateWithoutStoreInputObjectSchema as AttractionUpdateWithoutStoreInputObjectSchema } from './AttractionUpdateWithoutStoreInput.schema';
import { AttractionUncheckedUpdateWithoutStoreInputObjectSchema as AttractionUncheckedUpdateWithoutStoreInputObjectSchema } from './AttractionUncheckedUpdateWithoutStoreInput.schema';
import { AttractionCreateWithoutStoreInputObjectSchema as AttractionCreateWithoutStoreInputObjectSchema } from './AttractionCreateWithoutStoreInput.schema';
import { AttractionUncheckedCreateWithoutStoreInputObjectSchema as AttractionUncheckedCreateWithoutStoreInputObjectSchema } from './AttractionUncheckedCreateWithoutStoreInput.schema';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './AttractionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AttractionUpdateWithoutStoreInputObjectSchema), z.lazy(() => AttractionUncheckedUpdateWithoutStoreInputObjectSchema)]),
  create: z.union([z.lazy(() => AttractionCreateWithoutStoreInputObjectSchema), z.lazy(() => AttractionUncheckedCreateWithoutStoreInputObjectSchema)]),
  where: z.lazy(() => AttractionWhereInputObjectSchema).optional()
}).strict();
export const AttractionUpsertWithoutStoreInputObjectSchema: z.ZodType<Prisma.AttractionUpsertWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUpsertWithoutStoreInput>;
export const AttractionUpsertWithoutStoreInputObjectZodSchema = makeSchema();
