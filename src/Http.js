'use strict';

import {  } from './Methods'

export class Http {
    headers() {}

    mergeHeaders(headers) {}

    append() {}

    get(url, headers = {}) {
        this.mergeHeaders(headers);
        return new Get();
    }

    // post() {
    //     return new Post();
    // }

    // put() {
    //     return new Get();
    // }

    // patch() {
    //     return new Get();
    // }

    // delete() {
    //     return new Get();
    // }

    // options() {
    //     throw new error('Options is not implemented yet');
    // }

    // connect() {
    //     throw new error('Connect is not implemented yet');
    // }
}
