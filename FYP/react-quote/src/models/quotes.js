import snakeize from 'snakeize';
import camelize from 'camelize';
import connection from '../db';

const TABLE ='quotes';

export async function create(payload) {
    const [result]=await connection.insert(snakeize(payload)).
    into(TABLE).returning('*');  
    return camelize(result) ;
 }

 export async function getAll() {
    const result = await connection.select("*").from(TABLE)
    return camelize(result);
}

// /**
//  * getBYId
//  */
export async function getById(id) {
    const data = await connection.select('id', 'title', 'description').from(TABLE).where({ id:id })
    return camelize(data) ;
}

/**
 * update
 * @param {*} id
 * @param {*} params 
 */

export async function update(id,params) {
    return connection(TABLE).update(snakeize(params)).where(({id:id}));
  }

/**
 * delete
 * @param {*} id
 */
export async function removePost(id) {
    return connection(TABLE)
      .delete()
      .where({id: id});
  }