-- DropForeignKey
ALTER TABLE "Authors" DROP CONSTRAINT "Authors_human_Informations_UUID_fkey";

-- DropForeignKey
ALTER TABLE "Borrowers" DROP CONSTRAINT "Borrowers_human_Informations_UUID_fkey";

-- AddForeignKey
ALTER TABLE "Authors" ADD CONSTRAINT "Authors_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Borrowers" ADD CONSTRAINT "Borrowers_human_Informations_UUID_fkey" FOREIGN KEY ("human_Informations_UUID") REFERENCES "HumanInformations"("UUID") ON DELETE CASCADE ON UPDATE CASCADE;
