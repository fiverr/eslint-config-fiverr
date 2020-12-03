export const promise = (boolean) => new Promise(
    (resolve, reject) => boolean
        ? resolve('Okay')
        : reject(new Error('Something must have gone horribly wrong'))
);
