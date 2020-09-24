import snakeize from "snakeize";
import camelize from "camelize";
import connection from "../db";


const table = "create_login";



export async function create(params) {
  const [data] = await connection
    .insert(snakeize(params))
    .into(table)
    .returning("*");

  return camelize(data);
}

export async function getUserCredentials(data) {
  console.log("credentials", data);
  const [result] = await connection.select("*").from(table);
  return result ? camelize(result) : null;
}