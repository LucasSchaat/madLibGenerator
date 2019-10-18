SELECT *
FROM madlibs
WHERE id = (
    SELECT MAX(id)
    FROM madlibs
);