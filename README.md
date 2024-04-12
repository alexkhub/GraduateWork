# GraduateWork 
___
**GraduateWork**-
a project that will allow you to transfer all paper work related to educational journals and checking work online.

___
Briefly about technology

+ Frontend - React
+ Backend - Django rest framework
+ SQL - PostgresSQL
+ NoSQL - Redis

---

## Backend 

![PyPI - Version](https://img.shields.io/pypi/v/django?label=django&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/djangorestframework?label=djangorestframework&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/django-cors-headers?label=django-cors-headers&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/Pillow?label=Pillow&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/django-sortedm2m?label=django-sortedm2m&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/django-autoslug?label=django-autoslug&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/django-jazzmin?label=django-jazzmin&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/djoser?label=djoser&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/django-debug-toolbar?label=django-debug-toolbar&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/django-filter?label=django-filter&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/argon2-cffi?label=argon2-cffi&labelColor=green)
![PyPI - Version](https://img.shields.io/pypi/v/pytils?label=pytils&labelColor=green&color=blue)
![PyPI - Version](https://img.shields.io/pypi/v/celery?label=celery&labelColor=green&color=blue)
![PyPI - Version](https://img.shields.io/pypi/v/django-redis?label=django-redis&labelColor=green&color=blue)
![PyPI - Version](https://img.shields.io/pypi/v/django-celery-results?label=django-celery-results&labelColor=green&color=blue)
![PyPI - Version](https://img.shields.io/pypi/v/gevent?label=gevent&labelColor=green&color=blue)
![PyPI - Version](https://img.shields.io/pypi/v/django-celery-beat?label=django-celery-beat&labelColor=green&color=blue)
![PyPI - Version](https://img.shields.io/pypi/v/flower?label=flower&labelColor=green&color=blue)
![PyPI - Version](https://img.shields.io/pypi/v/django-import-export?label=django-import-export&labelColor=green&color=blue)
___
### Install package, docker and redis

```
pip install -r requirements.txt
```

#### [Windows docker install](https://docs.docker.com/desktop/install/windows-install/)
#### [Linux docker install](https://selectel.ru/blog/docker-install-ubuntu/)
#### [Celery install](https://docs.celeryq.dev/en/v5.3.6/getting-started/first-steps-with-celery.html)

#### Install redis
```
docker run -d -p 6379:6379 redis
```
___

### Settings 

#### DJOSER
```python
DJOSER = {
    'PASSWORD_RESET_CONFIRM_URL': '/password/reset/confirm/{uid}/{token}',
    'USERNAME_RESET_CONFIRM_URL': '/username/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL': '/activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL': True,
    'SERIALIZERS': {},
}
```
#### DRF

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',  # OAuth2, JWT
    ),
  
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend']
}
REST_USE_JWT = True
```

#### JWT

```python
SIMPLE_JWT = {
    # Устанавливаем срок жизни токена
    'ACCESS_TOKEN_LIFETIME': timedelta(days=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=30),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': False,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUDIENCE': None,
    'ISSUER': None,

    'AUTH_HEADER_TYPES': ('Bearer', 'JWT',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',

    'AUTH_TOKEN_CLASSES': (
        'rest_framework_simplejwt.tokens.AccessToken',
        # 'SocialDjango.token.CustomJWTToken'
    ),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(days=1),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=30),
}
```

#### Cache
```python
CACHES = {
    'default': {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        }
    }
}

SESSION_ENGINE = "django.contrib.sessions.backends.cache"
SESSION_CACHE_ALIAS = "default"
```

#### Celery

```python
REDIS_HOST = '127.0.0.1'
REDIS_PORT = '6379'
CELERY_BROKER_URL = 'redis://' + REDIS_HOST + ':' + REDIS_PORT + '/0'
CELERY_BROKEN_TRANSPORT_OPTIONS = {'visibility_timeout': 3600}
CELERY_RESULT_BACKEND = 'django-db'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
```
---

### Celery 

#### Create celery app

```python
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'graduatework_drf.settings')

app = Celery('graduatework_drf')
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()

```

After that we must add the following code to the **init** file.

```python
from .celery import app as celery_app

__all__ = ('celery_app',)
```

___