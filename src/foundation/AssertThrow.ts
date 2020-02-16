export function assertThrow(value: boolean, lazyMessage: () => string = () => "Assert error") {
    if (!value) {

        // tslint:disable-next-line: no-console
        console.error(lazyMessage());
        throw TypeError(lazyMessage());
    }
}
