import { promise } from '.';

export function fails(boolean) {
    promise(boolean).then(console.log);
}
