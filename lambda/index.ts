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

    switch(event.info.fieldName){
        case "productQuery":
            return "base query ran";
        case "addProduct":
            const result = await brazeFn();
            return {
               ...event.arguments.objInput,
               messageStatus: "true",
               responseNumber: result.data[0]
            }
        default:
            return null;
    }
}