var Input = Input || {

    down: {},
    pressed: {},

    reset: function() {
        this.pressed = {};
        this.down = {};
    },

    update: function() {
        this.pressed = {};
    },

    keydown: function(e) {
        var kc = e.keyCode;

        if (!this.down[kc]) {
            this.down[kc] = true;
            this.pressed[kc] = true;
        }

        //e.stopPropagation();
        //e.preventDefault();
    },

    keyup: function(e) {
        var kc = e.keyCode;
        if (this.down[kc]) {
            this.down[kc] = false;
        }
    },

    isPressed: function(k) {
        if (isNaN(k)) {
            var keys = this.bind[k];
            if(!keys) return;
            for (var i = keys.length; i--;) {
                if (this.pressed[keys[i]]) return true;
            }
            return false;
        }
        return this.pressed[k];
    },

    isDown: function(k) {
        if (isNaN(k)) {
            var keys = this.bind[k];
            if(!keys) return;
            for (var i = keys.length; i--;) {
                if (this.down[keys[i]]) return true;
            }
            return false;
        }
        return this.down[k];
    },

    bind: function(name, keys) {
        this.bind[name] = keys;
    }

};

module.exports = Input;
