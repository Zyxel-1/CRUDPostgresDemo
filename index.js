const { Pool, Client } = require('pg');
const readlineSync = require('readline-sync');
require('dotenv').config();

// console.log(`Printing out values for env: ${process.env.DB_USER} ${process.env.DB_HOST} ${process.env.DB_URL} ${process.env.DB_PASSWORD} ${process.env.DB_PORT}`);
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_URL,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// Doesn't support concurrent transactions, double check though...
// https://stackoverflow.com/questions/48751505/how-can-i-choose-between-client-or-pool-for-node-postgres
/*
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_URL,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});
*/
async function createPlayground() {
  console.log('***********Creating Table');
  const query =
    "CREATE TABLE playground (equip_id serial PRIMARY KEY,type varchar (50) NOT NULL, color varchar (25) NOT NULL,location varchar(25) check (location in ('north', 'south', 'west', 'east', 'northeast', 'southeast', 'southwest', 'northwest')),install_date date);";
  try {
    const result = await pool.query(query);
    console.log(result);
  } catch (err) {
    console.log(`\n(!) An error has occurred: ${err}\n`);
  }
}
async function insertData() {
  console.log('***********Inserting Table');
  const query =
    "INSERT INTO playground (type, color, location, install_date) VALUES ('slide', 'blue', 'south', '2017-04-28');";
  try {
    const result = await pool.query(query);
    console.log(result);
  } catch (err) {
    console.log(`\n(!) An error has occurred: ${err}\n`);
  }
}

async function readData() {
  console.log('***********Reading Table');
  const query = 'SELECT * from playground;';
  try {
    const result = await pool.query(query);

    console.log(result);
  } catch (err) {
    console.log(`\n(!) An error has occurred: ${err}\n`);
  }
}
async function deleteTable() {
  console.log('***********Deleting Table');
  const query = 'DROP TABLE playground;';
  try {
    const result = await pool.query(query);
    console.log(result);
  } catch (err) {
    console.log(`\n(!) An error has occurred: ${err}\n`);
  }
}
async function app() {
  let continueLoop = true;
  while (continueLoop) {
    console.log('Simple Postgress node app ');
    console.log('\t1) Create Table');
    console.log('\t2) Insert Data');
    console.log('\t3) Read Data');
    console.log('\t4) Delete Table');
    console.log('\t5) Exit');
    const option = readlineSync.question('Select an option: ');
    // console.clear();
    switch (option) {
      case '1':
        await createPlayground();
        break;
      case '2':
        await insertData();
        break;
      case '3':
        await readData();
        break;
      case '4':
        await deleteTable();
        break;
      case '5':
        console.log('Exiting, good bye!');
        continueLoop = false;
        break;
      default:
        console.log('Not an option.');
    }
  }
}
// client.connect();
app();
// createPlayground();
// client.end();
