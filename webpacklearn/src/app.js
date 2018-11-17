import pageA from './pageA';
import pageB from './pageB';

import $ from 'jquery';

console.log('hello app');

$.get('/comments/hotflow', {
    id:4307070829931989,
    mid:4307070829931989,
    max_id_type:0
}, function(data) {
    console.log("data:", data);
})


$.post('/NBaasSrv/GetMchInfo', {}, function(data) {
    console.log("data:", data);
})


