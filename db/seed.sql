-- THIS IS THE FILE THAT I WOULD USE TO CREATE THE TABLE IN YOUR DATABASE

CREATE TABLE madlibs (
    id SERIAL PRIMARY KEY,
    input_one VARCHAR(30),
    input_two VARCHAR(30),
    input_three VARCHAR(30),
    input_four VARCHAR(30),
    input_five VARCHAR(30),
    input_six VARCHAR(30),
    input_seven VARCHAR(30),
    input_eight VARCHAR(30),
    input_nine VARCHAR(30),
    input_ten VARCHAR(30),
    input_eleven VARCHAR(30),
    input_twelve VARCHAR(30),
    input_thirteen VARCHAR(30),
    input_fourteen VARCHAR(30),
    input_fifteen VARCHAR(30),
    input_sixteen VARCHAR(30),
    input_seventeen VARCHAR(30),
    input_eighteen VARCHAR(30),
    input_nineteen VARCHAR(30),
    input_twenty VARCHAR(30)
);

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
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
);

SELECT * FROM madlibs;