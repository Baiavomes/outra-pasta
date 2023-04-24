-- CreateTable
CREATE TABLE "Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "professorid" INTEGER NOT NULL,
    CONSTRAINT "Aluno_professorid_fkey" FOREIGN KEY ("professorid") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
