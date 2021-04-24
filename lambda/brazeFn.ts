import axios from "axios"

const brazeFn = async () => {
 const res = await axios.get("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5")
   
       return res
   
    }
    export default brazeFn;
  