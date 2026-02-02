import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionCreateWithoutStoreInputObjectSchema as AttractionCreateWithoutStoreInputObjectSchema } from './AttractionCreateWithoutStoreInput.schema';
import { AttractionUncheckedCreateWithoutStoreInputObjectSchema as AttractionUncheckedCreateWithoutStoreInputObjectSchema } from './AttractionUncheckedCreateWithoutStoreInput.schema';
import { AttractionCreateOrConnectWithoutStoreInputObjectSchema as AttractionCreateOrConnectWithoutStoreInputObjectSchema } from './AttractionCreateOrConnectWithoutStoreInput.schema';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './AttractionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AttractionCreateWithoutStoreInputObjectSchema), z.lazy(() => AttractionUncheckedCreateWithoutStoreInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AttractionCreateOrConnectWithoutStoreInputObjectSchema).optional(),
  connect: z.lazy(() => AttractionWhereUniqueInputObjectSchema).optional()
}).strict();
export const AttractionUncheckedCreateNestedOneWithoutStoreInputObjectSchema: z.ZodType<Prisma.AttractionUncheckedCreateNestedOneWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionUncheckedCreateNestedOneWithoutStoreInput>;
export const AttractionUncheckedCreateNestedOneWithoutStoreInputObjectZodSchema = makeSchema();
