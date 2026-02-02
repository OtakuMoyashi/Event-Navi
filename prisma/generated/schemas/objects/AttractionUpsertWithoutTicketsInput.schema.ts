import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionUpdateWithoutTicketsInputObjectSchema as AttractionUpdateWithoutTicketsInputObjectSchema } from './AttractionUpdateWithoutTicketsInput.schema';
import { AttractionUncheckedUpdateWithoutTicketsInputObjectSchema as AttractionUncheckedUpdateWithoutTicketsInputObjectSchema } from './AttractionUncheckedUpdateWithoutTicketsInput.schema';
import { AttractionCreateWithoutTicketsInputObjectSchema as AttractionCreateWithoutTicketsInputObjectSchema } from './AttractionCreateWithoutTicketsInput.schema';
import { AttractionUncheckedCreateWithoutTicketsInputObjectSchema as AttractionUncheckedCreateWithoutTicketsInputObjectSchema } from './AttractionUncheckedCreateWithoutTicketsInput.schema';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './AttractionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AttractionUpdateWithoutTicketsInputObjectSchema), z.lazy(() => AttractionUncheckedUpdateWithoutTicketsInputObjectSchema)]),
  create: z.union([z.lazy(() => AttractionCreateWithoutTicketsInputObjectSchema), z.lazy(() => AttractionUncheckedCreateWithoutTicketsInputObjectSchema)]),
  where: z.lazy(() => AttractionWhereInputObjectSchema).optional()
}).strict();
export const AttractionUpsertWithoutTicketsInputObjectSchema: z.ZodType<Prisma.AttractionUpsertWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUpsertWithoutTicketsInput>;
export const AttractionUpsertWithoutTicketsInputObjectZodSchema = makeSchema();
