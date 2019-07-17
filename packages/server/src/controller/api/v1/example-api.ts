import { route } from "plumier";

export class ExamplesController {
    @route.get("")
    list() {
        return { hello: "world!" }
    }
}