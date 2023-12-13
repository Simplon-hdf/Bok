/*
  Warnings:

  - Made the column `human_Informations_UUID` on table `Authors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `human_Informations_UUID` on table `Borrowers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `human_Informations_UUID` on table `Employees` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Authors" DROP CONSTRAINT "Authors_human_Informations_UUID_fkey";

-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_borrow_UUID_fkey";

-- DropForeignKey
ALTER TABLE "Borrowers" DROP CONSTRAINT "Borrowers_human_Informations_UUID_fkey";

-- DropForeignKey
ALTER TABLE "Employees" DROP CONSTRAINT "Employees_human_Informations_UUID_fkey";

-- AlterTable
ALTER TABLE "Authors" ALTER COLUMN "human_Informations_UUID" SET NOT NULL;

-- AlterTable
ALTER TABLE "Books" ALTER COLUMN "borrow_UUID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Borrowers" ALTER COLUMN "human_Informations_UUID" SET NOT NULL;

-- AlterTable
ALTER TABLE "Employees" ALTER COLUMN "human_Informations_UUID" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Authors" ADD CONSTRAINT "Authors_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrowers" ADD CONSTRAINT "Borrowers_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_borrow_UUID_fkey" FOREIGN KEY ("borrow_UUID") REFERENCES "Borrows"("UUID") ON DELETE SET NULL ON UPDATE CASCADE;
