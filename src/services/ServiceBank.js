import Q from 'q';

const delay = 1000;
const cache = JSON.parse('{"size":5,"page":1,"more":false,"items":[{"bank_id":"a5ffd034-5878-45d5-91b0-d8aa0fcf5248","name":"Banco Bradesco S.A.","tags":["BRA"],"enabled":true,"swift_code":"BBDEBRSP","iban_code":"BR2560746948000010000000001C1","address":{"street":"Avenida Ipiranga","number":287,"complement":"9º andar","borough":"Centro","city":"São Paulo","country_id":"BR","post_code":"01046-920"}},{"bank_id":"be838d54-7c94-4189-a69b-fc59ba79907c","name":"Banco do Brasil S.A.","tags":["BB"],"enabled":true,"swift_code":"BRASBRRJ","iban_code":"BR4100000000000020000000002C1","address":{"street":"SAUN Quadra 5, Lote B","complement":"10º andar - torre norte","borough":"Asa Norte","city":"Brasília","country_id":"BR","post_code":"70.040-250"}},{"bank_id":"c181f0dc-148f-469e-9331-1bb149897b41","name":"Banco Santander S.A.","tags":["SANTANDER"],"enabled":true,"swift_code":"BSCHBRSP","iban_code":"BR0890400888000030000000003C1","address":{"street":"Avenida Presidente Juscelino Kubitschek","number":2041,"complement":"bloco A","borough":"Vila Nova Conceição","city":"São Paulo","country_id":"BR","post_code":"04543-011"}},{"bank_id":"db0d4d74-4e39-49b4-8e97-d8eea11cc2bd","name":"Caixa Econômica Federal","tags":["CEF"],"enabled":true,"swift_code":"CEFXBRSP","iban_code":"BR0300360305000040000000004C1","address":{"street":"Avenida Paulista","number":2300,"complement":"13º andar","borough":"Bela Vista","city":"São Paulo","country_id":"BR","post_code":"01310-300"}},{"bank_id":"e0fd1bc5-7c99-4ac4-9875-44e733ba9520","name":"Itaú Unibanco S.A.","tags":["ITAU"],"enabled":true,"swift_code":"ITAUBRSP","iban_code":"BR0560701190000050000000005C1","address":{"street":"Rua Ururaí","number":111,"complement":"2º andar - prédio B","borough":"Tatuapé","city":"São Paulo","country_id":"BR","post_code":"03084-010"}}]}');

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