# simple_api_with_nodejs_express
a simple CRUD API using node js express mysql

### Getting started

clone this repo

open the folder
```bash
npm init
```

install necessary module
```bash
npm install express mysql cors --save
```

create the database
```bash
CREATE TABLE IF NOT EXISTS `users` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255),
  gender varchar(10),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

run the API
```bash
node server.js
```
