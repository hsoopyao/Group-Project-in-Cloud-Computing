import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '5m', target: 500} // ramp up to 500 users over 5 minutes

    ],
};

export default function () {
    let res = http.get('http://bookstore-catalog-service.bookstore.svc.cluster.local:6001/product/25');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
}