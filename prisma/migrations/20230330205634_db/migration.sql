-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "patient" TEXT NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "blood_pressure" TEXT NOT NULL,
    "oxygen_saturation" INTEGER NOT NULL,
    "pulse" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
