
export function isCancel(error) {
    return error instanceof Cancel;
}

export class CancelToken{
    public resolve: any;
    source() {
        return {
            token: new Promise(function (resolve) {
                this.resolve = resolve;
            }),
            cancel: (message: string) {
                this.resolve(new CancelToken(message));
            }
        }
    }
}