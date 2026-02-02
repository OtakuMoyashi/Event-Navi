import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreCreateWithoutEventInputObjectSchema as StoreCreateWithoutEventInputObjectSchema } from './StoreCreateWithoutEventInput.schema';
import { StoreUncheckedCreateWithoutEventInputObjectSchema as StoreUncheckedCreateWithoutEventInputObjectSchema } from './StoreUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StoreCreateWithoutEventInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const StoreCreateOrConnectWithoutEventInputObjectSchema: z.ZodType<Prisma.StoreCreateOrConnectWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateOrConnectWithoutEventInput>;
export const StoreCreateOrConnectWithoutEventInputObjectZodSchema = makeSchema();
