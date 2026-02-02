import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema'

const makeSchema = () => z.object({
  set: StoreTypeSchema.optional()
}).strict();
export const EnumStoreTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumStoreTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumStoreTypeFieldUpdateOperationsInput>;
export const EnumStoreTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
