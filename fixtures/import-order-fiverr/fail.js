import { stats } from '@fiverr-private/obs';
import { snakeCase } from 'lodash';

stats.gauge([ 'function', snakeCase(snakeCase.name) ].join('.'), 1);
