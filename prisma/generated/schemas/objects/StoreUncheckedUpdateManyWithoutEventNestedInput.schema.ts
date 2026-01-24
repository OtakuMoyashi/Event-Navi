import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateWithoutEventInputObjectSchema as StoreCreateWithoutEventInputObjectSchema } from './StoreCreateWithoutEventInput.schema';
import { StoreUncheckedCreateWithoutEventInputObjectSchema as StoreUncheckedCreateWithoutEventInputObjectSchema } from './StoreUncheckedCreateWithoutEventInput.schema';
import { StoreCreateOrConnectWithoutEventInputObjectSchema as StoreCreateOrConnectWithoutEventInputObjectSchema } from './StoreCreateOrConnectWithoutEventInput.schema';
import { StoreUpsertWithWhereUniqueWithoutEventInputObjectSchema as StoreUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './StoreUpsertWithWhereUniqueWithoutEventInput.schema';
import { StoreCreateManyEventInputEnvelopeObjectSchema as StoreCreateManyEventInputEnvelopeObjectSchema } from './StoreCreateManyEventInputEnvelope.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreUpdateWithWhereUniqueWithoutEventInputObjectSchema as StoreUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './StoreUpdateWithWhereUniqueWithoutEventInput.schema';
import { StoreUpdateManyWithWhereWithoutEventInputObjectSchema as StoreUpdateManyWithWhereWithoutEventInputObjectSchema } from './StoreUpdateManyWithWhereWithoutEventInput.schema';
import { StoreScalarWhereInputObjectSchema as StoreScalarWhereInputObjectSchema } from './StoreScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StoreCreateWithoutEventInputObjectSchema), z.lazy(() => StoreCreateWithoutEventInputObjectSchema).array(), z.lazy(() => StoreUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StoreCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => StoreCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StoreUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => StoreUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StoreCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StoreWhereUniqueInputObjectSchema), z.lazy(() => StoreWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StoreWhereUniqueInputObjectSchema), z.lazy(() => StoreWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StoreWhereUniqueInputObjectSchema), z.lazy(() => StoreWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StoreWhereUniqueInputObjectSchema), z.lazy(() => StoreWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StoreUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => StoreUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StoreUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => StoreUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StoreScalarWhereInputObjectSchema), z.lazy(() => StoreScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StoreUncheckedUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.StoreUncheckedUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUncheckedUpdateManyWithoutEventNestedInput>;
export const StoreUncheckedUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
