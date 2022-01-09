import { TemplateResult } from "lit";
import { AsyncDirective, directive } from "lit/async-directive.js"

class ResolvePromise extends AsyncDirective {
    render<T>(promise: Promise<T>, callback: (value: any) => TemplateResult<1> | TemplateResult<1>[]) {
        Promise.resolve(promise).then((resolvedValue) => {
            //this.setValue(resolvedValue);
            callback(resolvedValue)
        })
        return `Waiting for promise to resolve`
    }
}

export const resolvePromise = directive(ResolvePromise)