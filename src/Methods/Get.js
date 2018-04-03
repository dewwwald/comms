'use strict';

import { Request } from '../Request';

export class Get extends Request {
    get method() { return 'GET'; }
}
