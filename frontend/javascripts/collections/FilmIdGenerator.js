require([], function() {
    var FilmIdGenerator = function() {
        var id = 0;
        return {
            getNextId : function() {
                // TODO: implement returning correct id from server
                id += 1;
                return id;
            },
            updateIdIfNeeded : function(extId) {
                if (extId > id)
                    id = extId;
            }
        };
    };
    return FilmIdGenerator;
});