QUnit.module('High Level Functions');

QUnit.test('making a calendar', function () {
    var days, newdate;
    
    days = []
    newdate = new Tempus(2012, 1, 13);
    newdate.eachWeekOfMonth(function (week, week_newdate) {
        var subDays = [];
        week_newdate.eachDayOfWeek(function (day, day_newdate) {
          subDays.push(day_newdate.date());
        });
        days.push(subDays);
    });

    deepEqual(days,
        [
            // S   M   T   W   T   F   S //
            [ 29, 30, 31,  1,  2,  3,  4 ],
            [  5,  6,  7,  8,  9, 10, 11 ],
            [ 12, 13, 14, 15, 16, 17, 18 ],
            [ 19, 20, 21, 22, 23, 24, 25 ],
            [ 26, 27, 28, 29,  1,  2,  3 ]
        ],
        'Calendar representation of month');

    days = [];
    newdate = new Tempus(2012, 2, 29);
    newdate.eachWeekOfMonth(function (week, week_newdate) {
        var subDays = [];
        week_newdate.eachISODayOfWeek(function (day, day_newdate) {
          subDays.push(day_newdate.date());
        });
        days.push(subDays);
    });

    deepEqual(days,
        [
            // M   T   W   T   F   S   S //
            [ 27, 28, 29,  1,  2,  3,  4 ],
            [  5,  6,  7,  8,  9, 10, 11 ],
            [ 12, 13, 14, 15, 16, 17, 18 ],
            [ 19, 20, 21, 22, 23, 24, 25 ],
            [ 26, 27, 28, 29, 30, 31,  1 ]
        ],
        'Calendar representation of month');

    days = [];
    newdate = new Tempus(2011, 11, 1);
    newdate.eachWeekOfMonth(function (week, week_newdate) {
        var subDays = [];
        week_newdate.eachISODayOfWeek(function (day, day_newdate) {
          subDays.push(day_newdate.date());
        });
        days.push(subDays);
    });

    deepEqual(days,
        [
            // M   T   W   T   F   S   S //
            [ 28, 29, 30,  1,  2,  3,  4 ],
            [  5,  6,  7,  8,  9, 10, 11 ],
            [ 12, 13, 14, 15, 16, 17, 18 ],
            [ 19, 20, 21, 22, 23, 24, 25 ],
            [ 26, 27, 28, 29, 30, 31,  1 ]
        ],
        'Calendar representation of month');

    days = [];
    newdate = new Tempus(2012, 0, 1);
    newdate.eachWeekOfMonth(function (week, week_newdate) {
        var subDays = [];
        week_newdate.eachISODayOfWeek(function (day, day_newdate) {
          subDays.push(day_newdate.date());
        });
        days.push(subDays);
    });

    deepEqual(days,
        [
            // M   T   W   T   F   S   S //
            [ 26, 27, 28, 29, 30, 31,  1 ],
            [  2,  3,  4,  5,  6,  7,  8 ],
            [  9, 10, 11, 12, 13, 14, 15 ],
            [ 16, 17, 18, 19, 20, 21, 22 ],
            [ 23, 24, 25, 26, 27, 28, 29 ],
            [ 30, 31,  1,  2,  3,  4,  5 ]
        ],
        'Calendar representation of month');
});