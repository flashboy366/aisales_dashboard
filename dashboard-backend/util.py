from datetime import datetime, timezone

def get_timestamp_from_date_string(date_string):
    date_object = datetime.strptime(date_string, '%d.%m.%Y')

    utc_date = date_object.strftime('%Y-%m-%dT%H:%M:%S.%fZ')

    return utc_date
