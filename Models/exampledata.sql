TRUNCATE TABLE "Parks", "Visits", "Users" RESTART IDENTITY;

-- Ensure we have a user to associate to the reviews below
INSERT INTO "Users" ("FullName", "Email", "HashedPassword") VALUES ('Sarah', 'sarah@suncoast.io', 'xxxxx');
INSERT INTO "Users" ("FullName", "Email", "HashedPassword") VALUES ('Mary', 'mary@suncoast.io', 'xxxxx');

INSERT INTO "Parks" ("Name", "Latitude", "Longitude") VALUES ('Acadia', 44.35, -68.21);
INSERT INTO "Parks" ("Name", "Latitude", "Longitude") VALUES ('American Samoa', -14.25, -170.68);
INSERT INTO "Parks" ("Name", "Latitude", "Longitude") VALUES ('Arches', 38.68, -109.57);
INSERT INTO "Parks" ("Name", "Latitude", "Longitude") VALUES ('Badlands', 43.75, -102.5);

INSERT INTO "Visits" ("ParkId", "VisitedAt", "TravelCompanions", "Summary", "LikeDislike", "UserId") VALUES (1, '2020-01-01 14:23:55', 'Sarah', 'Lorem ipsum', true, 1);
INSERT INTO "Visits" ("ParkId", "VisitedAt", "TravelCompanions", "Summary", "LikeDislike", "UserId") VALUES (1, '2020-01-01 18:23:55', 'Mary', 'Lorem ipsum', true, 1);
