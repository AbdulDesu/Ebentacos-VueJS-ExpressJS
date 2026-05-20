/*
  Warnings:

  - The primary key for the `billdetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `billdetails` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `billdetails` table. All the data in the column will be lost.
  - You are about to drop the column `book_date` on the `booktable` table. All the data in the column will be lost.
  - You are about to drop the column `table_no` on the `booktable` table. All the data in the column will be lost.
  - You are about to alter the column `food_price` on the `food` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Made the column `food_id` on table `billdetails` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "billdetails" DROP CONSTRAINT "billdetails_pkey",
DROP COLUMN "id",
DROP COLUMN "qty",
ADD COLUMN     "item_qty" INTEGER,
ALTER COLUMN "food_id" SET NOT NULL,
ADD CONSTRAINT "billdetails_pkey" PRIMARY KEY ("bill_id", "food_id");

-- AlterTable
ALTER TABLE "billstatus" ADD COLUMN     "bill_address" TEXT,
ADD COLUMN     "bill_delivery" INTEGER,
ADD COLUMN     "bill_discount" INTEGER,
ADD COLUMN     "bill_method" TEXT,
ADD COLUMN     "bill_phone" TEXT,
ADD COLUMN     "bill_total" INTEGER,
ADD COLUMN     "bill_when" TEXT,
ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "bill_status" DROP NOT NULL,
ALTER COLUMN "bill_status" DROP DEFAULT,
ALTER COLUMN "bill_paid" DROP NOT NULL,
ALTER COLUMN "bill_paid" DROP DEFAULT;

-- AlterTable
ALTER TABLE "booktable" DROP COLUMN "book_date",
DROP COLUMN "table_no",
ADD COLUMN     "book_name" TEXT,
ADD COLUMN     "book_note" TEXT,
ADD COLUMN     "book_people" INTEGER,
ADD COLUMN     "book_phone" TEXT,
ADD COLUMN     "book_tables" INTEGER,
ADD COLUMN     "book_when" TEXT;

-- AlterTable
ALTER TABLE "cart" ALTER COLUMN "item_qty" DROP NOT NULL;

-- AlterTable
ALTER TABLE "food" ADD COLUMN     "food_category" TEXT,
ADD COLUMN     "food_desc" TEXT,
ADD COLUMN     "food_discount" INTEGER,
ADD COLUMN     "food_src" TEXT,
ADD COLUMN     "food_star" TEXT,
ADD COLUMN     "food_status" TEXT,
ADD COLUMN     "food_type" TEXT,
ADD COLUMN     "food_vote" TEXT,
ALTER COLUMN "food_name" DROP NOT NULL,
ALTER COLUMN "food_price" DROP NOT NULL,
ALTER COLUMN "food_price" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "user_birth" TEXT,
ADD COLUMN     "user_gender" TEXT,
ADD COLUMN     "user_phone" TEXT,
ALTER COLUMN "user_name" DROP NOT NULL,
ALTER COLUMN "user_email" DROP NOT NULL,
ALTER COLUMN "user_password" DROP NOT NULL;
