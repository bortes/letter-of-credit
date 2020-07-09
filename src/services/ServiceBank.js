import Q from 'q';

const delay = 1000;
const cache = JSON.parse('{"size":6,"page":1,"more":false,"items":[{"company_id":"189ae860-d3de-4f38-bda3-c3b79709feaa","name":"Amaggi Group","tags":["AMAGGI"],"enabled":true,"buyer":true,"seller":true,"address":{"street":"Avenida André Antonio Maggi","number":303,"borough":"Alvorada","city":"Cuiabá","country_id":"BR","post_code":"78088-520"}},{"company_id":"2ae655c9-4863-4a24-a909-75c9c1540170","name":"Archer Daniels Midland","tags":["ADM BR"],"enabled":true,"buyer":true,"seller":true,"address":{"street":"Avenida Roque Petroni Jr","number":999,"complement":"9º andar","borough":"Jardim das Acácias","city":"São Paulo","country_id":"BR","post_code":"04707-000"}},{"company_id":"3dc571c3-dbec-450b-8296-4b82f723fbbd","name":"Bunge Limited","tags":["BUNGE BR"],"enabled":true,"buyer":true,"seller":true,"address":{"street":"Rua Diogo Moreira","number":184,"complement":"8º andar","borough":"Pinheiros","city":"São Paulo","country_id":"BR","post_code":"05423-010"}},{"company_id":"4a4d03a4-a8ef-4c6d-b440-13163a90eff7","name":"Cargill","tags":["CARGILL BR"],"enabled":true,"buyer":true,"seller":true,"address":{"street":"Rua Henri Dunant","number":1383,"borough":"Vila São Francisco","city":"São Paulo","country_id":"BR","post_code":"04710-230"}},{"company_id":"5a8f7344-f01d-42b2-9672-e3445152c530","name":"Eldorado Brasil Celulose","tags":["ELDORADO"],"enabled":true,"buyer":true,"seller":true,"address":{"street":"Avenida Marginal Direita do Tietê","number":500,"borough":"Vila Jaguara","city":"São Paulo","country_id":"BR","post_code":"05118-100"}},{"company_id":"6f1d58e1-b5ea-4d0c-a4bd-5b6d8f310bbc","name":"Louis Dreyfus Company","tags":["LDC BR"],"enabled":true,"buyer":true,"seller":true,"address":{"street":"Avenida Brigadeiro Faria Lima","number":1355,"borough":"Jardim Paulistano","city":"São Paulo","country_id":"BR","post_code":"01452-002"}}]}');

export async function get(page, size) {
    const response = cache;

    return Q.delay(response, delay);
}

export async function create(data) {
    cache.size++;
    cache.items.push(data);

    const response = cache;

    return Q.delay(response, delay);
}

export async function findById(data) {
    const response = cache.find(object => object.id === data.id);

    return Q.delay(response, delay);
}

export async function update(data) {
    const items = cache.findIndex(object => object.id === data.id);
    items.map(index => cache[index] = data);

    const response = items.length > 0;

    return Q.delay(response, delay);
}

export async function enable(data) {
    const items = cache.findIndex(object => object.id === data.id);
    items.map(index => cache[index].enable = true);

    const response = items.length > 0;

    return Q.delay(response, delay);
}

export async function disable(data) {
    const items = cache.findIndex(object => object.id === data.id);
    items.map(index => cache[index].enable = false);

    const response = items.length > 0;

    return Q.delay(response, delay);
}

const ServiceBank = {
    get,
    create,
    findById,
    update,
    enable,
    disable
}

export default ServiceBank;