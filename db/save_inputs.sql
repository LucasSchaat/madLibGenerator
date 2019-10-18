INSERT INTO madlibs (
    input_one,
    input_two,
    input_three,
    input_four,
    input_five,
    input_six,
    input_seven,
    input_eight,
    input_nine,
    input_ten,
    input_eleven,
    input_twelve,
    input_thirteen,
    input_fourteen,
    input_fifteen,
    input_sixteen,
    input_seventeen,
    input_eighteen,
    input_nineteen,
    input_twenty
)
VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11,
    $12,
    $13,
    $14,
    $15,
    $16,
    $17,
    $18,
    $19,
    $20
)
RETURNING *;

-- UPDATE madlibs
-- SET input_one = $1,
--     input_two = $2,
--     input_three = $3,
--     input_four = $4,
--     input_five = $5,
--     input_six = $6,
--     input_seven = $7,
--     input_eight = $8,
--     input_nine = $9,
--     input_ten = $10,
--     input_eleven = $11,
--     input_twelve = $12,
--     input_thirteen = $13,
--     input_fourteen = $14,
--     input_fifteen = $15,
--     input_sixteen = $16,
--     input_seventeen = $17,
--     input_eighteen = $18,
--     input_nineteen = $19,
--     input_twenty = $20
-- WHERE id = (
--     SELECT
--         MAX (id)
--     FROM madlibs
-- )
-- RETURNING *;