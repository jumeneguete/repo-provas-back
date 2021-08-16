<h1 align="center">📝 RepoProvas</h1>

RepoProvas came to help students to find old exams from Chemistry course in one place and no longer have hunt it in the university or even spend lots of money with photocopies!! <br/>
In this application students can upload an exam saved online as pdf and search old exams by subjects ou by teachers!

<p align="center"><img width="600px" src="/assets/repoprovas.gif" /></p>

You can find this front-end application at https://github.com/jumeneguete/repo-provas-front <br>
Also, try it out now at https://repoprovas-nu.vercel.app/


### 🔹🔹About

This is the API that works with an application where people can send an old exam and search for old exams by teacher or by subject. Below are the implemented features:

- Insert a new exam ***(/exam)***;
- Get all subjects with exams listed ***(/subjects)***;
- Get all exams from an specific subject ***(/:id/subject)***;
- Get all teachers with exams listed ***(/teacher)***;
- Get all exams from an specific teacher ***(/:id/teacher)***;
- Get all exams with teacher and subject info ***(/:subId/subject-teacher)***


### 🔹🔹Technologies
- NodeJS
- Express
- Typescript
- TypeORM
- PostgreSQL
- Jest
- Supertest
- <a href="https://www.npmjs.com/package/dayjs" target="_blank">Dayjs</a>
- <a href="https://www.npmjs.com/package/joi" target="_blank">Joi</a>
- Front-end using ReactJS at https://github.com/jumeneguete/repo-provas-front


### 🔹🔹How to run

1. Clone this repository
2. Ypu can clone the front-end repository an follow its instruction for installation at https://github.com/jumeneguete/mywallet-front-end
3. Install dependencies
```bash
npm i
```
4. Ceate an .env file based on env.example
5. The database required to run the application can be found at assets/dump.sql;
6. Run server
```bash
npm run dev
```
7. Congrats! App is runnig and you can test it using some API Client or together with the <a href="https://github.com/jumeneguete/mywallet-front-end" target="_blank">front-end application</a>.

➔  You can also run integration tests following the additional steps:

1. Ceate an .env.tests file based on env.example setting a cloned database;
2. Run server
```bash
npm run test
```
7. That's it! :D
