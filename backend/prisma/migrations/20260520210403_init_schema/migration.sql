-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "food" (
    "food_id" SERIAL NOT NULL,
    "food_name" TEXT NOT NULL,
    "food_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("food_id")
);

-- CreateTable
CREATE TABLE "cart" (
    "user_id" INTEGER NOT NULL,
    "food_id" INTEGER NOT NULL,
    "item_qty" INTEGER NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("user_id","food_id")
);

-- CreateTable
CREATE TABLE "billstatus" (
    "bill_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "bill_status" INTEGER NOT NULL DEFAULT 0,
    "bill_paid" TEXT NOT NULL DEFAULT 'false',

    CONSTRAINT "billstatus_pkey" PRIMARY KEY ("bill_id")
);

-- CreateTable
CREATE TABLE "billdetails" (
    "id" SERIAL NOT NULL,
    "bill_id" INTEGER NOT NULL,
    "food_id" INTEGER,
    "qty" INTEGER,

    CONSTRAINT "billdetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "booktable" (
    "book_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "book_date" TIMESTAMP(3),
    "table_no" TEXT,

    CONSTRAINT "booktable_pkey" PRIMARY KEY ("book_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_email_key" ON "user"("user_email");

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("food_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billstatus" ADD CONSTRAINT "billstatus_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billdetails" ADD CONSTRAINT "billdetails_bill_id_fkey" FOREIGN KEY ("bill_id") REFERENCES "billstatus"("bill_id") ON DELETE CASCADE ON UPDATE CASCADE;
