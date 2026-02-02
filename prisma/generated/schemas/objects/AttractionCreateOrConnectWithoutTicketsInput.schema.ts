import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './AttractionWhereUniqueInput.schema';
import { AttractionCreateWithoutTicketsInputObjectSchema as AttractionCreateWithoutTicketsInputObjectSchema } from './AttractionCreateWithoutTicketsInput.schema';
import { AttractionUncheckedCreateWithoutTicketsInputObjectSchema as AttractionUncheckedCreateWithoutTicketsInputObjectSchema } from './AttractionUncheckedCreateWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttractionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AttractionCreateWithoutTicketsInputObjectSchema), z.lazy(() => AttractionUncheckedCreateWithoutTicketsInputObjectSchema)])
}).strict();
export const AttractionCreateOrConnectWithoutTicketsInputObjectSchema: z.ZodType<Prisma.AttractionCreateOrConnectWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionCreateOrConnectWithoutTicketsInput>;
export const AttractionCreateOrConnectWithoutTicketsInputObjectZodSchema = makeSchema();
