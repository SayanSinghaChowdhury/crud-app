-- CreateTable
CREATE TABLE "UserMosel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adress" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserMosel_email_key" ON "UserMosel"("email");
