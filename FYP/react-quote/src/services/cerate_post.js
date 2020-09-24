import * as quote from '../models/quotes';
import logger from '../utils/logger';

/**
 * create quotes
 */

export async function createPOST(payload) {
    logger.info("Creating Post")
    const data=await quote.create(payload);
    return {
        data,
        message:'Creating Post'
    }
}

export async function getPOST() {
logger.info("Displaying POST")
const data=await quotes.getAll()
return {
    data,
    message: 'POST',   
    }; 

}

export  async function getPOST(id) {
    const [data] =await quotes.getById(id);
  
    return {
      data,
      message: `QUOTES ${id}`,
     
    };
  }

/**
 * update POST
 */
export async function updatePOST(id,params) {
    const data=await quotes.update(id, params);
    console.log(data)

    return {
        data,
        message: `updated post ${id}`,
       
      };
}

export async function removePOST(idd) {
  await quotes.removePOST(id);

  return {
    message: "Deleted POST " + id
  };
 }