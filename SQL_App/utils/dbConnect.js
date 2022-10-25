import mysql from "mysql";

async function connectDB()
{
    try {
    
        let connection = mysql.createConnection({
            host : `localhost`,
            user : `root`,
            password : `ishaan_90909090`,
            database : `todo`
        });
        
        connection.connect();
        console.log("Connection established");

    } catch (error) {
        console.log(error);
    }
}

connectDB();