# Laravel Echo socket.io realtime app in Vue remote SPA

Realtime application using Laravel backend and Vue remote SPA webapp.
The project is based in Laravel 8 and includes Api Tokens based Sanctum authentication.
Public and private channels demos are included.

### Dependencies

- PHP (min v7.2)
- Redis (to manage queues in the backend https://redis.io/)
- Node.js
- Npm
- Vue-Cli

## Installation

### Server side (Laravel folder)

Install the dependencies and start the server.

```sh
cd laravel
composer install
php artisan serve
```

In a new terminal start laravel echo server for realtime connections

```sh
npm install -g laravel-echo-server
laravel-echo-server start
```

In a new terminal start Redis

```sh
redis-server
```

#### Some info

In config/app.php uncomment this line:

```php
App\Providers\BroadcastServiceProvider::class,
```

In routes/api.php add auth middleware for broadcast requests:

```php
Broadcast::routes(['middleware' => ['auth:sanctum']]);
```

### Client side (Vue folder)

Install the dependencies and start the server.

```sh
npm install
npm run serve
```
