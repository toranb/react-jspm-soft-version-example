//this import will pull in the AMD module (on demand)
//this promise-mixin-two requires rsvp@^3.0.6
//and because 3.0.7 is already loaded we don't fetch it
import PromiseMixin from 'promise-mixin-two';

var AnotherPromiseMixin = {
    gotime: function() {
        var hash = {};
        hash.url = "/api/incoming";
        hash.type = "GET";
        hash.dataType = "json";
        var mixin = new PromiseMixin();
        mixin.promise("/api/incoming", "GET", hash).then(function(response) {
            response.forEach(function(item) {
                console.log("promise-mixin-two result");
                console.log(item);
            });
        });
    }
};

export default AnotherPromiseMixin;
