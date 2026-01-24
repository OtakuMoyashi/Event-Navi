import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutEventInputObjectSchema as StoreCreateWithoutEventInputObjectSchema } from './StoreCreateWithoutEventInput.schema';
import { StoreUncheckedCreateWithoutEventInputObjectSchema as StoreUncheckedCreateWithoutEventInputObjectSchema } from './StoreUncheckedCreateWithoutEventInput.schema';
import { StoreCreateOrConnectWithoutEventInputObjectSchema as StoreCreateOrConnectWithoutEventInputObjectSchema } from './StoreCreateOrConnectWithoutEventInput.schema';
import { StoreCreateManyEventInputEnvelopeObjectSchema as StoreCreateManyEventInputEnvelopeObjectSchema } from './StoreCreateManyEventInputEnvelope.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutEventInputObjectSchema), z.lazy(() => StoreCreateWithoutEventInputObjectSchema).array(), z.lazy(() => StoreUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StoreCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => StoreCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StoreCreateManyEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => StoreWhereUniqueInputObjectSchema), z.lazy(() => StoreWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const StoreCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.StoreCreateNestedManyWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateNestedManyWithoutEventInput>;
export const StoreCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
