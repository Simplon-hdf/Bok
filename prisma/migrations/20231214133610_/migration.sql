/*
  Warnings:

  - You are about to drop the column `human_informations_UUID` on the `Authors` table. All the data in the column will be lost.
  - You are about to drop the column `author_UUID` on the `Books` table. All the data in the column will be lost.
  - You are about to drop the column `human_informations_UUID` on the `Borrowers` table. All the data in the column will be lost.
  - You are about to drop the column `borrower_UUID` on the `Borrows` table. All the data in the column will be lost.
  - You are about to drop the column `employee_UUID` on the `Borrows` table. All the data in the column will be lost.
  - You are about to drop the column `human_informations_UUID` on the `Employees` table. All the data in the column will be lost.
  - Added the required column `human_Informations_UUID` to the `Authors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authors_UUID` to the `Books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `human_Informations_UUID` to the `Borrowers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `borrowers_UUID` to the `Borrows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employees_UUID` to the `Borrows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `human_Informations_UUID` to the `Employees` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Authors" DROP CONSTRAINT "Authors_human_informations_UUID_fkey";

-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_author_UUID_fkey";

-- DropForeignKey
ALTER TABLE "Borrowers" DROP CONSTRAINT "Borrowers_human_informations_UUID_fkey";

-- DropForeignKey
ALTER TABLE "Borrows" DROP CONSTRAINT "Borrows_borrower_UUID_fkey";

-- DropForeignKey
ALTER TABLE "Borrows" DROP CONSTRAINT "Borrows_employee_UUID_fkey";

-- DropForeignKey
ALTER TABLE "Employees" DROP CONSTRAINT "Employees_human_informations_UUID_fkey";

-- AlterTable
ALTER TABLE "Authors" DROP COLUMN "human_informations_UUID",
ADD COLUMN     "human_Informations_UUID" CHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE "Books" DROP COLUMN "author_UUID",
ADD COLUMN     "authors_UUID" CHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE "Borrowers" DROP COLUMN "human_informations_UUID",
ADD COLUMN     "human_Informations_UUID" CHAR(36) NOT NULL;

-- AlterTable
ALTER TABLE "Borrows" DROP COLUMN "borrower_UUID",
DROP COLUMN "employee_UUID",
ADD COLUMN     "borrowers_UUID" CHAR(36) NOT NULL,
ADD COLUMN     "employees_UUID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employees" DROP COLUMN "human_informations_UUID",
ADD COLUMN     "human_Informations_UUID" CHAR(36) NOT NULL;

-- AddForeignKey
ALTER TABLE "Authors" ADD CONSTRAINT "Authors_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrowers" ADD CONSTRAINT "Borrowers_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_authors_UUID_fkey" FOREIGN KEY ("authors_UUID") REFERENCES "Authors"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrows" ADD CONSTRAINT "Borrows_employees_UUID_fkey" FOREIGN KEY ("employees_UUID") REFERENCES "Employees"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrows" ADD CONSTRAINT "Borrows_borrowers_UUID_fkey" FOREIGN KEY ("borrowers_UUID") REFERENCES "Borrowers"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;
