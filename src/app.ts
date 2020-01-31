import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {InventoryController} from "./controllers/inventory.controller";

 
// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [InventoryController] // we specify controllers we want to use
});
 
// run express application on port 3000
//app.listen(3000);

app.listen(3000, () => {
    
    return console.log(`server is listening on ${3000}`);
  });