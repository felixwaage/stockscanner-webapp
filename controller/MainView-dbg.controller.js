sap.ui.define(
  ["com/myorg/stockscanner/controller/BaseController"],
  function (Controller) {
    "use strict";

    return Controller.extend("com.myorg.stockscanner.controller.MainView", {
      onInit: function () {
        console.log("test");
        var oModel = new sap.ui.model.json.JSONModel();
        oModel
          .loadData("http://localhost:8081/0.0.0.0:4004/recommendations")
          .then(() => {
            this.getView().setModel(oModel, "recommendations");
          })
          .catch((err) => console.log(err));
      },
    });
  }
);
