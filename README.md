# Case: Battle with PowerPoint

## English version

### Description
This project is a web application that allows users to add, move, and delete circles within a slide area. The circles are added at random positions and sizes within the slide area. The application is built using React and TypeScript, ensuring a modern and maintainable codebase. The project also includes functionality for selecting multiple circles and deleting them using the "**Backspace**" key. To select circles, you need to hold down the "**Left Control**" key

### Demo
You can view a live demo of the project at https://slider-ai.herokuapp.com/.

### Run
To run the project locally, you need to have Docker and Docker Compose installed, follow these steps:

**1. Docker installation:** https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository

**2. Clone the repository:**  
```shell
git clone https://github.com/Fa4stik/slider_ai.git && cd slider_ai
```

**3. Run the project:**  
```shell
docker compose up
```
This command will build and start the application. You can access it in your browser at http://localhost or http://127.0.0.1.  


### Build
To build the project using the production Dockerfile, follow these steps:  

**1. Clone the repository:**  
```shell
git clone https://github.com/Fa4stik/slider_ai.git && cd slider_ai
```

**2. Build the Docker image:**  
```shell
docker build -f Dockerfile_prod -t fa4stik/slider_ai:latest .
```

**3. Run the Docker container:**  
```shell
docker run -p 80:80 fa4stik/slider_ai:latest
```

This command will start the application in production mode. You can access it in your browser at http://localhost or http://127.0.0.1.

### Run without Docker
To run the project without Docker, follow these steps:

**1. Install Node.js:**
Go to the official [Node.js](https://nodejs.org/en) website and download the installer for your operating system: Node.js.

**2: Install corepack**
Corepack comes bundled with Node.js starting from version 16.10.0. To ensure corepack is installed, run the following command:
```shell
corepack --version
```

**3: Enable pnpm support via corepack**
Activate pnpm support using corepack:
```shell
corepack enable
corepack prepare pnpm@latest --activate
```

**4. Clone the repository:**  
```shell
git clone https://github.com/Fa4stik/slider_ai.git && cd slider_ai
```

**5: Install dependencies and run the project**
```shell
pnpm install && pnpm dev
```
The project should now be accessible in your browser at http://localhost:3000 or http://127.0.0.1:3000.

## Русская версия

### Описание
Этот проект представляет собой веб-приложение, которое позволяет пользователям добавлять, перемещать и удалять круги в области слайда. Круги добавляются в случайных позициях и размерах в пределах области слайда. Приложение построено с использованием React и TypeScript, обеспечивая современную и поддерживаемую кодовую базу. Проект также включает функциональность выбора нескольких кругов и их удаления с помощью клавиши "**Backspace**". Для выделения кругов необходимо зажать клавишу "**Left Control**"

### Демо
Вы можете просмотреть демонстрацию проекта по ссылке https://slider-ai.herokuapp.com/.

### Запуск
Чтобы запустить проект локально, вам нужно установить Docker и Docker Compose, выполните следующие шаги:

**1. Установка Docker:** https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository

**2. Клонирование репозитория:**  
```shell
git clone https://github.com/Fa4stik/slider_ai.git && cd slider_ai
```

**3. Запуск проекта:**  
```shell
docker compose up
```

Эта команда создаст и запустит приложение. Вы можете получить к нему доступ в своем браузере по адресу http://localhost или http://127.0.0.1

### Сборка
Чтобы собрать проект с использованием продакшн Dockerfile, выполните следующие шаги:

**1. Клонирование репозитория:**  
```shell
git clone https://github.com/Fa4stik/slider_ai.git && cd slider_ai
```

**2. Создание Docker-образа:**  
```shell
docker build -f Dockerfile_prod -t fa4stik/slider_ai:latest .
```

**3. Запуск Docker-контейнера:**  
```shell
docker run -p 80:80 fa4stik/slider_ai:latest
```

Эта команда запустит приложение в режиме продакшн. Вы можете получить к нему доступ в своем браузере по адресу http://localhost или http://

### Запуск без Docker
Чтобы запустить проект без Docker, выполните следующие шаги:

**1. Установите Node.js:**
Перейдите на официальный сайт [Node.js](https://nodejs.org/en) и загрузите установщик для вашей операционной системы: Node.js.

**2: Установите corepack**
Corepack поставляется вместе с Node.js начиная с версии 16.10.0. Чтобы убедиться, что corepack установлен, выполните следующую команду:
```shell
corepack --version
```

**3: Включите поддержку pnpm через corepack**
Активируйте поддержку pnpm с помощью corepack:
```shell
corepack enable
corepack prepare pnpm@latest --activate
```

**4. Клонирование репозитория:**  
```shell
git clone https://github.com/Fa4stik/slider_ai.git && cd slider_ai
```

**5: Установите зависимости и запустите проект**
```shell
pnpm install && pnpm dev
```

Проект теперь должен быть доступен в вашем браузере по адресу http://localhost:3000 или http://127.0.0.1:3000.