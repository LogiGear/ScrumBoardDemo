var storyIndex = 9;
var languageLibrary = [];
var hidLanguage = "usa";
var Language = {
    usa: function () {
        var library = {
            loginUserName: "UserName",
            loginPassword: "Password",
            loginButton: "Log in",
            loginMessageError: "The username or password is incorrect.",
            mainWelcome: "Hi",
            mainHeader: "Sprint: 1 - Project: Car Rental",
            mainLinkEdit: "Edit",
            mainLinkDelete: "Delete",
            mainInfoComponent: "Component:",
            mainInfoOriginalEstimate: "Original Estimate:",
            mainInfoTimeSpent: "Time Spent:",
            mainInfoAssignee: "Assignee:",
            mainInfoStatus: "Status:",
            mainInfoHour: "(Hours)",
            mainTitle: "Title",
            mainDescription: "Description",
            mainPriority: "Priority",
            mainComponent: "Component",
            mainEstimate: "Estimate",
            mainSpent: "Spent",
            mainAssignee: "Assignee",
            mainStatus: "Status",
            mainComponentUserInterface: "User Interface",
            mainComponentFunction: "Function",
            mainComponentDatabase: "Database",
            mainPriorityLow: "Low",
            mainPriorityMedium: "Medium",
            mainPriorityHigh: "High",
            mainInfoViewTitle: "View Story",
            mainInfoUpdateTitle: "Update Story",
            mainInfoCreateTitle: "New Story",
            mainInfoDeleteTitle: "Delete Story",
            mainDialogDeleteTitle: "Are you sure you want to delete this story?",
            mainButtonClose: "Close",
            mainButtonUpdate: "Update",
            mainButtonCreate: "Create",
            mainButtonOK: "OK",
            mainButtonCancel: "Cancel",
            mainStatusToDo: "To Do",
            mainStatusInProgress: "In Progress",
            mainStatusDone: "Done",
            mainTitleRequired: "Title is required",
            mainEstimateNumber: "Estimate is integer number",
            mainEstimateRange: "Estimate is greater than or equal 0 and less than 40",
            mainTimeSpentNumber: "Time Spent is integer number",
            mainTimeSpentRange: "Time Spent is greater than or equal 0"
        };
        return library;
    },
    spanish: function () {
        var library = {
            loginUserName: "Nombre de usuario",
            loginPassword: "Contraseña",
            loginButton: "Acceder",
            loginMessageError: "El nombre de usuario o la contraseña no es correcta.",
            mainWelcome: "¡Hola",
            mainHeader: "Sprint: 1 - Proyecto: Alquiler de coches",
            mainLinkEdit: "Editar",
            mainLinkDelete: "Borrar",
            mainInfoComponent: "Componente:",
            mainInfoOriginalEstimate: "Estimación Original:",
            mainInfoTimeSpent: "Tiempo Pasado:",
            mainInfoAssignee: "Cesionario:",
            mainInfoStatus: "Estado:",
            mainInfoHour: "(Hora)",
            mainTitle: "Título",
            mainDescription: "Descripción",
            mainPriority: "Prioridad",
            mainComponent: "Componente",
            mainEstimate: "Estimación",
            mainSpent: "Gastado",
            mainAssignee: "Cesionario",
            mainStatus: "Estado",
            mainComponentUserInterface: "Interfaz De Usuario",
            mainComponentFunction: "Función",
            mainComponentDatabase: "Base De Datos",
            mainPriorityLow: "Bajo",
            mainPriorityMedium: "Medio",
            mainPriorityHigh: "Alto",
            mainInfoViewTitle: "Ver Noticia",
            mainInfoUpdateTitle: "Actualizar Historia",
            mainInfoCreateTitle: "Nueva Historia",
            mainInfoDeleteTitle: "Borrar Historia",
            mainDialogDeleteTitle: "¿Estás seguro de que desea eliminar esta noticia?",
            mainButtonClose: "Cerrar",
            mainButtonUpdate: "Actualizar",
            mainButtonCreate: "Crear",
            mainButtonOK: "Bueno",
            mainButtonCancel: "Cancelar",
            mainStatusToDo: "Para Hacer",
            mainStatusInProgress: "En Curso",
            mainStatusDone: "Hecho",
            mainTitleRequired: "Título es necesario",
            mainEstimateNumber: "La estimación es número entero",
            mainEstimateRange: "Estimación es mayor que o igual a 0 y menor que 40",
            mainTimeSpentNumber: "Tiempo es el número entero",
            mainTimeSpentRange: "Tiempo es mayor que o igual a 0"
        };
        return library;
    }
}
var SBD = {
    loadLibraryLanguage: function () {
        languageLibrary["usa"] = Language.usa();
        languageLibrary["spanish"] = Language.spanish();
    },
    changeLogin: function (newLanguage) {
        $("#btnLogin").val(newLanguage.loginButton);
        $("#lblUserName").html(newLanguage.loginUserName);
        $("#lblPassword").html(newLanguage.loginPassword);
        if ($.trim($("#errMsg").html()).length != 0) {
            $("#errMsg").html(newLanguage.loginMessageError);
        }
    },
    changeMainPage: function (newLanguage, strLanguage) {
        var oldLanguage = languageLibrary[hidLanguage];
        $("#lblWelcome").html(newLanguage.mainWelcome);
        $("div.header").html(newLanguage.mainHeader);
        $("a.lnkEdit").text(newLanguage.mainLinkEdit);
        $("a.lnkDelete").text(newLanguage.mainLinkDelete);
        //For dialog
        $("span.lblTitle").html(newLanguage.mainTitle);
        $("span.lblEstimate").html(newLanguage.mainEstimate);
        $("span.lblDescription").html(newLanguage.mainDescription);
        $("span.lblPriority").html(newLanguage.mainPriority);
        $("span.lblComponent").html(newLanguage.mainComponent);
        $("span.lblSpent").html(newLanguage.mainSpent);
        $("span.lblAssignee").html(newLanguage.mainAssignee);
        $("span.lblStatus").html(newLanguage.mainStatus);
        $("option:contains('" + oldLanguage.mainPriorityLow + "')").text(newLanguage.mainPriorityLow);
        $("option:contains('" + oldLanguage.mainPriorityMedium + "')").text(newLanguage.mainPriorityMedium);
        $("option:contains('" + oldLanguage.mainPriorityHigh + "')").text(newLanguage.mainPriorityHigh);
        $("option:contains('" + oldLanguage.mainComponentUserInterface + "')").val(newLanguage.mainComponentUserInterface).text(newLanguage.mainComponentUserInterface);
        $("option:contains('" + oldLanguage.mainComponentFunction + "')").val(newLanguage.mainComponentFunction).text(newLanguage.mainComponentFunction);
        $("option:contains('" + oldLanguage.mainComponentDatabase + "')").val(newLanguage.mainComponentDatabase).text(newLanguage.mainComponentDatabase);
        $("#divDo").find("span.sStatus").html(newLanguage.mainStatusToDo);
        $("#divProgress").find("span.sStatus").html(newLanguage.mainStatusInProgress);
        $("#divDone").find("span.sStatus").html(newLanguage.mainStatusDone);
        //For card
        $("div.card-info").find("span.lblComponent").html(newLanguage.mainInfoComponent);
        $("div.card-info").find("span.lblOriginalEstimate").html(newLanguage.mainInfoOriginalEstimate);
        $("div.card-info").find("span.lblTimeSpent").html(newLanguage.mainInfoTimeSpent);
        $("div.card-info").find("span.lblAssignee").html(newLanguage.mainInfoAssignee);
        $("div.card-info").find("span.lblStatus").html(newLanguage.mainInfoStatus);
        $("span:contains('" + oldLanguage.mainPriorityLow + "')").html(newLanguage.mainPriorityLow);
        $("span:contains('" + oldLanguage.mainPriorityMedium + "')").html(newLanguage.mainPriorityMedium);
        $("span:contains('" + oldLanguage.mainPriorityHigh + "')").html(newLanguage.mainPriorityHigh);
        $("span:contains('" + oldLanguage.mainComponentUserInterface + "')").html(newLanguage.mainComponentUserInterface);
        $("span:contains('" + oldLanguage.mainComponentFunction + "')").html(newLanguage.mainComponentFunction);
        $("span:contains('" + oldLanguage.mainComponentDatabase + "')").html(newLanguage.mainComponentDatabase);
        $("span.lblHour").html(newLanguage.mainInfoHour);
        if (strLanguage == "usa") {
            $("#lnkLogout").attr("class", "btn-logout");
            $("#divWelcome").attr("class", "welcome");
            $("#btnCreate").attr("class", "btn-new");
            $("#imgTodo").attr("src", "images/todo.png");
            $("#imgInProgress").attr("src", "images/inprogress.png");
            $("#imgDone").attr("src", "images/done.png");
        }
        else {
            var newLogoutClass = $("#lnkLogout").attr("class") + "-" + strLanguage;
            var newWelcomeClass = $("#divWelcome").attr("class") + "-" + strLanguage;
            var newBtnCreateClass = $("#btnCreate").attr("class") + "-" + strLanguage;
            $("#lnkLogout").attr("class", newLogoutClass);
            $("#divWelcome").attr("class", newWelcomeClass);
            $("#btnCreate").attr("class", newBtnCreateClass);
            var newLinkImage = "images/" + strLanguage + "/";
            $("#imgTodo").attr("src", newLinkImage + "todo.png");
            $("#imgInProgress").attr("src", newLinkImage + "inprogress.png");
            $("#imgDone").attr("src", newLinkImage + "done.png");
        }
    },
    changeLanguage: function (view, newLanguage) {
        var language = languageLibrary[newLanguage];
        if (newLanguage != hidLanguage) {
            if (view == "login") {
                SBD.changeLogin(language);
            }
            else {
                SBD.changeMainPage(language, newLanguage);
            }
            hidLanguage = newLanguage;
        }
    },
    selectLanguage: function (view, objLanguage) {
        $("img.language").removeClass("active");
        objLanguage.addClass("active");
        SBD.changeLanguage(view, objLanguage.attr("alt"));
    },
    getParamsFromURL: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    },
    updateElement: function (isEdit) {
        var card;
        if (isEdit) {
            card = $("li.sortable-item").find("#" + $("#txtID").val()).parent().parent().parent();
        }
        else {
            card = $("#cOriginal").find("li:first").clone();
        }
        //set card status
        card.find(".card-status").attr("class", "card-status " + $("#txtPriority").val());
        var cardInfo = card.find(".card-info");
        var cardHead = cardInfo.find(".widget-head");
        var cardContent = cardInfo.find(".widget-content");
        //set icon status
        cardHead.find("div:first").attr("class", "card-status " + $("#txtPriority").val().toLowerCase());
        //set info
        cardContent.find("td.title").html($("#txtTitle").val());
        cardContent.find("span.sComponent").text($("#txtComponent").val());
        var estimate = $("#txtEstimate").val();
        if (estimate == undefined || $.trim(estimate) == "") {
            estimate = "";
        }
        cardContent.find("span.sEstimate").text(estimate);
        var spent = $("#txtSpent").val();
        if (spent == undefined || $.trim(spent) == "") {
            spent = "";
        }
        cardContent.find("span.sSpent").text(spent);
        cardContent.find("span.sAsignee").text($("#txtAsignee").val());
        cardContent.find(".hDescription").text($("#txtDescription").val());
        var objLanguageEnglish = languageLibrary["usa"];
        var selectLanguage = languageLibrary[hidLanguage];
        var selectPriority = selectLanguage.mainPriorityLow;
        switch ($("#txtPriority").val()) {
            case objLanguageEnglish.mainPriorityMedium:
                selectPriority = selectLanguage.mainPriorityMedium;
                break;
            case objLanguageEnglish.mainPriorityHigh:
                selectPriority = selectLanguage.mainPriorityHigh;
                break;
        }
        cardContent.find(".hPriority").text(selectPriority);
        cardContent.find(".hStatus").text($("#txtStatus").val());
        cardContent.find(".hTitle").text($("#txtTitle").val());

        if (!isEdit) {
			cardHead.find("div.showmenu").attr("id", "card-" + storyIndex);
            cardContent.find("span.hID").text(storyIndex);
            //set id and name of card
            cardHead.find("div.title").attr("id", storyIndex);
            cardHead.find("span.sID").attr("onclick", "SBD.showInfo(" + storyIndex + ")");
			$(document).delegate('#' + storyIndex + ' span.sID', 'click', function() {
				SBD.showInfo(storyIndex - 1);
			});
            cardHead.find("span.sID").text("Car - " + storyIndex);
            //set link action
            cardHead.find("a.lnkEdit").attr("href", "javascript:SBD.showEditStory(" + storyIndex + ")");
            cardHead.find("a.lnkDelete").attr("href", "javascript:SBD.confirmDelete(" + storyIndex + ")");
            var language = languageLibrary[hidLanguage];
            cardContent.find("span.sStatus").text(language.mainStatusToDo);
            storyIndex++;
            if ($("#divDo").find("li").length != 0) {
                card.insertBefore($("#divDo").find("li:first"));
            }
            else {
                $("#divDo").append(card);
            }
            SBD.resizeColumn();
        }
    },
    loadDefaultLanguage: function (view) {
        var params = SBD.getParamsFromURL("language");
        if (params == null) {
            params = hidLanguage;
        }
        SBD.selectLanguage(view, $("img[alt='" + params + "']"));
    },
    createStory: function () {
        if (SBD.checkData()) {
            SBD.updateElement(false);
            $("#dialog").dialog("close");
        }
    },
    updateStory: function () {
        if (SBD.checkData()) {
            SBD.updateElement(true);
            $("#dialog").dialog("close");
        }
    },
    deleteStory: function (id) {
        var obj = $("li.sortable-item").find("#" + id).parent().parent().parent();
        $(obj).remove();
        SBD.resizeColumn();
    },
    setTooltipError: function (text, element) {
        $("span[htmlfor='" + element + "']").remove();
        var error = $("<span htmlfor='" + element + "' class='error'>" + text + "</span>");
        error.tooltip({
            bodyHandler: function () {
                return error.text();
            }
        });
        error.insertAfter($(element));
        return false;
    },
    checkValid: function (control) {
        var language = languageLibrary[hidLanguage];
        $("span[htmlfor='" + control + "']").remove();
        var value = $.trim($(control).val());
        switch (control) {
            case "#txtTitle":
                if (value == "") {
                    SBD.setTooltipError(language.mainTitleRequired, control);
                }
                break;
            case "#txtEstimate":
                if (isNaN(value)) {
                    SBD.setTooltipError(language.mainEstimateNumber, control);
                }
                else if (parseInt(value) < 0 || parseInt(value) > 40) {
                    SBD.setTooltipError(language.mainEstimateRange, control);
                }
                break;
            case "#txtSpent":
                if (isNaN(value)) {
                    invalid = SBD.setTooltipError(language.mainTimeSpentNumber, control);
                }
                else if (parseInt(value) < 0) {
                    invalid = SBD.setTooltipError(language.mainTimeSpentRange, control);
                }
                break;
        }
    },
    checkData: function () {
        var invalid = true;
        var title = $.trim($("#txtTitle").val());
        var estimate = $.trim($("#txtEstimate").val());
        var spent = $.trim($("#txtSpent").val());
        var language = languageLibrary[hidLanguage];
        if (title == "") {
            invalid = SBD.setTooltipError(language.mainTitleRequired, "#txtTitle");
        }
        if (isNaN(estimate)) {
            invalid = SBD.setTooltipError(language.mainEstimateNumber, "#txtEstimate");
        }
        else if (parseInt(estimate) < 0 || parseInt(estimate) > 40) {
            invalid = SBD.setTooltipError(language.mainEstimateRange, "#txtEstimate");
        }
        if (isNaN(spent)) {
            invalid = SBD.setTooltipError(language.mainTimeSpentNumber, "#txtSpent");
        }
        else if (parseInt(spent) < 0) {
            invalid = SBD.setTooltipError(language.mainTimeSpentRange, "#txtSpent");
        }
        return invalid;
    },
    resizeColumn: function () {
        var maxHeight = 0;
        $(".sortable-list").each(function () {
            var tempHeight = 0;
            $(this).find("li").each(function () {
                tempHeight = tempHeight + $(this).outerHeight(true);
            });
            if (tempHeight > maxHeight) {
                maxHeight = tempHeight;
            }
        });
        $(".sortable-list").height(maxHeight + 10);
    },
    loadInfo: function (story) {
        $("#infoid").text(story.find("span.hID").text());
        $("#infodescription").text(story.find("span.hDescription").text());
        $("#infotitle").text(story.find("span.hTitle").text());
        $("#infopriority").text(story.find("span.hPriority").text());
        $("#infocomponent").text(story.find("span.sComponent").text());
        $("#infoestimate").text(story.find("span.sEstimate").text());
        $("#infospent").text(story.find("span.sSpent").text());
        $("#infoasignee").text(story.find("span.sAsignee").text());
        $("#infostatus").text(story.find("span.sStatus").text());
    },
    editInfo: function (story) {
        $("#txtID").val(story.find("span.hID").text());
        //$("#txtDescription").val(story.find("span.hDescription").text());        
        $("#txtTitle").val(story.find("span.hTitle").text());
        var objLanguageEnglish = languageLibrary["usa"];
        var selectLanguage = languageLibrary[hidLanguage];
        var selectPriority = selectLanguage.mainPriorityLow;
        switch ($.trim(story.find("span.hPriority").text())) {
            case selectLanguage.mainPriorityMedium:
                selectPriority = objLanguageEnglish.mainPriorityMedium;
                break;
            case selectLanguage.mainPriorityHigh:
                selectPriority = objLanguageEnglish.mainPriorityHigh;
                break;
        }
        $("#txtPriority").val(selectPriority);
        $("#txtComponent").val(story.find("span.sComponent").text());
        $("#txtEstimate").val(story.find("span.sEstimate").text());
        $("#txtSpent").val(story.find("span.sSpent").text());
        $("#txtAsignee").val(story.find("span.sAsignee").text());
        $("#txtStatus").val(story.find("span.sStatus").text());
    },
    resetInput: function () {
        $("#dialog").find("input").val("");
        //Move below line showCreateStory() to fix IE 11 which be crashed
	//$("#dialog").find("textarea").val("");
        $("#dialog").find("select").find("option:first").attr("selected", "selected");
        $("#dialog").find("span.error").remove();
    },
    confirmDelete: function (id) {
        var language = languageLibrary[hidLanguage];
        var title = language.mainInfoDeleteTitle;
        var buttonClose = language.mainButtonCancel;
        var buttonOK = language.mainButtonOK;
        $("div.dialog-delete").html(language.mainDialogDeleteTitle);
        $("#dialog-confirm").dialog({
            resizable: false,
            height: 150,
            width: 400,
            modal: true,
            title: title,
            buttons: [
            {
                text: buttonOK,
                click: function () {
                    SBD.deleteStory(id);
                    $(this).dialog("close");
                }
            },
            {
                text: buttonClose,
                click: function () {
                    $(this).dialog("close");
                }
            }
            ]
        });
    },
    showInfo: function (id) {
        var story = $("#" + id).parent().parent().parent();
        var language = languageLibrary[hidLanguage];
        var title = language.mainInfoViewTitle + " - Car - " + story.find("span.hID").text();
        var buttonClose = language.mainButtonClose;
        $("#infoDialog").dialog({
            resizable: false,
            modal: true,
            height: 360,
            width: 440,
            title: title,
            buttons: [
            {
                text: buttonClose,
                click: function () {
                    $(this).dialog("close");
                }
            }
            ]
        });
        SBD.loadInfo(story);
    },
    showEditStory: function (id) {
        SBD.resetInput();
        var story = $("#" + id).parent().parent().parent();
        var language = languageLibrary[hidLanguage];
        var title = language.mainInfoUpdateTitle + " - Car - " + story.find("span.hID").text();
        var buttonCancel = language.mainButtonCancel;
        var buttonUpdate = language.mainButtonUpdate;
        $("#dialog").dialog({
            resizable: false,
            modal: true,
            height: 440,
            width: 480,
            title: title,
            buttons: [
            {
                text: buttonUpdate,
                click: function () {
                    SBD.updateStory();
                }
            },
            {
                text: buttonCancel,
                click: function () {
                    $(this).dialog("close");
                }
            }
            ]
        });
        // Fixed crash when edit on IE11        
        var des = story.find("span.hDescription").text();        
        var txtDes = $("#txtDescription");
        txtDes.show();        
        setTimeout(function () {
            txtDes.focus();
            txtDes.val(des);
        }, 100);        
        
        SBD.editInfo(story);
    },
    showCreateStory: function () {
        SBD.resetInput();
        var language = languageLibrary[hidLanguage];
        var title = language.mainInfoCreateTitle;
        var buttonCreate = language.mainButtonCreate;
        var buttonCancel = language.mainButtonCancel;
        $("#dialog").dialog({
            resizable: false,
            modal: true,
            height: 440,
            width: 480,
            title: title,
            buttons: [
            {
                text: buttonCreate,
                click: function () {
                    SBD.createStory();
                }
            },
            {
                text: buttonCancel,
                click: function () {
                    $(this).dialog("close");
                }
            }
            ]
        });
	//Add to fix: Crash IE 11		
	$("#dialog").find("textarea").val("");
    }
}