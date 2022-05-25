import { snakeCase } from 'lodash';
import { stats } from '@fiverr-private/obs';

stats.gauge([ 'function', snakeCase(snakeCase.name) ].join('.'), 1);
