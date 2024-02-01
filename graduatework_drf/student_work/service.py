from datetime import datetime


def get_date():
    date = str(datetime.today())
    return date[:10]
