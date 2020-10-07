function onOpen() {
}
function openDialog() {
}
function openDialogBootstrap() {
}
function openAboutSidebar() {
}
function getSheetsData() {
}
function addSheet() {
}
function deleteSheet() {
}
function setActiveSheet() {
}
function doGet() {
}
function getSheet() {
}
function getUsers() {
}
function addUser() {
}
function setUser() {
}
function deleteUser() {
}
function getDocuments() {
}
function uploadFiles() {
}
function getSuggession() {
}
function getTab() {
}
function addData() {
}
function addAlert() {
}
function datafiltere() {
}
function getSuggessionFilter() {
}
function getTabFilter() {
}
function getStatu() {
}
function getSpecific() {
}
function getDelete() {
}
function removeData() {
}
function addDelete() {
}
function deleteDefinifFile() {
}
function restoreData() {
}
function addRemoveData() {
}
function getRecentData() {
}
function getName() {
}
function getMessage() {
}
function getAlert() {
}
function sendAlert() {
}
function getNotification() {
}
function getDocumentNumber() {
}
function search() {
}
function gettarge() {
}
function getSugessiontName() {
}
function searchfilter() {
}
function getSuggestion() {
}
function addNewSuggestion() {
}
function addSuggestion() {
}
function uploadFileTest() {
}
function getHistoriqueSearch() {
}
function addHistorique() {
}
function addMailSimple() {
}!function(e, a) {
    for (var i in a) e[i] = a[i];
}(this, function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), function(global) {
        var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2), _sheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
        global.onOpen = _ui__WEBPACK_IMPORTED_MODULE_0__["onOpen"], global.openDialog = _ui__WEBPACK_IMPORTED_MODULE_0__["openDialog"], 
        global.openDialogBootstrap = _ui__WEBPACK_IMPORTED_MODULE_0__["openDialogBootstrap"], 
        global.openAboutSidebar = _ui__WEBPACK_IMPORTED_MODULE_0__["openAboutSidebar"], 
        global.getSheetsData = _sheets__WEBPACK_IMPORTED_MODULE_1__["getSheetsData"], global.addSheet = _sheets__WEBPACK_IMPORTED_MODULE_1__["addSheet"], 
        global.deleteSheet = _sheets__WEBPACK_IMPORTED_MODULE_1__["deleteSheet"], global.setActiveSheet = _sheets__WEBPACK_IMPORTED_MODULE_1__["setActiveSheet"], 
        global.doGet = _ui__WEBPACK_IMPORTED_MODULE_0__["doGet"], global.getSheet = _sheets__WEBPACK_IMPORTED_MODULE_1__["getSheet"], 
        global.getUsers = _sheets__WEBPACK_IMPORTED_MODULE_1__["getUsers"], global.addUser = _sheets__WEBPACK_IMPORTED_MODULE_1__["addUser"], 
        global.setUser = _sheets__WEBPACK_IMPORTED_MODULE_1__["setUser"], global.deleteUser = _sheets__WEBPACK_IMPORTED_MODULE_1__["deleteUser"], 
        global.getDocuments = _sheets__WEBPACK_IMPORTED_MODULE_1__["getDocuments"], global.uploadFiles = _sheets__WEBPACK_IMPORTED_MODULE_1__["uploadFiles"], 
        global.getSuggession = _sheets__WEBPACK_IMPORTED_MODULE_1__["getSuggession"], global.getTab = _sheets__WEBPACK_IMPORTED_MODULE_1__["getTab"], 
        global.addData = _sheets__WEBPACK_IMPORTED_MODULE_1__["addData"], global.addAlert = _sheets__WEBPACK_IMPORTED_MODULE_1__["addAlert"], 
        global.datafiltere = _sheets__WEBPACK_IMPORTED_MODULE_1__["datafiltere"], global.getSuggessionFilter = _sheets__WEBPACK_IMPORTED_MODULE_1__["getSuggessionFilter"], 
        global.getTabFilter = _sheets__WEBPACK_IMPORTED_MODULE_1__["getTabFilter"], global.getStatu = _sheets__WEBPACK_IMPORTED_MODULE_1__["getStatu"], 
        global.getSpecific = _sheets__WEBPACK_IMPORTED_MODULE_1__["getSpecific"], global.getDelete = _sheets__WEBPACK_IMPORTED_MODULE_1__["getDelete"], 
        global.removeData = _sheets__WEBPACK_IMPORTED_MODULE_1__["removeData"], global.addDelete = _sheets__WEBPACK_IMPORTED_MODULE_1__["addDelete"], 
        global.deleteDefinifFile = _sheets__WEBPACK_IMPORTED_MODULE_1__["deleteDefinifFile"], 
        global.restoreData = _sheets__WEBPACK_IMPORTED_MODULE_1__["restoreData"], global.addRemoveData = _sheets__WEBPACK_IMPORTED_MODULE_1__["addRemoveData"], 
        global.getRecentData = _sheets__WEBPACK_IMPORTED_MODULE_1__["getRecentData"], global.getName = _sheets__WEBPACK_IMPORTED_MODULE_1__["getName"], 
        global.getMessage = _sheets__WEBPACK_IMPORTED_MODULE_1__["getMessage"], global.getAlert = _sheets__WEBPACK_IMPORTED_MODULE_1__["getAlert"], 
        global.sendAlert = _sheets__WEBPACK_IMPORTED_MODULE_1__["sendAlert"], global.getNotification = _sheets__WEBPACK_IMPORTED_MODULE_1__["getNotification"], 
        global.getDocumentNumber = _sheets__WEBPACK_IMPORTED_MODULE_1__["getDocumentNumber"], 
        global.search = _sheets__WEBPACK_IMPORTED_MODULE_1__["search"], global.gettarge = _sheets__WEBPACK_IMPORTED_MODULE_1__["gettarge"], 
        global.getSugessiontName = _sheets__WEBPACK_IMPORTED_MODULE_1__["getSugessiontName"], 
        global.searchfilter = _sheets__WEBPACK_IMPORTED_MODULE_1__["searchfilter"], global.getSuggestion = _sheets__WEBPACK_IMPORTED_MODULE_1__["getSuggestion"], 
        global.addNewSuggestion = _sheets__WEBPACK_IMPORTED_MODULE_1__["addNewSuggestion"], 
        global.addSuggestion = _sheets__WEBPACK_IMPORTED_MODULE_1__["addSuggestion"], global.uploadFileTest = _sheets__WEBPACK_IMPORTED_MODULE_1__["uploadFileTest"], 
        global.getHistoriqueSearch = _sheets__WEBPACK_IMPORTED_MODULE_1__["getHistoriqueSearch"], 
        global.addHistorique = _sheets__WEBPACK_IMPORTED_MODULE_1__["addHistorique"], global.addMailSimple = _sheets__WEBPACK_IMPORTED_MODULE_1__["addMailSimple"];
    }.call(this, __webpack_require__(1));
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || new Function("return this")();
    } catch (e) {
        "object" == typeof window && (g = window);
    }
    module.exports = g;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "onOpen", (function() {
        return onOpen;
    })), __webpack_require__.d(__webpack_exports__, "openDialog", (function() {
        return openDialog;
    })), __webpack_require__.d(__webpack_exports__, "openDialogBootstrap", (function() {
        return openDialogBootstrap;
    })), __webpack_require__.d(__webpack_exports__, "openAboutSidebar", (function() {
        return openAboutSidebar;
    })), __webpack_require__.d(__webpack_exports__, "doGet", (function() {
        return doGet;
    }));
    var onOpen = function() {
        SpreadsheetApp.getUi().createMenu("My Sample React Project").addItem("Sheet Editor", "openDialog").addItem("Sheet Editor (Bootstrap)", "openDialogBootstrap").addItem("About me", "openAboutSidebar").addToUi();
    }, openDialog = function() {
        var html = HtmlService.createHtmlOutputFromFile("dialog-demo").setWidth(600).setHeight(600);
        SpreadsheetApp.getUi().showModalDialog(html, "Sheet Editor");
    }, openDialogBootstrap = function() {
        var html = HtmlService.createHtmlOutputFromFile("dialog-demo-bootstrap").setWidth(600).setHeight(600);
        SpreadsheetApp.getUi().showModalDialog(html, "Sheet Editor (Bootstrap)");
    }, openAboutSidebar = function() {
        var html = HtmlService.createHtmlOutputFromFile("sidebar-about-page");
        SpreadsheetApp.getUi().showSidebar(html);
    }, doGet = function() {
        return HtmlService.createHtmlOutputFromFile("documents").setWidth(600).setHeight(600);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, "getSheetsData", (function() {
        return getSheetsData;
    })), __webpack_require__.d(__webpack_exports__, "addSheet", (function() {
        return addSheet;
    })), __webpack_require__.d(__webpack_exports__, "deleteSheet", (function() {
        return deleteSheet;
    })), __webpack_require__.d(__webpack_exports__, "setActiveSheet", (function() {
        return setActiveSheet;
    })), __webpack_require__.d(__webpack_exports__, "getSheet", (function() {
        return getSheet;
    })), __webpack_require__.d(__webpack_exports__, "getUsers", (function() {
        return getUsers;
    })), __webpack_require__.d(__webpack_exports__, "addUser", (function() {
        return addUser;
    })), __webpack_require__.d(__webpack_exports__, "setUser", (function() {
        return setUser;
    })), __webpack_require__.d(__webpack_exports__, "deleteUser", (function() {
        return deleteUser;
    })), __webpack_require__.d(__webpack_exports__, "getDocuments", (function() {
        return getDocuments;
    })), __webpack_require__.d(__webpack_exports__, "uploadFiles", (function() {
        return uploadFiles;
    })), __webpack_require__.d(__webpack_exports__, "uploadFileTest", (function() {
        return uploadFileTest;
    })), __webpack_require__.d(__webpack_exports__, "getSuggession", (function() {
        return getSuggession;
    })), __webpack_require__.d(__webpack_exports__, "getSuggessionFilter", (function() {
        return getSuggessionFilter;
    })), __webpack_require__.d(__webpack_exports__, "getTab", (function() {
        return getTab;
    })), __webpack_require__.d(__webpack_exports__, "getTabFilter", (function() {
        return getTabFilter;
    })), __webpack_require__.d(__webpack_exports__, "setData", (function() {
        return setData;
    })), __webpack_require__.d(__webpack_exports__, "addData", (function() {
        return addData;
    })), __webpack_require__.d(__webpack_exports__, "addAlert", (function() {
        return addAlert;
    })), __webpack_require__.d(__webpack_exports__, "datafiltere", (function() {
        return datafiltere;
    })), __webpack_require__.d(__webpack_exports__, "getStatu", (function() {
        return getStatu;
    })), __webpack_require__.d(__webpack_exports__, "getSpecific", (function() {
        return getSpecific;
    })), __webpack_require__.d(__webpack_exports__, "getDelete", (function() {
        return getDelete;
    })), __webpack_require__.d(__webpack_exports__, "removeData", (function() {
        return removeData;
    })), __webpack_require__.d(__webpack_exports__, "addDelete", (function() {
        return addDelete;
    })), __webpack_require__.d(__webpack_exports__, "deleteDefinifFile", (function() {
        return deleteDefinifFile;
    })), __webpack_require__.d(__webpack_exports__, "restoreData", (function() {
        return restoreData;
    })), __webpack_require__.d(__webpack_exports__, "addRemoveData", (function() {
        return addRemoveData;
    })), __webpack_require__.d(__webpack_exports__, "getRecentData", (function() {
        return getRecentData;
    })), __webpack_require__.d(__webpack_exports__, "getName", (function() {
        return getName;
    })), __webpack_require__.d(__webpack_exports__, "getMessage", (function() {
        return getMessage;
    })), __webpack_require__.d(__webpack_exports__, "getAlert", (function() {
        return getAlert;
    })), __webpack_require__.d(__webpack_exports__, "sendAlert", (function() {
        return sendAlert;
    })), __webpack_require__.d(__webpack_exports__, "getNotification", (function() {
        return getNotification;
    })), __webpack_require__.d(__webpack_exports__, "getDocumentNumber", (function() {
        return getDocumentNumber;
    })), __webpack_require__.d(__webpack_exports__, "search", (function() {
        return search;
    })), __webpack_require__.d(__webpack_exports__, "gettarge", (function() {
        return gettarge;
    })), __webpack_require__.d(__webpack_exports__, "getSugessiontName", (function() {
        return getSugessiontName;
    })), __webpack_require__.d(__webpack_exports__, "searchfilter", (function() {
        return searchfilter;
    })), __webpack_require__.d(__webpack_exports__, "addSuggestion", (function() {
        return addSuggestion;
    })), __webpack_require__.d(__webpack_exports__, "addNewSuggestion", (function() {
        return addNewSuggestion;
    })), __webpack_require__.d(__webpack_exports__, "getSuggestion", (function() {
        return getSuggestion;
    })), __webpack_require__.d(__webpack_exports__, "getHistoriqueSearch", (function() {
        return getHistoriqueSearch;
    })), __webpack_require__.d(__webpack_exports__, "addHistorique", (function() {
        return addHistorique;
    })), __webpack_require__.d(__webpack_exports__, "addMailSimple", (function() {
        return addMailSimple;
    }));
    var getSheets = function() {
        return SpreadsheetApp.getActive().getSheets();
    }, getSheetsData = function() {
        var activeSheetName = SpreadsheetApp.getActive().getSheetName();
        return getSheets().map((function(sheet, index) {
            var name = sheet.getName();
            return {
                name: name,
                index: index,
                isActive: name === activeSheetName
            };
        }));
    }, addSheet = function(sheetTitle) {
        return SpreadsheetApp.getActive().insertSheet(sheetTitle), getSheetsData();
    }, deleteSheet = function(sheetIndex) {
        var sheets = getSheets();
        return SpreadsheetApp.getActive().deleteSheet(sheets[sheetIndex]), getSheetsData();
    }, setActiveSheet = function(sheetName) {
        return SpreadsheetApp.getActive().getSheetByName(sheetName).activate(), getSheetsData();
    }, getSheet = function(sheetName) {
        return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    }, getUsers = function() {
        var targetSheet = getSheet("Compte"), nomRows = targetSheet.getLastRow(), users = targetSheet.getRange(2, 1, nomRows - 1, 4).getValues(), user = {
            chargin: !0,
            data: []
        };
        return user.data = users.map((function(x, index) {
            return {
                name: x[1],
                email: x[2],
                statu: "Administrateur" == x[3] ? 34 : 63
            };
        })), user;
    }, addUser = function(newData) {
        var targetSheet = getSheet("Compte");
        targetSheet.insertRowBefore(2);
        var id = targetSheet.getRange(3, 1).getValue();
        return targetSheet.getRange(2, 1, 1, 4).setValues([ [ id + 1, newData.name, newData.email, newData.email ] ]), 
        !0;
    }, setUser = function(id, newData) {
        return getSheet("Compte").getRange(id + 2, 2, 1, 3).setValues([ [ newData.name, newData.email, 34 == newData.statu ? "Administrateur" : "Secrétaire" ] ]), 
        !0;
    }, deleteUser = function(id) {
        return getSheet("Compte").deleteRow(id + 2), !0;
    }, getDocuments = function(indexMax) {
        var targetSheet = getSheet("Data"), nomRows = targetSheet.getLastRow(), document = [];
        Logger.log(indexMax), document = indexMax + 20 <= nomRows - 1 ? targetSheet.getRange(2 + indexMax, 1, 20, 16).getValues() : indexMax + 20 > nomRows - 1 && indexMax < nomRows - 1 ? targetSheet.getRange(2 + indexMax, 1, nomRows - 1 - indexMax, 16).getValues() : [];
        var documents = {
            chargin: !0,
            statu: "admin",
            data: []
        };
        return documents.data = document.map((function(x, index) {
            return {
                id: x[0].toString(),
                name: x[1],
                type: x[2],
                client: x[3],
                activityArea: x[4],
                serviceLine: x[5],
                country: x[6],
                season: x[7],
                description: x[8],
                fileName: x[9],
                fileType: x[10],
                fileId: x[11],
                user: x[13],
                download: x[14],
                editionLien: x[15]
            };
        })), documents;
    }, uploadFiles = function(e) {
        var blob = Utilities.newBlob(e.bytes, e.mimeType, e.filename), file = DriveApp.createFile(blob), val = file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        return file.addEditor("tapeoariana@gmail.com"), Logger.log(val), {
            fileId: file.getId(),
            editeLink: file.getUrl(),
            doanload: file.getDownloadUrl(),
            description: "https://lh3.googleusercontent.com/d/" + file.getId() + "=s1000-p?authuser=0"
        };
    }, uploadFileTest = function(e) {
        var blob = Utilities.newBlob(e.bytes, e.mimeType, e.filename), file = {
            title: e.filename,
            mimeType: e.mimeType
        };
        return file = Drive.Files.insert(file, blob), Logger.log("ID: %s, File size (bytes): %s", file.id, file.fileSize), 
        "Done";
    }, getSuggession = function() {
        var targetSheet = getSheet("Suggestion"), nomRows = targetSheet.getLastRow(), suggestion = targetSheet.getRange(2, 1, nomRows - 1, 7).getValues();
        return {
            type: getTab(suggestion, 0),
            customer: getTab(suggestion, 1),
            country: getTab(suggestion, 2),
            activityArea: getTab(suggestion, 3),
            season: getTab(suggestion, 4),
            servileLine: getTab(suggestion, 5),
            email: getTab(suggestion, 6)
        };
    }, getSuggessionFilter = function() {
        var targetSheet = getSheet("Suggestion"), nomRows = targetSheet.getLastRow(), suggestion = targetSheet.getRange(2, 1, nomRows - 1, 7).getValues(), suggestions = {
            type: getTabFilter(suggestion, 0),
            customer: getTabFilter(suggestion, 1),
            country: getTabFilter(suggestion, 2),
            activityArea: getTabFilter(suggestion, 3),
            season: getTabFilter(suggestion, 4),
            serviceLine: getTabFilter(suggestion, 5),
            email: getTabFilter(suggestion, 6)
        };
        return Logger.log(suggestion), suggestions;
    }, getTab = function(suggestion, i) {
        for (var data = [], j = 1; j <= suggestion[0][i]; j++) data.push(suggestion[j][i]);
        return data;
    }, getTabFilter = function(suggestion, i) {
        var data = [ "Tous" ];
        if (0 == i) for (var j = 2; j <= suggestion[0][i]; j++) data.push(suggestion[j][i]); else for (j = 1; j <= suggestion[0][i]; j++) data.push(suggestion[j][i]);
        return data;
    }, setData = function(data) {
        var targetSheet = getSheet("Compte");
        targetSheet.insertRowBefore(2);
        var id = targetSheet.getRange(3, 1).getValue();
        return targetSheet.getRange(2, 1, 1, 4).setValues([ [ id + 1, newData.name, newData.email, newData.email ] ]), 
        !0;
    }, addData = function(data) {
        var targetSheet = getSheet("Data");
        targetSheet.insertRowBefore(2);
        targetSheet.getLastRow();
        var dato = [ (new Date).getTime().toString(), data.name, data.type, data.customer, data.activityArea, data.serviceLine, data.country, data.season, data.description, data.fileName, data.fileType, data.fileId, (new Date).toString(), data.user, data.download, data.editeLink ];
        return targetSheet.getRange(2, 1, 1, 16).setValues([ dato ]), addAlert(data.alertEmail, data.alertDate, data.editeLink, data.name), 
        addNewSuggestion(data.type, data.alertEmail, data.serviceLine, data.customer, data.country, data.activityArea, data.season), 
        "Done";
    }, addAlert = function(emails, date, fileLink, filename) {
        if (0 != emails.length) {
            var targetSheet = getSheet("Alert"), nbrRows = targetSheet.getLastRow(), message = "";
            return emails.map((function(email) {
                message += email + ";";
            })), targetSheet.getRange(nbrRows + 1, 1, 1, 4).setValues([ [ message, date.toString(), fileLink, filename ] ]), 
            "done";
        }
    }, datafiltere = function(filter) {
        var targetSheet = getSheet("Data"), nomRows = targetSheet.getLastRow(), document = [];
        document = "" !== filter.reseach ? searchfilter(filter.reseach) : targetSheet.getRange(2, 1, nomRows - 1, 16).getValues();
        var documents = {
            chargin: !0,
            statu: "admin",
            data: []
        };
        return document.map((function(x, index) {
            var inter = !0;
            "Tous" != filter.type && x[2] != filter.type && (inter = !1), "Tous" != filter.country && x[6] != filter.country && (inter = !1), 
            "Tous" != filter.season && x[7] != filter.season && (inter = !1), "Tous" != filter.serviceLine && x[5] != filter.serviceLine && (inter = !1), 
            "Tous" != filter.activityArea && x[4] != filter.activityArea && (inter = !1), "Tous" != filter.client && x[3] != filter.client && (inter = !1), 
            inter && documents.data.push({
                id: x[0],
                name: x[1],
                type: x[2],
                client: x[3],
                activityArea: x[4],
                serviceLine: x[5],
                country: x[6],
                season: x[7],
                description: x[8],
                fileName: x[9],
                fileType: x[10],
                fileId: x[11],
                user: x[13],
                download: x[14],
                editionLien: x[15]
            });
        })), documents.data;
    }, getStatu = function(user) {
        var status = "Standart";
        return getUsers().data.map((function(oluser, index) {
            oluser.email == user && (status = 34 == oluser.statu ? "Administrateur" : "Secrétaire");
        })), status;
    }, getSpecific = function(indexMax, type1, type2) {
        var targetSheet = getSheet("Data"), nomRows = targetSheet.getLastRow(), document = [];
        Logger.log(indexMax), indexMax < nomRows - 1 && (document = targetSheet.getRange(2 + indexMax, 1, nomRows - 1 - indexMax, 16).getValues());
        var documents = {
            indexfin: nomRows,
            chargin: !0,
            statu: "admin",
            data: []
        };
        return document.map((function(x, index) {
            (x[2] == type1 || x[2] == type2) && documents.data.length < 20 && (documents.data.push({
                id: x[0],
                name: x[1],
                type: x[2],
                client: x[3],
                activityArea: x[4],
                serviceLine: x[5],
                country: x[6],
                season: x[7],
                description: x[8],
                fileName: x[9],
                fileType: x[10],
                fileId: x[11],
                user: x[13],
                download: x[14],
                editionLien: x[15]
            }), 20 == documents.data.length && (documents.indexfin = indexMax + index + 1));
        })), documents;
    }, getDelete = function() {
        var targetSheet = getSheet("Delete"), nomRows = targetSheet.getLastRow(), document = [];
        nomRows - 1 > 0 && (document = targetSheet.getRange(2, 1, nomRows - 1, 16).getValues());
        return document.map((function(x, index) {
            return {
                id: x[0],
                name: x[1],
                type: x[2],
                client: x[3],
                activityArea: x[4],
                serviceLine: x[5],
                country: x[6],
                season: x[7],
                description: x[8],
                fileName: x[9],
                fileType: x[10],
                fileId: x[11],
                user: x[13],
                download: x[14],
                editionLien: x[15]
            };
        }));
    }, removeData = function(document) {
        Logger.log(document.id);
        var id = document.id.toString();
        Logger.log(id), Logger.log("valeur" + id.toString() + "valeur"), Logger.log(id.toString().length);
        var targetSheet = getSheet("Data"), nomRows = targetSheet.getLastRow();
        Logger.log(nomRows);
        for (var i = 2; i <= nomRows; i++) {
            var found = targetSheet.getRange(i, 1);
            if (Logger.log("identre" + id.toString() + "id  idsortir" + found.getValue().toString() + "id"), 
            found.getValue().toString() === id.toString()) {
                var index = found.getRow(), fileId = targetSheet.getRange(index, 12).getValue();
                Logger.log("index:" + index + " fileId " + fileId), targetSheet.deleteRow(index);
            }
        }
        return addDelete(document), "Done";
    }, addDelete = function(data) {
        var targetSheet = getSheet("Delete");
        targetSheet.getLastRow();
        targetSheet.insertRowBefore(2);
        var dato = [ data.id, data.name, data.type, data.client, data.activityArea, data.serviceLine, data.country, data.season, data.description, data.fileName, data.fileType, data.fileId, data.date, data.user, data.download, data.editionLien, (new Date).toString() ];
        return targetSheet.getRange(2, 1, 1, 17).setValues([ dato ]), "Done";
    }, deleteDefinifFile = function(id) {
        Logger.log("valeur" + id.toString() + "valeur"), Logger.log(id.toString().length);
        var targetSheet = getSheet("Delete"), nomRows = targetSheet.getLastRow();
        Logger.log(nomRows);
        for (var i = 2; i <= nomRows; i++) {
            var found = targetSheet.getRange(i, 1);
            if (Logger.log("identre" + id.toString() + "id  idsortir" + found.getValue().toString() + "id"), 
            found.getValue().toString() === id.toString()) {
                var index = found.getRow(), fileId = targetSheet.getRange(index, 12).getValue();
                Logger.log("index:" + index + " fileId " + fileId), targetSheet.deleteRow(index);
            }
        }
        return "Done";
    }, restoreData = function(id) {
        Logger.log("valeur" + id.toString() + "valeur"), Logger.log(id.toString().length);
        var targetSheet = getSheet("Delete"), nomRows = targetSheet.getLastRow();
        Logger.log(nomRows);
        for (var i = 2; i <= nomRows; i++) {
            var found = targetSheet.getRange(i, 1);
            if (Logger.log("identre" + id.toString() + "id  idsortir" + found.getValue().toString() + "id"), 
            found.getValue().toString() === id.toString()) {
                var index = found.getRow(), document = targetSheet.getRange(index, 1, 1, 16).getValues().map((function(x, index) {
                    return {
                        id: x[0].toString(),
                        name: x[1],
                        type: x[2],
                        customer: x[3],
                        activityArea: x[4],
                        serviceLine: x[5],
                        country: x[6],
                        season: x[7],
                        description: x[8],
                        fileName: x[9],
                        fileType: x[10],
                        fileId: x[11],
                        user: x[13],
                        download: x[14],
                        editeLink: x[15]
                    };
                }));
                targetSheet.deleteRow(index), addRemoveData(document[0]);
            }
        }
        return "Done";
    }, addRemoveData = function(data) {
        var targetSheet = getSheet("Data");
        targetSheet.getLastRow();
        targetSheet.insertRowBefore(2);
        var dato = [ data.id.toString(), data.name, data.type, data.customer, data.activityArea, data.serviceLine, data.country, data.season, data.description, data.fileName, data.fileType, data.fileId, data.date, data.user, data.download, data.editeLink ];
        return targetSheet.getRange(2, 1, 1, 16).setValues([ dato ]), "Done";
    }, getRecentData = function() {
        var targetSheet = getSheet("Data"), nomRows = targetSheet.getLastRow(), documents = {
            chargin: !0,
            statu: "admin",
            data: {
                today: [],
                yesteday: [],
                thisWeek: [],
                lastWeek: [],
                thisMonth: [],
                lastMonth: []
            }
        }, date = new Date, tempYesteday = date.getTime() - 1e3 * (60 * date.getHours() * 60 + 60 * date.getMinutes() + date.getSeconds()), today = new Date(tempYesteday), tempYestaday = today.getTime() - 864e5, yestaday = new Date(tempYestaday), tempsThisWeek = date.getTime() - 60 * (date.getDay() - 1) * 60 * 24 * 1e3 - 1e3 * (60 * date.getHours() * 60 + 60 * date.getMinutes() + date.getSeconds()), thisWeek = new Date(tempsThisWeek), tempsLastWeek = thisWeek.getTime() - 6048e5, lastWeek = new Date(tempsLastWeek), tempsthisMonth = date.getTime() - 60 * (date.getDate() - 1) * 60 * 24 * 1e3 - 1e3 * (60 * date.getHours() * 60 + 60 * date.getMinutes() + date.getSeconds()), thisMonth = new Date(tempsthisMonth), tempslastMonth = thisMonth.getTime() - 60 * new Date(thisMonth.getTime() - 2e4).getDate() * 60 * 24 * 1e3, lastMonth = new Date(tempslastMonth), state = {
            today: [],
            yesteday: [],
            thisWeek: [],
            lastWeek: [],
            thisMonth: [],
            lastMonth: []
        };
        return targetSheet.getRange(2, 1, nomRows, 16).getValues().map((function(x, index) {
            var olDate = new Date(x[12]), objet = {
                id: x[0],
                name: x[1],
                type: x[2],
                client: x[3],
                activityArea: x[4],
                serviceLine: x[5],
                country: x[6],
                season: x[7],
                description: x[8],
                fileName: x[9],
                fileType: x[10],
                fileId: x[11],
                dateAjout: x[12],
                user: x[13],
                download: x[14],
                editionLien: x[15]
            };
            today < olDate && olDate <= date && state.today.push(objet), yestaday <= olDate && olDate < today && state.yesteday.push(objet), 
            thisWeek <= olDate && olDate < yestaday && state.thisWeek.push(objet), lastWeek <= olDate && olDate < thisWeek && state.lastWeek.push(objet), 
            thisMonth <= olDate && olDate < lastWeek && (state.thisMonth.push(objet), Logger.log("thisMonth: " + thisMonth), 
            Logger.log(olDate)), lastMonth < olDate && olDate < thisMonth && state.lastMonth.push(objet);
        })), documents.data = state, documents;
    }, getName = function(adresse) {
        var tab1 = adresse.split("@"), temp = tab1[0], tab2 = tab1[0].split("."), message = temp;
        return tab2.length > 1 && (message = tab2[0] + " " + tab2[tab2.length - 1]), message;
    }, getMessage = function(recipient, fileName, fileLink, dateEnd) {
        var date_redact = new Date(dateEnd).toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        return {
            to: recipient,
            subject: "Rédaction d'une porpale",
            htmlBody: "Bonjour Mr " + getName(recipient) + "<br/><br/>Le secrétariat vous informe que vous avez une propale à rédiger pour le courrier <a href='" + fileLink + "'>" + fileName + "</a> avant le " + date_redact + ".<br/><br/>Merci<br/><br/>Cordialement.",
            name: "Alert propale",
            attachments: []
        };
    }, getAlert = function() {
        var targetSheet = getSheet("Alert"), nomRows = targetSheet.getLastRow(), data = [];
        return nomRows - 1 >= 1 ? data = targetSheet.getRange(2, 1, nomRows - 1, 4).getValues().map((function(x, index) {
            var email = x[0].split(";");
            return email.pop(), {
                id: index + 2,
                emails: email,
                dateEnd: x[1],
                link: x[2],
                fileName: x[3]
            };
        })) : data;
    }, sendAlert = function() {
        getAlert().map((function(alert, index) {
            Logger.log("on lance l'arter");
            var dateEnd = new Date(alert.dateEnd);
            new Date <= dateEnd ? alert.emails.map((function(user) {
                MailApp.sendEmail(getMessage(user, alert.fileName, alert.link, alert.dateEnd));
            })) : getSheet("Alert").deleteRow(alert.id);
        }));
    }, getNotification = function(user) {
        var notif = 0;
        return getAlert().map((function(alerte, index) {
            alerte.emails.includes(user) && (notif += 1);
        })), notif;
    }, getDocumentNumber = function() {
        var targetSheet = getSheet("Data"), nomRows = targetSheet.getLastRow(), state = {
            total: nomRows - 1,
            propal: 0,
            courrier: 0,
            cv: 0,
            documentAmin: 0,
            missionLeter: 0,
            missionRaport: 0
        };
        targetSheet.getRange(2, 3, nomRows, 1).getValues().map((function(x, index) {
            "Courrier Entrant" != x[0] && "Courrier Sortant" != x[0] || (state.courrier += 1), 
            "Propale technique" != x[0] && "Propale Finacière" != x[0] || (state.propal += 1), 
            "Dossier Administratifs" == x[0] && (state.documentAmin += 1), "Lettre de mission" == x[0] && (state.missionLeter += 1), 
            "Rapport de Mission" == x[0] && (state.missionRaport += 1), "Curriculum Vitae" == x[0] && (state.cv += 1);
        }));
        return state;
    }, search = function(val) {
        Logger.log(val);
        var targetSheet = getSheet("Data"), nomRows = targetSheet.getLastRow(), data = targetSheet.getRange(1, 2, nomRows).createTextFinder(val).matchCase(!1).findAll().map((function(range) {
            return gettarge(range.getRow());
        }));
        return Logger.log(data), data;
    }, gettarge = function(id) {
        var x = getSheet("Data").getRange(id, 1, 1, 16).getValues()[0];
        return {
            id: x[0],
            name: x[1],
            type: x[2],
            client: x[3],
            activityArea: x[4],
            serviceLine: x[5],
            country: x[6],
            season: x[7],
            description: x[8],
            fileName: x[9],
            fileType: x[10],
            fileId: x[11],
            dateAjout: x[12],
            user: x[13],
            download: x[14],
            editionLien: x[15]
        };
    }, getSugessiontName = function() {
        var targetSheet = getSheet("Data"), nomRows = targetSheet.getLastRow();
        return targetSheet.getRange(2, 2, nomRows - 1, 1).getValues().map((function(val) {
            return {
                name: val[0]
            };
        }));
    }, searchfilter = function(val) {
        var targetSheet = getSheet("Data"), nomRows = targetSheet.getLastRow();
        return targetSheet.getRange(1, 2, nomRows - 1).createTextFinder(val).matchCase(!1).findAll().map((function(range) {
            return targetSheet.getRange(range.getRow(), 1, 1, 16).getValues()[0];
        }));
    }, addSuggestion = function(val, colunm) {
        var targetSheet = getSheet("Suggestion"), indice = (targetSheet.getLastRow(), targetSheet.getRange(2, colunm, 1, 1).getValue());
        return targetSheet.getRange(2, colunm, 1, 1).setValue(targetSheet.getRange(2, colunm, 1, 1).getValue() + 1), 
        targetSheet.getRange(indice + 3, colunm, 1, 1).setValue(val), "DONE";
    }, addNewSuggestion = function(typee, emaile, serviceLinee, customere, countrye, activityAreae, seasone) {
        var suggestion = getSuggestion(), type = [], serviceLine = [], customer = [], country = [], season = [], activityArea = [], email = [];
        type = suggestion.type, serviceLine = suggestion.serviceLine, customer = suggestion.customer, 
        country = suggestion.country, season = suggestion.season, activityArea = suggestion.activityArea, 
        email = suggestion.email, -1 == type.indexOf(typee) && addSuggestion(typee, 1), 
        -1 == serviceLine.indexOf(serviceLinee) && addSuggestion(serviceLinee, 6), -1 == customer.indexOf(customere) && addSuggestion(customere, 2), 
        -1 == country.indexOf(countrye) && addSuggestion(countrye, 3), -1 == activityArea.indexOf(activityAreae) && addSuggestion(activityAreae, 4), 
        -1 == season.indexOf(seasone) && addSuggestion(seasone, 5), emaile.length > 0 && emaile.map((function(mail) {
            -1 == email.indexOf(mail) && addSuggestion(mail, 7);
        }));
    }, getSuggestion = function() {
        var targetSheet = getSheet("Suggestion"), nomRows = targetSheet.getLastRow(), suggestion = targetSheet.getRange(2, 1, nomRows - 1, 7).getValues();
        return Logger.log(suggestion), {
            type: getTab(suggestion, 0),
            customer: getTab(suggestion, 1),
            country: getTab(suggestion, 2),
            activityArea: getTab(suggestion, 3),
            season: getTab(suggestion, 4),
            serviceLine: getTab(suggestion, 5),
            email: getTab(suggestion, 6)
        };
    }, getHistoriqueSearch = function() {
        var targetSheet = getSheet("Historique"), nomRows = targetSheet.getLastRow();
        return targetSheet.getRange(1, 1, nomRows, 1).getValues().map((function(x) {
            return {
                name: x[0]
            };
        }));
    }, addHistorique = function(val) {
        var data = {
            name: val
        };
        Logger.log(data);
        var historique = [];
        historique = getHistoriqueSearch(), Logger.log(historique.indexOf(data));
        for (var isInt = !1, i = 0; i < historique.length; i++) historique[i].name === val && (isInt = !0);
        if (!isInt) {
            var targetSheet = getSheet("Historique");
            targetSheet.insertRowBefore(1), targetSheet.getRange(1, 1, 1, 1).setValue(val);
        }
        return Logger.log(isInt), "DONE";
    }, addMailSimple = function(emaile) {
        var suggestion = getSuggestion(), email = [];
        return email = suggestion.email, emaile.length > 0 && emaile.map((function(mail) {
            -1 == email.indexOf(mail) && addSuggestion(mail, 7);
        })), "Done";
    };
} ]));