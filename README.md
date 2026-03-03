
## Project setup

```bash
#project set up
$ mkdir my-backend

# we go to the right folder
$ cd my-backend

# install all dependencies
$ npm init -y
```
# cors install

```bash
#install
$ npm install cors

# cors type
$ npm install --save-dev @types/cors

```

## prisma and run the project

```bash
# prisma express and prisma-client
$ npm install express prisma@6 @prisma/client@6 dotenv

# type
$ npm install -D typescript ts-node-dev @types/node @types/express

# typeScript 
$ npx tsc --init
```

## Tsconfig.json

```bash
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}

```


## Package.json

```bash
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}

```
```bash
"main": "dist/server.js",

```

## Run this server

```bash
$ npm run dev

```

## Prisma folder and file create

```bash
$ npx prisma init
```

## local url 

```bash
DATABASE_URL="mysql://root:Khairul%4037@localhost:3306/testData"
```
%40 = @

## Make sure Prisma client is regenerated:

```bash
$ npx prisma generate
```

## Run migrations if needed:

```bash
$ npx prisma migrate dev --name init
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
