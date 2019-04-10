sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("ToDo.controller.App", {
		onPress : function () {
			MessageToast.show("Hello App!");
			this.byId("app").to(this.byId("intro"));
		},

		onSave : function () {
			var newToDo = this.getView().getModel().getProperty("/toDoInput");
	
			if(newToDo.length > 5) {
				var newToDoList = this.getView().getModel().getProperty("/toDo").slice(0);
				newToDoList.push(newToDo);
				
				this.getView().getModel().setProperty("/toDoInput", "");
				this.getView().getModel().setProperty("/toDo", newToDoList);
			}
		}
	
	});

});