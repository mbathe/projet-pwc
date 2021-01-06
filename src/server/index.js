import * as publicUiFunctions from './ui';
import * as publicSheetFunctions from './sheets';


// Expose public functions by attaching to `global`
global.onOpen = publicUiFunctions.onOpen;
global.openDialog = publicUiFunctions.openDialog;
global.openDialogBootstrap = publicUiFunctions.openDialogBootstrap;
global.openAboutSidebar = publicUiFunctions.openAboutSidebar;
global.getSheetsData = publicSheetFunctions.getSheetsData;
global.addSheet = publicSheetFunctions.addSheet;
global.deleteSheet = publicSheetFunctions.deleteSheet;
global.setActiveSheet = publicSheetFunctions.setActiveSheet;
global.doGet = publicUiFunctions.doGet;
global.getSheet = publicSheetFunctions.getSheet
global.getUsers = publicSheetFunctions.getUsers;
global.addUser  = publicSheetFunctions.addUser;
global.setUser = publicSheetFunctions.setUser;
global.deleteUser = publicSheetFunctions.deleteUser;
global.getDocuments = publicSheetFunctions.getDocuments;
global.uploadFiles= publicSheetFunctions.uploadFiles;
global.getSuggession = publicSheetFunctions.getSuggession;
global.getTab = publicSheetFunctions.getTab;
global.addData = publicSheetFunctions.addData;
global.addAlert = publicSheetFunctions.addAlert;
global.datafiltere = publicSheetFunctions.datafiltere;
global.getSuggessionFilter = publicSheetFunctions.getSuggessionFilter;
global.getTabFilter = publicSheetFunctions.getTabFilter;
global.getStatu = publicSheetFunctions.getStatu;
global.getSpecific = publicSheetFunctions.getSpecific;
global.getDelete =publicSheetFunctions.getDelete;
global.removeData = publicSheetFunctions.removeData;
global.addDelete = publicSheetFunctions.addDelete;
global.deleteDefinifFile= publicSheetFunctions.deleteDefinifFile;
global.restoreData = publicSheetFunctions.restoreData;
global.addRemoveData = publicSheetFunctions.addRemoveData;
global.getRecentData = publicSheetFunctions.getRecentData;
global.getName = publicSheetFunctions.getName;
global.getMessage = publicSheetFunctions.getMessage;
global.getAlert = publicSheetFunctions.getAlert;
global.sendAlert = publicSheetFunctions.sendAlert;
global.getNotification = publicSheetFunctions.getNotification;
global.getDocumentNumber = publicSheetFunctions.getDocumentNumber;
global.search = publicSheetFunctions.search;
global.gettarge = publicSheetFunctions.gettarge;
global.getSugessiontName = publicSheetFunctions.getSugessiontName;
global.searchfilter = publicSheetFunctions.searchfilter;
global.getSuggestion = publicSheetFunctions.getSuggestion;
global.addNewSuggestion = publicSheetFunctions.addNewSuggestion;
global.addSuggestion = publicSheetFunctions.addSuggestion;
global.uploadFileTest = publicSheetFunctions.uploadFileTest;
global.getHistoriqueSearch =publicSheetFunctions.getHistoriqueSearch;
global.addHistorique  = publicSheetFunctions.addHistorique;
global.addMailSimple = publicSheetFunctions.addMailSimple;
global.signUp = publicSheetFunctions.signUp;
global.sendVerificationCode = publicSheetFunctions.sendVerificationCode;
global.confirmVerificationCode = publicSheetFunctions.confirmVerificationCode;
global.getValStatu = publicSheetFunctions.getValStatu;
global. getStatuVal = publicSheetFunctions. getStatuVal;


