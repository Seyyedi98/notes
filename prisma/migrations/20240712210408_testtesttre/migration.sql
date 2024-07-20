/*
  Warnings:

  - You are about to drop the column `parentDocumentId` on the `document` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `document` DROP FOREIGN KEY `Document_parentDocumentId_fkey`;

-- AlterTable
ALTER TABLE `document` DROP COLUMN `parentDocumentId`;
