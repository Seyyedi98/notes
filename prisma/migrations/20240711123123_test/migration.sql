/*
  Warnings:

  - You are about to alter the column `userId` on the `document` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `document` MODIFY `userId` INTEGER NOT NULL;
