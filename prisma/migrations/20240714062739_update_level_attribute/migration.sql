/*
  Warnings:

  - Made the column `level` on table `document` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `document` MODIFY `level` INTEGER NOT NULL;
