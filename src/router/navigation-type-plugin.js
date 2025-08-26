export default function NavigationTypePlugin(router) {
    router._lastNavigationType = null;

    const originalPush = router.push;
    router.push = function push(location, onResolve, onReject) {
        router._lastNavigationType = 'push';
        return originalPush.call(this, location, onResolve, onReject);
    };

    const originalReplace = router.replace;
    router.replace = function replace(location, onResolve, onReject) {
        router._lastNavigationType = 'replace';
        return originalReplace.call(this, location, onResolve, onReject);
    };
    router.isReplace = () => {
        router._lastNavigationType === 'replace';
    };
}
