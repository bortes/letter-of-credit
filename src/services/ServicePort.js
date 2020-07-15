import Q from 'q';

const delay = 1000;
const cache = JSON.parse('{"size":6,"page":1,"more":false,"items":[{"port_id":"KR-PUS","name":"Busan","enabled":true,"operator":"Busan Port Authority","country_id":"KR"},{"port_id":"SA-JED","name":"Jeddah","enabled":true,"operator":"DP World","country_id":"SA"},{"port_id":"US-LAX","name":"Los Angeles","enabled":true,"operator":"Los Angeles Harbor Department","country_id":"US"},{"port_id":"NL-RTM","name":"Rotterdam","enabled":true,"operator":"Port of Rotterdam Authority","country_id":"NL"},{"port_id":"BR-SSZ","name":"Santos","enabled":true,"operator":"Governo Federal do Brasil","country_id":"BR"},{"port_id":"CN-SGH","name":"Shanghai","enabled":true,"operator":"Shanghai International Port Group","country_id":"CN"}]}');

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
    const item = cache.items.find(object => object.country_id === data.country_id);

    const response = JSON.parse(JSON.stringify(item));

    return Q.delay(response, delay);
}

export async function update(data) {
    const items = cache.items.findIndex(object => object.country_id === data.country_id);
    items.map(index => cache[index] = data);

    const response = items.length > 0;

    return Q.delay(response, delay);
}

export async function enable(data) {
    const items = cache.items.findIndex(object => object.country_id === data.country_id);
    items.map(index => cache[index].enable = true);

    const response = items.length > 0;

    return Q.delay(response, delay);
}

export async function disable(data) {
    const items = cache.items.findIndex(object => object.country_id === data.country_id);
    items.map(index => cache[index].enable = false);

    const response = items.length > 0;

    return Q.delay(response, delay);
}

const ServicePort = {
    get,
    create,
    findById,
    update,
    enable,
    disable
}

export default ServicePort;