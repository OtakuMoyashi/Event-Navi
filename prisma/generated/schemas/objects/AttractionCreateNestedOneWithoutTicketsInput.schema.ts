import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionCreateWithoutTicketsInputObjectSchema as AttractionCreateWithoutTicketsInputObjectSchema } from './AttractionCreateWithoutTicketsInput.schema';
import { AttractionUncheckedCreateWithoutTicketsInputObjectSchema as AttractionUncheckedCreateWithoutTicketsInputObjectSchema } from './AttractionUncheckedCreateWithoutTicketsInput.schema';
import { AttractionCreateOrConnectWithoutTicketsInputObjectSchema as AttractionCreateOrConnectWithoutTicketsInputObjectSchema } from './AttractionCreateOrConnectWithoutTicketsInput.schema';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './AttractionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttractionCreateWithoutTicketsInputObjectSchema), z.lazy(() => AttractionUncheckedCreateWithoutTicketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AttractionCreateOrConnectWithoutTicketsInputObjectSchema).optional(),
  connect: z.lazy(() => AttractionWhereUniqueInputObjectSchema).optional()
}).strict();
export const AttractionCreateNestedOneWithoutTicketsInputObjectSchema: z.ZodType<Prisma.AttractionCreateNestedOneWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionCreateNestedOneWithoutTicketsInput>;
export const AttractionCreateNestedOneWithoutTicketsInputObjectZodSchema = makeSchema();
