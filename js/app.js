const uielements = (function() {
  const AllAnimateElements = [
    {
      selector: "#js-fade-left-animate",
      effect: "animated fadeInLeft",
      offset: "75%"
    },
    {
      selector: "#js-fade-right-animate",
      effect: "animated fadeInRight",
      offset: "75%"
    },
    {
      selector: "#js-fade-up-animate",
      effect: "animated fadeInUp",
      offset: "75%"
    },
    ,
    {
      selector: "#js-fade-in-animate",
      effect: "animated fadeIn",
      offset: "65%"
    },
    {
      selector: "#js-fade-up2-animate",
      effect: "animated fadeInUp",
      offset: "65%"
    }
  ];

  return {
    allUi: function() {
      return AllAnimateElements;
    }
  };
})();

// ========================================================

const uicontroller = (function() {
  function executeAnimation(item) {
    $(item.selector).waypoint({
      handler: function(direction) {
        if (direction === "down") {
          $(this.element).addClass(item.effect);
        }
      },
      offset: item.offset
    });
  }
  return {
    setAnimate: function(item) {
      executeAnimation(item);
    }
  };
})();

// ========================================================

const appcontroller = (function(uiElement, uiController) {
  const allUi = uiElement.allUi();

  function setInitially() {
    allUi.forEach((item, index) => {
      uicontroller.setAnimate(item);
    });
  }

  return {
    init: function() {
      document.addEventListener("DOMContentLoaded", setInitially);
    }
  };
})(uielements, uicontroller);

// ========================================================

appcontroller.init();
