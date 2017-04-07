var fRouter = function(routerRule) {
    var router = {};
    router.rule = routerRule;
    router.hashChange = function(e) {
        var hashNow = window.location.hash.slice(1);
        this.rule[hashNow] ? this.rule[hashNow](e.oldURL, e.newURL) : console.info('the '+ hashNow +' function do not found');
    }
    router.changeTo = function(hash, callback) {
        window.location.hash = hash;
        callback ? callback() : function(){};
    }
    window.addEventListener('hashchange', function(e) {
        router.hashChange(e);
    }, false);
    return router;
}
