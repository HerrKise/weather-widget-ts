# widget-ts

## Описание решений

Источником данных используется сервис [openweathermap](https://openweathermap.org/current). Для полноценной работы виджета я обращался к 4 адресам:

-   запрос на получения координат пользователя;
-   запрос на определение города по координатам;
-   запрос на определение координат города по названию;
-   запрос на определение погоды по координатам;

При первом запуске виджета (или когда отстутствуют данные в localstorage), идёт запрос на получение координат пользователя, по ним определяется населённый пункт и сопутствующие данные, и далее по этим данным идёт запрос на получение данных о погоде. Погода в дальнейшем отрисовывается в соответсвующих блоках. Необходимая информация по каждому конкретному городу сохраняется в config и складывается в localstorage и используется при обновлении страницы.

При добавлении новых городов принцип работы такой же. Есть нюанс с тем, что сервис openweathermap не выдаёт ошибок, если намеренно написать какое-то некорректное имя города, возвращается просто пустой массив, поэтому базовую валидацию пришлось прописать отталкиваясь от этого пустого массива.

Я немного упростил себе задачу и при выдаче результатов запросов по погоде и городам я забираю только первый элемент из массива ответа сервера. Как показала практика, первым элементом выдаётся самые известный или популрный город по запросу. На примере: при запросе погоды в городе Санкт-Петербург, будет показана погода в городе, который находится в России, а не где-нибудь в США.

В проекте я решил не использовать vuex, так как самих файлов немного и абсолютно достаточным мне показалось передавать пропсы от родителя к дочерним компонентам и поднимать обратно "наверх" события и данные через emit.

Из сторонних библиотек я использовал иконки из bootstrap(только их, в проекте не установлен полноценный bootstrap), остальную стилизацию я решил сделать сам и axios, для упрощения общения с сервером.

На данный момент я публикую в открытом доступе appId-ключ, который лежит config.json, но вы конечно можете использовать свой. Это сделано в рамках тестового задания, в остальном я понимаю, что следует хранить ключ в переменных окружения.

Виджет задеплоен [здесь](https://weather-widget-ts.netlify.app/)
И его можно встроить в свой сайт, используя простенький тэг iframe:

```
<iframe
    frameborder="0"
    style="border: 0px"
    width="250px"
    height="300px"
    src="https://weather-widget-ts.netlify.app/">
</iframe>
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
