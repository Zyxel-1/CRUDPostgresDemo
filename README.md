# C.R.U.D. Postgres Demo
>  A simple implementation of a Postgress back end database.



## Getting Started

### Prerequisites

Make sure you have Postgress have installed on your local system.

**Installation of Postgress on Ubuntu**

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

**Installing on Windows**

**Todo**: Make these instructions

**Installing on Mac OS**

**Todo**: Make these instructions

**Optional**

Install [pgAdmin](https://www.pgadmin.org) if you want a graphical representation of the data you are working with.

### Connecting (Unix)

**Terminal**

```bash
sudo -u postgres psql
```

**pgAdmin**

Connecting pgAdmin to your Postgress server can be found [here](http://www.postgresqltutorial.com/connect-to-postgresql-database/).

## Running the project

* Run ```npm install ```
* Create a '.env' file in the root directory and store the necessary information for node to connect to Postgress. (check out the .env.default file for a base template on what you need)
* Run ``` npm start```

## Usage

This program utilizes the [pg node package](https://www.npmjs.com/package/pg) to communicate between a node application and Postgress. 

**Things you can do:**

1. Create a table on Postgress
2. Insert data to a table
3. Read data from a table
4. Delete table
5. Exit