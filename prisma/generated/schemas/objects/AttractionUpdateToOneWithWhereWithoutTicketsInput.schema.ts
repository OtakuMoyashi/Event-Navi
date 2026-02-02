import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './AttractionWhereInput.schema';
import { AttractionUpdateWithoutTicketsInputObjectSchema as AttractionUpdateWithoutTicketsInputObjectSchema } from './AttractionUpdateWithoutTicketsInput.schema';
import { AttractionUncheckedUpdateWithoutTicketsInputObjectSchema as AttractionUncheckedUpdateWithoutTicketsInputObjectSchema } from './AttractionUncheckedUpdateWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttractionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AttractionUpdateWithoutTicketsInputObjectSchema), z.lazy(() => AttractionUncheckedUpdateWithoutTicketsInputObjectSchema)])
}).strict();
export const AttractionUpdateToOneWithWhereWithoutTicketsInputObjectSchema: z.ZodType<Prisma.AttractionUpdateToOneWithWhereWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUpdateToOneWithWhereWithoutTicketsInput>;
export const AttractionUpdateToOneWithWhereWithoutTicketsInputObjectZodSchema = makeSchema();
