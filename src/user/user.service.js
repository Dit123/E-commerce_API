import { executeQuery } from "../config.js/database.js";


export const findUser = async (email) => {
    try {
        const query = `SELECT * FROM users WHERE email = ? `;
        
    } catch (error) {
        
    }
}