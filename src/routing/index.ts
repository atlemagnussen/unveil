
import routes from "./routes"
import "./containerView"
import pathBreaker from "@app/functions/pathBreaker"
import {curRoutePath, setCurRoute} from "@app/routing/router"

const findRoute = async (fullpath: string): Promise<Route> => {
    const bRoute = pathBreaker.getRoute(fullpath)
    
    let route: Route | undefined

    console.log(bRoute.path)
    route = routes.find(r => r.path === bRoute.path)
    
    const nf404 = notFound(fullpath)
    
    if (!route) {
        return nf404
    }

    if (route.init) {
        route.init(bRoute.param)
    }
    return {
        path: route.path,
        component: route.component,
        param: bRoute.param,
        action: bRoute.action
    }
}

const notFound = (path: string): Route => {
    return {
        path, 
        component: "not-found"
    }
}

curRoutePath.subscribe(async path => {
    const route = await findRoute(path)
    setCurRoute(route)
})
