const S2 = require('s2-geometry').S2;

// basically s263 is the s2 id bit shift right once, so it fits a 64 signed integer
// just note that this pushed the max level to 29

function id_to_s263(s2) {
    return BigInt(s2) >> 1n;
}

function s263_to_id(s263) {
    return (BigInt(s263) << 1n).toString();
}

module.exports = {
    latLngToKey: function latLngToKey(lat, lng, level = 29) {
        if(level > 29)
            throw 'Incorrect S263 level';
        return S2.latLngToKey(lat, lng, level);
    },

    latLngToId: function latLngToId(lat, lng, level = 29) {
        if(level > 29)
            throw 'Incorrect S263 level';
        return id_to_s263(S2.latLngToId(lat, lng, level));
    },

    latLngToNeighborKeys: function latLngToNeighborKeys(lat, lng, level = 29) {
        if(level > 29)
            throw 'Incorrect S263 level';
        return S2.latLngToNeighborKeys(lat, lng, level);
    },

    keyToId: function keyToId(key) {
        return id_to_s263(S2.keyToId(key));
    },

    keyToLatLng(key) {
        return S2.keyToLatLng(key);
    },

    idToKey(s263) {
        return S2.idToKey(s263_to_id(s263));
    },

    idToLatLng(id) {
        return S2.idToLatLng(s263_to_id(s263));
    },
};
