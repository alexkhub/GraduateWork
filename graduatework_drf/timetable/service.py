from datetime import date


def get_date() -> str:
    today = str(date.today())
    return today


def get_day_of_the_week() -> str:
    today = date.today()
    day_of_the_week = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб',  7: 'вс'}
    return day_of_the_week[today.weekday()+1]


def definition_evenness() -> str:
    week_number = date.today().isocalendar().week
    if week_number % 2 == 0:
        return 'четная'
    return 'нечетная'
