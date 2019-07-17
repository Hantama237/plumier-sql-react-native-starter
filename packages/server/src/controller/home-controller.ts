import { route } from "plumier"

export class HomeController {
    @route.get("/")
    index() {
        return { hello: "world" }
    }
}