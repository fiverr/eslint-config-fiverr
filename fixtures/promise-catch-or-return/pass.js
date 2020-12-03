import { promise } from '.';

export function passes(boolean) {
    return promise(boolean).then(console.log);
}
