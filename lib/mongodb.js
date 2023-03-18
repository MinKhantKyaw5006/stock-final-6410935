// const { MongoClient } = require('mongodb');

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://user1:helloworld@cluster0.vbsuvax.mongodb.net/?retryWrites=true&w=majority";


//     const client = new MongoClient(uri);

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         await  listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);


// async function listDatabases(client){
//     databasesList = await client.db("supplier").collection("supplier").findOne({name: 'John Doe'});

//     console.log("Databases:");
//     if (databasesList) {
//         console.log(databasesList)
//     }
// };





// const { MongoClient } = require('mongodb');

// async function saveSupplierList(list) {
//   const uri = 'mongodb+srv://user1:helloworld@cluster0.vbsuvax.mongodb.net/?retryWrites=true&w=majority';

//   const client = new MongoClient(uri);
//   try {
//     await client.connect();

//     const database = client.db('supplier');
//     const collection = database.collection('supplier');

//     // Insert the supplier list into the database
//     const result = await collection.insertOne(list);

//     console.log(`Inserted ${result.insertedCount} documents into the collection`);

//     // Find the inserted document to verify that it has been saved to the database
//     const savedList = await collection.findOne({ _id: result.insertedId });
//     console.log(`Supplier list saved to database: ${JSON.stringify(savedList)}`);

//   } catch (err) {
//     console.error(err);
//   } finally {
//     await client.close();
//   }
// }

// // Example usage
// const list = {
//   name: 'My Supplier List',
//   suppliers: [
//     { name: 'Supplier A', phone: '1234567890', address: '123 Main St.' },
//     { name: 'Supplier B', phone: '0987654321', address: '456 Elm St.' }
//   ]
// };

// saveSupplierList(list);





const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb+srv://user1:helloworld@cluster0.mongodb.net/<database>?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('supplier');
    const collection = database.collection('supplier');
    const list = {
      name: 'My Supplier List',
      suppliers: [
        { name: 'Supplier A', phone: '1234567890', address: '123 Main St.' },
        { name: 'Supplier B', phone: '0987654321', address: '456 Elm St.' }
      ]
    };
    const result = await collection.insertOne(list);
    console.log(`${result.insertedCount} documents were inserted with _id: ${result.insertedId}`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
