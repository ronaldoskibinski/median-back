/*
  Warnings:

  - You are about to drop the column `publishied` on the `article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `article` DROP COLUMN `publishied`,
    ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false;
