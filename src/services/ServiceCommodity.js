import Q from 'q';

const delay = 1000;
const cache = JSON.parse('{"size":3,"page":1,"more":false,"items":[{"commodity_id":"a1bdfbf7-6b58-43f0-95a9-376faba5727e","name":"Açucar","tags":["AÇU"],"enabled":true},{"commodity_id":"b24b99ea-ad49-42ce-aa84-e3c258cf7ead","name":"Laranja","tags":["LAR"],"enabled":true},{"commodity_id":"ca0f4c88-b6e1-4c46-b3a6-2a78b3c65941","name":"Milho","tags":["MIL"],"enabled":true},{"commodity_id":"d19dadb9-4fa2-4a66-95ab-e8816cb0185d","name":"Soja","tags":["SOJ"],"enabled":true}]}');

export async function get(page, size) {
    const response = cache.items.slice();

    return Q.delay(response, delay);
}

export async function create(data) {
    cache.size++;
    cache.items.push(data);

    const response = {};

    return Q.delay(response, delay);
}

export async function findById(data) {
    const item = cache.items.find(object => object.commodity_id === data.commodity_id);

    const response = JSON.parse(JSON.stringify(item));

    return Q.delay(response, delay);
}

export async function update(data) {
    const items = cache.items.findIndex(object => object.commodity_id === data.commodity_id);
    items.map(index => cache[index] = data);

    const response = items.length > 0;

    return Q.delay(response, delay);
}

export async function enable(data) {
    const items = cache.items.findIndex(object => object.commodity_id === data.commodity_id);
    items.map(index => cache[index].enable = true);

    const response = items.length > 0;

    return Q.delay(response, delay);
}

export async function disable(data) {
    const items = cache.items.findIndex(object => object.commodity_id === data.commodity_id);
    items.map(index => cache[index].enable = false);

    const response = items.length > 0;

    return Q.delay(response, delay);
}

const ServiceCommodity = {
    get,
    create,
    findById,
    update,
    enable,
    disable
}

export default ServiceCommodity;