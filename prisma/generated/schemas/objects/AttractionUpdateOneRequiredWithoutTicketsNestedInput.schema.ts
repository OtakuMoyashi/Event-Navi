import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionCreateWithoutTicketsInputObjectSchema as AttractionCreateWithoutTicketsInputObjectSchema } from './AttractionCreateWithoutTicketsInput.schema';
import { AttractionUncheckedCreateWithoutTicketsInputObjectSchema as AttractionUncheckedCreateWithoutTicketsInputObjectSchema } from './AttractionUncheckedCreateWithoutTicketsInput.schema';
import { AttractionCreateOrConnectWithoutTicketsInputObjectSchema as AttractionCreateOrConnectWithoutTicketsInputObjectSchema } from './AttractionCreateOrConnectWithoutTicketsInput.schema';
import { AttractionUpsertWithoutTicketsInputObjectSchema as AttractionUpsertWithoutTicketsInputObjectSchema } from './AttractionUpsertWithoutTicketsInput.schema';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './AttractionWhereUniqueInput.schema';
import { AttractionUpdateToOneWithWhereWithoutTicketsInputObjectSchema as AttractionUpdateToOneWithWhereWithoutTicketsInputObjectSchema } from './AttractionUpdateToOneWithWhereWithoutTicketsInput.schema';
import { AttractionUpdateWithoutTicketsInputObjectSchema as AttractionUpdateWithoutTicketsInputObjectSchema } from './AttractionUpdateWithoutTicketsInput.schema';
import { AttractionUncheckedUpdateWithoutTicketsInputObjectSchema as AttractionUncheckedUpdateWithoutTicketsInputObjectSchema } from './AttractionUncheckedUpdateWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttractionCreateWithoutTicketsInputObjectSchema), z.lazy(() => AttractionUncheckedCreateWithoutTicketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AttractionCreateOrConnectWithoutTicketsInputObjectSchema).optional(),
  upsert: z.lazy(() => AttractionUpsertWithoutTicketsInputObjectSchema).optional(),
  connect: z.lazy(() => AttractionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AttractionUpdateToOneWithWhereWithoutTicketsInputObjectSchema), z.lazy(() => AttractionUpdateWithoutTicketsInputObjectSchema), z.lazy(() => AttractionUncheckedUpdateWithoutTicketsInputObjectSchema)]).optional()
}).strict();
export const AttractionUpdateOneRequiredWithoutTicketsNestedInputObjectSchema: z.ZodType<Prisma.AttractionUpdateOneRequiredWithoutTicketsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUpdateOneRequiredWithoutTicketsNestedInput>;
export const AttractionUpdateOneRequiredWithoutTicketsNestedInputObjectZodSchema = makeSchema();
