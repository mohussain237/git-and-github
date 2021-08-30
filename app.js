console.log("heellloooww");


let products = async ()=> {
    const response= await axios.get("http//:api/google.com/jokes")
    const data =  await response.json ;
    return data;
}

console.log(products);

function data () {
  conole.log('data')
}