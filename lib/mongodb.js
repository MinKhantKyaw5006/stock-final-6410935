const { MongoClient } = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://user1:helloworld@cluster0.vbsuvax.mongodb.net/?retryWrites=true&w=majority";


    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


async function listDatabases(client){
    databasesList = await client.db("supplier").collection("supplier").findOne({name: 'John Doe'});

    console.log("Databases:");
    if (databasesList) {
        console.log(databasesList)
    }
};