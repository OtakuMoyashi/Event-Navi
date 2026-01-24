import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './AttractionWhereInput.schema';
import { AttractionUpdateWithoutStoreInputObjectSchema as AttractionUpdateWithoutStoreInputObjectSchema } from './AttractionUpdateWithoutStoreInput.schema';
import { AttractionUncheckedUpdateWithoutStoreInputObjectSchema as AttractionUncheckedUpdateWithoutStoreInputObjectSchema } from './AttractionUncheckedUpdateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttractionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AttractionUpdateWithoutStoreInputObjectSchema), z.lazy(() => AttractionUncheckedUpdateWithoutStoreInputObjectSchema)])
}).strict();
export const AttractionUpdateToOneWithWhereWithoutStoreInputObjectSchema: z.ZodType<Prisma.AttractionUpdateToOneWithWhereWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUpdateToOneWithWhereWithoutStoreInput>;
export const AttractionUpdateToOneWithWhereWithoutStoreInputObjectZodSchema = makeSchema();
