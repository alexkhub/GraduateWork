from django.core.mail import send_mail


def send():
    send_mail(
        'Добро пожаловать',
        'Мы будем присылать вам QR код ',
        'aleksandrkhubaevwork@gmail.com',
        ['aleksandrkhubaev04@gmail.com'],
        fail_silently=False
    )