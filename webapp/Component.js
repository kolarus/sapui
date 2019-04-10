sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("ToDo.Component", {
      metadata : {
      	manifest: "json"
      },
      
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         this.setModel(new JSONModel({
         			toDoInput: "Walk the dog",
					toDo: [
						"Learn sapui5"
					]
				})
			);
			
		var i18nModel = new ResourceModel({
        	bundleName: "ToDo.i18n.i18n"
        });
        this.setModel(i18nModel, "i18n");
      }
   });
});