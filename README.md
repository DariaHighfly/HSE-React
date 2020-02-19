### Домашнее задание по React Обрезковой Дарья  - группа БПМИ164

### **ДЗ 2** - no deadline
Настоить рабочее окружение и попробовать создать Hello world проект.
Для пользователей Windows - https://www.liquidweb.com/kb/install-react-js-windows/

Для пользователей Linux
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
```
После этого у вас будет установлен NodeJS, npm и npx. Для создания проекта:
```
npx create-react-app name-of-your-app
```
После этого появится директория `name-of-your-app`, в которой содержится настроенный Hello world проект. Для запуска:
```
cd name-of-your-app
npm run start
```

Далее нужно запушить новосозданный проект в репозиторий (GitHub, GitLab, Bitbucket, whatever). Для тех, кто [не знаком с git](AboutGit.md).


Желательно сделать это до следующего занятия (12.02), так как на этом семинаре будут практические задания. По всем вопросам пишите в чат или мне в telegram.

---

### **ДЗ 3** - deadline 23:59 18.02. Начало разработки Task treaker'a.

Для сдачи задания нужно создать pull request/merge request на github/gitlab/bitbucket (там, где лежит проект, созданный в дз2). [Пошаговая инструкция для GitHub.](AboutPullRequests.md)

Создать react приложение и реализовать следующую функциональность:

1. Отображение списка задач, каждая из которых имеет имя, описание, приоритет. Предполагайте, что список задач - это массив объектов такого формата:
    ```
    {
      id: 123,
      name: 'Task name',
      description: 'Task description',
      priority: 321
    }
    ```
2. Возможность добавить задачу, введя имя, описание и приоритет.
3. Кнопка для сортировки задач по имени.
4. Кнопка для сортировки задач по приоритету.

У массивов в js есть метод sort, см [документацию](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
