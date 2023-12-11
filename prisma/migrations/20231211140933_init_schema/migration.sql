-- CreateTable
CREATE TABLE "HumanInformations" (
    "UUID" CHAR(36) NOT NULL,
    "first_name" VARCHAR(20) NOT NULL,
    "last_name" VARCHAR(30) NOT NULL,

    CONSTRAINT "human_informations_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Authors" (
    "UUID" CHAR(36) NOT NULL,
    "human_Informations_UUID" CHAR(36),

    CONSTRAINT "authors_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Borrowers" (
    "UUID" CHAR(36) NOT NULL,
    "human_Informations_UUID" CHAR(36),

    CONSTRAINT "borrowers_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Employees" (
    "UUID" CHAR(36) NOT NULL,
    "mail_address" VARCHAR(80) NOT NULL,
    "password" CHAR(72) NOT NULL,
    "human_Informations_UUID" CHAR(36),

    CONSTRAINT "employees_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Books" (
    "UUID" CHAR(36) NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "borrow_UUID" TEXT NOT NULL,
    "authors_UUID" CHAR(36) NOT NULL,

    CONSTRAINT "books_uuid" PRIMARY KEY ("UUID")
);

-- CreateTable
CREATE TABLE "Borrows" (
    "UUID" CHAR(36) NOT NULL,
    "status" INTEGER NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATE NOT NULL,
    "employees_UUID" TEXT NOT NULL,
    "borrowers_UUID" CHAR(36) NOT NULL,

    CONSTRAINT "borrows_uuid" PRIMARY KEY ("UUID")
);

-- CreateIndex
CREATE UNIQUE INDEX "HumanInformations_UUID_key" ON "HumanInformations"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Authors_UUID_key" ON "Authors"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Borrowers_UUID_key" ON "Borrowers"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_UUID_key" ON "Employees"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_mail_address_key" ON "Employees"("mail_address");

-- CreateIndex
CREATE UNIQUE INDEX "Books_UUID_key" ON "Books"("UUID");

-- CreateIndex
CREATE UNIQUE INDEX "Borrows_UUID_key" ON "Borrows"("UUID");

-- AddForeignKey
ALTER TABLE "Authors" ADD CONSTRAINT "Authors_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrowers" ADD CONSTRAINT "Borrowers_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_borrow_UUID_fkey" FOREIGN KEY ("borrow_UUID") REFERENCES "Borrows"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_authors_UUID_fkey" FOREIGN KEY ("authors_UUID") REFERENCES "Authors"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrows" ADD CONSTRAINT "Borrows_employees_UUID_fkey" FOREIGN KEY ("employees_UUID") REFERENCES "Employees"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrows" ADD CONSTRAINT "Borrows_borrowers_UUID_fkey" FOREIGN KEY ("borrowers_UUID") REFERENCES "Borrowers"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
