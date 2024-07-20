-- CreateTable
CREATE TABLE `Document` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `isArchived` BOOLEAN NOT NULL,
    `parentDocumentId` VARCHAR(191) NULL,
    `content` VARCHAR(191) NULL,
    `coverImage` VARCHAR(191) NULL,
    `icon` VARCHAR(191) NULL,
    `isPublished` BOOLEAN NOT NULL,

    INDEX `by_user`(`userId`),
    INDEX `by_user_parent`(`userId`, `parentDocumentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_parentDocumentId_fkey` FOREIGN KEY (`parentDocumentId`) REFERENCES `Document`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
