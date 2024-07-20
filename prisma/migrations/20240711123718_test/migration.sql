/*
  Warnings:

  - You are about to drop the column `userId` on the `document` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `by_user` ON `document`;

-- DropIndex
DROP INDEX `by_user_parent` ON `document`;

-- AlterTable
ALTER TABLE `document` DROP COLUMN `userId`;
