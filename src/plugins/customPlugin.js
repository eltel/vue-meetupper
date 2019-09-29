const custopmPlugin = {
  install: function(Vue, options) {
    // Add global method or property
    Vue.myGlobalMethod = function() {
      alert("I am a global method muthafukka!!");
    };

    Vue.myCustomProperty = "I am a Custom Fuckin Property bitches";

    // Add global asset
    Vue.directive("blue-color", {
      bind(el, binding) {
        el.style.color = "blue";
      }
    });

    // Inject component options, mixins
    Vue.mixin({
      data() {
        return {
          custom_message: "WaaaAAAAaaaAAAaaAAAaaAaaAAAAAh!"
        };
      },
      created() {
        console.log("custom mixin created");
      },
      methods: {
        scream() {
          alert(this.custom_message);
        }
      }
    });

    // Add an instance method or property
    Vue.prototype.$customMethod = function() {
      alert("I am the custom instance method");
    };
  }
};

export default custopmPlugin;
