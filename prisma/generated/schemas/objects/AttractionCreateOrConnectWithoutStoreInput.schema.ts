import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './AttractionWhereUniqueInput.schema';
import { AttractionCreateWithoutStoreInputObjectSchema as AttractionCreateWithoutStoreInputObjectSchema } from './AttractionCreateWithoutStoreInput.schema';
import { AttractionUncheckedCreateWithoutStoreInputObjectSchema as AttractionUncheckedCreateWithoutStoreInputObjectSchema } from './AttractionUncheckedCreateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AttractionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AttractionCreateWithoutStoreInputObjectSchema), z.lazy(() => AttractionUncheckedCreateWithoutStoreInputObjectSchema)])
}).strict();
export const AttractionCreateOrConnectWithoutStoreInputObjectSchema: z.ZodType<Prisma.AttractionCreateOrConnectWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionCreateOrConnectWithoutStoreInput>;
export const AttractionCreateOrConnectWithoutStoreInputObjectZodSchema = makeSchema();
