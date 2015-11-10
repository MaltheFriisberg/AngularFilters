/**
 * Created by Mal on 27-10-2015.
 */
angular.module("exampleApp")
.filter ("skip", function() {
    //worker data
    return function(data, count) {
        if(count > data.length || count < 1) {
            return data;
        }
        else {
            //slice
            return data.slice(count);
        }
    }

    });