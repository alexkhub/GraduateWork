from datetime import date


def get_date():
    today = str(date.today())
    return today


def get_day_of_the_week() -> str:
    today = date.today()

    day_of_the_week = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб'}
    return day_of_the_week[today.weekday()]
