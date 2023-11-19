export { getElementos, postElementos, deleteElemetos };

let Config = {
    headers : new Headers ({
        "Content-Type" : "application/json"
    }),
};

const getElementos = async() => {
    Config.method = "GET";
    let res = await (await fetch("http://localhost:3000/Elementos", Config)).json();
    return res;
};

const postElementos = async(data) => {
    Config.method = "POST";
    Config.body = JSON.stringify(data);
    let res = await (await fetch("http://localhost:3000/Elementos", Config)).json();
    console.log(res);
};

const deleteElemetos = async(id) => {
    Config.method = "DELETE";
    let res = await (await fetch(`http://localhost:3000/Elementos/${id}`, Config)).json();
    console.log(res);
};