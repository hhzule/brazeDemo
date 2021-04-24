import brazeFn from "./brazeFn"

type productInput = {
    id: String
    userId:String
    qty: String
}

type AppSyncEvent = {
    info: {
        fieldName: string
    }
    arguments: {
        objInput: productInput
    }
}


exports.handler = async (event: AppSyncEvent) => {

const notesArray = ["note1", "note2", "note3"]

    switch(event.info.fieldName){
        case "productQuery":
            return "base query ran";
        case "addProduct":
            const result = await brazeFn();
            console.log(result)
            // return "addProduct ran"
            return {
               ...event.arguments.objInput,
               messageStatus: "true",
               responseNumber: result.data[0]
            }
        default:
            return null;
    }
}