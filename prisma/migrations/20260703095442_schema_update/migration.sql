/*
  Warnings:

  - You are about to drop the column `adress` on the `UserMosel` table. All the data in the column will be lost.
  - Added the required column `address` to the `UserMosel` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserMosel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL
);
INSERT INTO "new_UserMosel" ("email", "id", "username") SELECT "email", "id", "username" FROM "UserMosel";
DROP TABLE "UserMosel";
ALTER TABLE "new_UserMosel" RENAME TO "UserMosel";
CREATE UNIQUE INDEX "UserMosel_email_key" ON "UserMosel"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
