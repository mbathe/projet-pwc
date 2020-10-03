

const getSheets = () => SpreadsheetApp.getActive().getSheets();

const getActiveSheetName = () => SpreadsheetApp.getActive().getSheetName();

export const getSheetsData = () => {
  const activeSheetName = getActiveSheetName();
  return getSheets().map((sheet, index) => {
    const name = sheet.getName();
    return {
      name,
      index,
      isActive: name === activeSheetName,
    };
  });
};

export const addSheet = sheetTitle => {
  SpreadsheetApp.getActive().insertSheet(sheetTitle);
  return getSheetsData();
};

export const deleteSheet = sheetIndex => {
  const sheets = getSheets();
  SpreadsheetApp.getActive().deleteSheet(sheets[sheetIndex]);
  return getSheetsData();
};

export const setActiveSheet = sheetName => {
  SpreadsheetApp.getActive()
    .getSheetByName(sheetName)
    .activate();
  return getSheetsData();
};



export const getSheet = (sheetName) =>{
  return  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
}

export const getUsers = () =>{
  var targetSheet = getSheet("Compte");
  var nomRows = targetSheet.getLastRow();
  var users =  targetSheet.getRange(2,1,nomRows-1,4).getValues();
  var user={
    chargin:true,
    data:[]
  };
    user.data =  users.map((x,index)=> {
     return {
      name : x[1],
      email : x[2],
      statu :x[3]== "Administrateur" ? 34 : 63,
      }
  });
  return user;
} 


export const addUser = (newData) =>{
  var targetSheet = getSheet("Compte");
  targetSheet.insertRowBefore(2);
  var id = targetSheet.getRange(3,1).getValue();
  targetSheet.getRange(2,1,1,4).setValues([[id+1,newData.name,newData.email,newData.email]]);
  return true;
}


export const setUser = (id,newData) =>{
  var targetSheet = getSheet("Compte");
  targetSheet.getRange(id+2,2,1,3).setValues([[newData.name,newData.email,newData.statu == 34? "Administrateur" : "Secrétaire"]]);
  return true;
}


export const deleteUser = (id) =>{
 var targetSheet = getSheet("Compte");
 targetSheet.deleteRow(id+2);
 return true;
}




export const getDocuments =(indexMax)=>{
  var targetSheet = getSheet("Data");
  var nomRows = targetSheet.getLastRow();
  var document =[];
  Logger.log(indexMax);
  if(indexMax+20<=nomRows-1){
     document =  targetSheet.getRange(2+indexMax,1,20,16).getValues();
  }else if(indexMax+20>nomRows-1 && indexMax < nomRows-1){
     document =  targetSheet.getRange(2+indexMax,1,nomRows-1-indexMax,16).getValues();
  }else{
   document=[];
  }
  var documents={
    chargin:true,
    statu: "admin",
    data:[]
  };
    documents.data =  document.map((x,index)=> {
     return {
      id: x[0],
      name : x[1],
      type : x[2],
      client :x[3],
      activityArea:x[4],
      serviceLine:x[5],
      country:x[6],
      season:x[7],
      description:x[8],
      fileName:x[9],
      fileType:x[10],
      fileId:x[11],
      user:x[13],
      download:x[14],
      editionLien:x[15],
      }
  });
  return documents;

}


export const uploadFiles = (e)=>{  
  /*
  var file = data;
  var folder = DriveApp.getFolderById('1IxMiswEfi67ovoBf8ZH1RV7qVPx1Ks6l');
  var createFile = folder.createFile(file);
  return createFile.getUrl();
  */
 var blob = Utilities.newBlob(e.bytes, e.mimeType, e.filename);
 var file = DriveApp.createFile(blob); 
 /*var users=getUsers();
 users.map((user)=>{
   if(user.statu=="Administrateur"){
    file.addEditor(user.email);
   }else if(user.statu=="Secrétaire"){
    file.addViewer("tapeoariana@gmail.com");
   }
 });
*/

var val= file.setSharing(DriveApp.Access.ANYONE_WITH_LINK,DriveApp.Permission.VIEW);
file.addEditor("tapeoariana@gmail.com");
Logger.log(val);
 var data={
    fileId: file.getId(),
    editeLink: file.getUrl(),
    doanload:file.getDownloadUrl(),
    description:"https://lh3.googleusercontent.com/d/"+file.getId()+"=s1000-p?authuser=0",
  }
 return data;
}



export const getSuggession =()=>{
  var targetSheet = getSheet("Suggestion");
  var nomRows = targetSheet.getLastRow();
  var suggestion =  targetSheet.getRange(2,1,nomRows-1,7).getValues();
  var suggestions={
    type:getTab(suggestion,0),
    customer:getTab(suggestion,1),
    country:getTab(suggestion,2),
    activityArea:getTab(suggestion,3),
    season:getTab(suggestion,4),
    servileLine:getTab(suggestion,5),
    email: getTab(suggestion,6),
  
  };
   
  return suggestions;

}

export const getSuggessionFilter =()=>{
  var targetSheet = getSheet("Suggestion");
  var nomRows = targetSheet.getLastRow();
  var suggestion =  targetSheet.getRange(2,1,nomRows-1,7).getValues();
  var suggestions={
    type:getTabFilter(suggestion,0),
    customer:getTabFilter(suggestion,1),
    country:getTabFilter(suggestion,2),
    activityArea:getTabFilter(suggestion,3),
    season:getTabFilter(suggestion,4),
    servileLine:getTabFilter(suggestion,5),
    email: getTabFilter(suggestion,6),
  
  };
   
  Logger.log(suggestion);
  return suggestions;

}


export const  getTab =(suggestion,i)=> {
  var data =[];
  for (var j=1; j<=suggestion[0][i];j++){
    data.push(suggestion[j][i]);
  }
  
return data;
}
export const  getTabFilter =(suggestion,i)=> {
  var data =["Tous"];
  if(i==0){
    for (var j=2; j<=suggestion[0][i];j++){
      data.push(suggestion[j][i]);
    }
  }else{
    for (var j=1; j<=suggestion[0][i];j++){
      data.push(suggestion[j][i]);
    }
  }
  
  
return data;
}


export const setData =(data)=>{
  var targetSheet = getSheet("Compte");
  targetSheet.insertRowBefore(2);
  var id = targetSheet.getRange(3,1).getValue();
  targetSheet.getRange(2,1,1,4).setValues([[id+1,newData.name,newData.email,newData.email]]);
  return true;
}


export const addData = (data)=>{
  var targetSheet = getSheet("Data");
  var nbrRows = targetSheet.getLastRow();
  var date = new Date();
  var dato=[date.getTime(),data.name, data.type,data.customer,data.activityArea,data.serviceLine,data.country,data.season,data.description,data.fileName,data.fileType,data.fileId,(new Date()).toString(),data.user,data.download,data.editeLink];
  targetSheet.getRange(nbrRows+1,1,1,16).setValues([dato]);
  addAlert(data.alertEmail,data.alertDate,data.editeLink,data.name);     
  return "Done";
}

export const addAlert =(emails,date,fileLink,filename)=>{
  if(emails.length!=0){
    var targetSheet = getSheet("Alert");
    var nbrRows = targetSheet.getLastRow();
    var message ="";
    emails.map((email)=>{
               message+=email+";"
               });
    targetSheet.getRange(nbrRows+1,1,1,4).setValues([[message,date.toString(),fileLink,filename]]);
    return "done";
 }
}






export const  datafiltere =(filter)=>{
  var targetSheet = getSheet("Data");
  var nomRows = targetSheet.getLastRow(); 
  var document =  targetSheet.getRange(2,1,nomRows-1,16).getValues();
  var documents={
    chargin:true,
    statu: "admin",
    data:[]
  };
     document.map((x,index)=> {
      var inter=true;
      if(filter.type !="Tous" && x[2]!=filter.type){ 
           inter=false;
      }
       if(filter.country !="Tous" && x[6]!=filter.country)
      {
        
         inter=false;
      }
       if(filter.season !="Tous" && x[7]!=filter.season)
      {
        
       inter = false;
      }
       if(filter.serviceLine !="Tous" && x[5] !=filter.serviceLine)
      {
         
        inter =false;
      }
       if(filter.activityArea !="Tous" && x[4] !=filter.activityArea)
      {
        
        inter =false;
      }
       if ((filter.client !="Tous" && x[3] !=filter.client))
      {
        
         inter =false;
      }
    
    if(inter){
      documents.data.push( {
      id: x[0],
      name : x[1],
      type : x[2],
      client :x[3],
      activityArea:x[4],
      serviceLine:x[5],
      country:x[6],
      season:x[7],
      description:x[8],
      fileName:x[9],
      fileType:x[10],
      fileId:x[11],
      user:x[13],
      download:x[14],
      editionLien:x[15],
      });
    }
  });
  return documents.data;

 
    
 }






 export const getStatu = (user)=>{
  var status="Secrétaire";
  var users =getUsers();
  users.data.map((oluser,index)=>{
    if(oluser.email==user){
    status=oluser.statu==34? "Administrateur":"Secrétaire";
     }
   });
   return status;
}



export const getSpecific =(indexMax,type1,type2)=>{
  var targetSheet = getSheet("Data");
  var nomRows = targetSheet.getLastRow();
  var document =[];
  Logger.log(indexMax);
  if(indexMax<nomRows-1){
    document =  targetSheet.getRange(2+indexMax,1,nomRows-1-indexMax,16).getValues();
  }
  
  var documents={
    indexfin:nomRows,
    chargin:true,
    statu: "admin",
    data:[]
  };
  var end=false;
    document.map((x,index)=> {
      if((x[2]==type1 || x[2]==type2) && documents.data.length<20){
      documents.data.push({
        id: x[0],
        name : x[1],
        type : x[2],
        client :x[3],
        activityArea:x[4],
        serviceLine:x[5],
        country:x[6],
        season:x[7],
        description:x[8],
        fileName:x[9],
        fileType:x[10],
        fileId:x[11],
        user:x[13],
        download:x[14],
        editionLien:x[15],
        });
      if(documents.data.length==20){
        documents.indexfin=indexMax+index+1;
      }
      }
     
  });
  return documents;

}


export const getDelete =()=>{
  var targetSheet = getSheet("Delete");
  var nomRows = targetSheet.getLastRow();
  var document =[];
  document =  targetSheet.getRange(2,1,nomRows-1,16).getValues();
  var documents=[];
    documents =  document.map((x,index)=> {
     return {
      id: x[0]+"",
      name : x[1],
      type : x[2],
      client :x[3],
      activityArea:x[4],
      serviceLine:x[5],
      country:x[6],
      season:x[7],
      description:x[8],
      fileName:x[9],
      fileType:x[10],
      fileId:x[11],
      user:x[13],
      download:x[14],
      editionLien:x[15],
      }
  });
  
 
  return documents;
}


export const removeData =(id)=>{
   var targetSheet = getSheet("Data");
   var nomRows = targetSheet.getLastRow();  
   var found = targetSheet.getRange(1,1,nomRows-1).createTextFinder(id).matchCase(false).findAll();
   var document=found.map((range)=>{
          var doc = targetSheet.getRange(range.getRow(),1,1,16).getValues();
           targetSheet.deleteRow(range.getRow());
           return doc;
       });
 
    var documents=[];
      documents =  document.map((ral,index)=> {
        var x= ral[0];
       return {
        id: x[0],
        name : x[1],
        type : x[2],
        client :x[3],
        activityArea:x[4],
        serviceLine:x[5],
        country:x[6],
        season:x[7],
        description:x[8],
        fileName:x[9],
        fileType:x[10],
        fileId:x[11],
        user:x[13],
        download:x[14],
        editeLink:x[15],
        }
    });
    Logger.log("Valeur du document");
    Logger.log(documents[0]);
    addDelete(documents[0]);  
    return "Done"; 
  }
  export const addDelete = (data)=>{
    var targetSheet = getSheet("Delete");
    var nbrRows = targetSheet.getLastRow();
    var dato=[data.id.toString(),data.name, data.type,data.customer,data.activityArea,data.serviceLine,data.country,data.season,data.description,data.fileName,data.fileType,data.fileId,data.date,data.user,data.download,data.editeLink,(new Date()).toString()];
    targetSheet.getRange(nbrRows+1,1,1,17).setValues([dato]); 
    return "Done";
  
  }  


  export const deleteDefinifFile =(id)=>{
    Logger.log(id);
    var targetSheet = getSheet("Delete");
    var nomRows = targetSheet.getLastRow();  
   var found = targetSheet.getRange(1,1,nomRows-1).createTextFinder(id).matchCase(false).findAll();
   var document=found.map((range)=>{
          var doc = targetSheet.getRange(range.getRow(),12,1,1).getValue();
           targetSheet.deleteRow(range.getRow());
           return doc;
       });
 
    
    Logger.log(document);
   //Drive.Files.remove(documents[0].fileId);
    return "Done";
   }


   export const restoreData =(id)=>{

    var targetSheet = getSheet("Delete");
      var document =[];
      document =  targetSheet.getRange(id,1,1,16).getValues();
      var documents=[];
        documents =  document.map((x,index)=> {
         return {
          id: x[0],
          name : x[1],
          type : x[2],
          customer :x[3],
          activityArea:x[4],
          serviceLine:x[5],
          country:x[6],
          season:x[7],
          description:x[8],
          fileName:x[9],
          fileType:x[10],
          fileId:x[11],
          user:x[13],
          download:x[14],
          editeLink:x[15],
          }
      });
      addRemoveData(documents[0]);
     targetSheet.deleteRow(id);
     var nbrRows = targetSheet.getLastRow();
      for(var i=id;i<=nbrRows;i++){
        targetSheet.getRange(i,1,1,1).setValue(targetSheet.getRange(i,1,1,1).getValue()-1); 
      }
      return "Done";
    
}
export const addRemoveData =(data)=>{

      var targetSheet = getSheet("Data");
      var nbrRows = targetSheet.getLastRow();
      var dato=[nbrRows+1,data.name, data.type,data.customer,data.activityArea,data.serviceLine,data.country,data.season,data.description,data.fileName,data.fileType,data.fileId,data.date,data.user,data.download,data.editeLink];
      targetSheet.getRange(nbrRows+1,1,1,16).setValues([dato]);
      return "Done";
}


export const getRecentData =()=>{

  var targetSheet = getSheet("Data");
    var nomRows = targetSheet.getLastRow();  
    var documents={
      chargin:true,
      statu: "admin",
      data:{
        today:[],
        yesteday:[],
        thisWeek:[],
        lastWeek:[],
        thisMonth:[],
        lastMonth:[],
      }
    };
    var date = new Date();
    //Logger.log("jour de la semaine: "+date.getDay()+ "  jour du mois "+date.getDate()+" heure : "+date.getHours()+" minutes :"+date.getMinutes() +"  seconde: "+date.getSeconds());
   
    var tempYesteday=date.getTime()-(60*date.getHours()*60+ 60*date.getMinutes()+date.getSeconds())*1000;
    var today = new Date(tempYesteday);
    
    var tempYestaday=today.getTime()-(60*60*24) * 1000;
    var yestaday = new Date(tempYestaday);
   
    var tempsThisWeek=date.getTime()-(date.getDay()-1)*60*60*24*1000-(60*date.getHours()*60+ 60*date.getMinutes()+date.getSeconds())*1000;
    var thisWeek = new Date(tempsThisWeek);
    
    var tempsLastWeek= thisWeek.getTime()-7*60*60*24*1000;
    var lastWeek= new Date(tempsLastWeek);
    
    var tempsthisMonth = date.getTime()-(date.getDate()-1)*60*60*24*1000-(60*date.getHours()*60+ 60*date.getMinutes()+date.getSeconds())*1000;
    var thisMonth = new Date(tempsthisMonth);
   
    
      
    var tempslastMonth = thisMonth.getTime()-(new Date(thisMonth.getTime()-20*1000).getDate())*60*60*24*1000;
    var lastMonth = new Date(tempslastMonth);
   
    var state={
      today:[],
      yesteday:[],
      thisWeek:[],
      lastWeek:[],
      thisMonth:[],
      lastMonth:[],
    }
    
    
    
     targetSheet.getRange(2,1,nomRows,16).getValues().map((x,index)=> {
     var olDate = new Date(x[12]);
    var objet ={
        id: x[0],
        name : x[1],
        type : x[2],
        client :x[3],
        activityArea:x[4],
        serviceLine:x[5],
        country:x[6],
        season:x[7],
        description:x[8],
        fileName:x[9],
        fileType:x[10],
        fileId:x[11],
        dateAjout:x[12],
        user:x[13],
        download:x[14],
        editionLien:x[15],
        }
     if(today<olDate && olDate<=date){
    
     //ogger.log("on entre dans aujourd'hui");
    state.today.push(objet);
    } 
    if(yestaday<=olDate && olDate<today){
    //ogger.log("on entre dans hier");
    state.yesteday.push(objet);
    }
    if(thisWeek<=olDate && olDate<yestaday){
      state.thisWeek.push(objet)  
     
    }
    if(lastWeek<=olDate && olDate<thisWeek){
     state.lastWeek.push(objet);
    //gger.log("la semaine passée");
    }
    if(thisMonth<=olDate && olDate<lastWeek){
    state.thisMonth.push(objet)
    //Logger.log("ce moi");
    Logger.log("thisMonth: "+thisMonth);
      Logger.log(olDate);
   }
    if(lastMonth<olDate && olDate<thisMonth){
     state.lastMonth.push(objet);
    //ogger.log("Le mois passé");
  }
      
    });
   
    documents.data = state; 
   return documents;
  
  }



  export const getName=(adresse)=>{
    var tab1=adresse.split('@');
    var temp =tab1[0];
    var tab2 =tab1[0].split('.');
    var message=temp;
    if(tab2.length>1){
       message=tab2[0]+" "+tab2[tab2.length-1];
    }
    return message
  }
  
  
  export const getMessage=(recipient,fileName,fileLink,dateEnd)=>{
    var options = { weekday: 'long', year: 'numeric',
                  month: 'long', day: 'numeric' };
      var date= new Date(dateEnd);
      var date_redact = date.toLocaleDateString('fr-FR', options);
    var msg="Bonjour Mr "+getName(recipient)+"<br/><br/>Le secrétariat vous informe que vous avez une propale à rédiger pour le courrier " + "<a href='" + fileLink + "'>"+fileName+"</a> avant le "+date_redact+".<br/><br/>Merci<br/><br/>Cordialement.";
  var message = {
    to: recipient,
    subject: "Rédaction d'une porpale",
    htmlBody: msg,
    name: "Alert propale",
    attachments: []
  };
    
  return message
  }



  export const getAlert=()=>{
    var targetSheet = getSheet("Alert");
    var nomRows = targetSheet.getLastRow();
    var alerts =  targetSheet.getRange(2,1,nomRows-1,4).getValues();
   var data = alerts.map((x,index)=> {
               var email=x[0].split(';');
               email.pop();
               return {
               id:index+2,
               emails:email,
               dateEnd:x[1],
               link:x[2],
               fileName:x[3],
               }
           });
   return data;
    
    
  }


  export const sendAlert =()=>{
    var data =getAlert(); 
      data.map((alert,index)=>{
       
      var dateEnd = new Date(alert.dateEnd);
      var daten = new Date();
      if(daten<=dateEnd){
        alert.emails.map((user)=>{
                    MailApp.sendEmail(getMessage(user,alert.fileName,alert.link,alert.dateEnd));      
           });
        
      }else{
        var targetSheet = getSheet("Alert");
         targetSheet.deleteRow(alert.id);
      }
                
      }); 
    }




   export const  getNotification=(user)=>{
      var notif = 0;
      var messages =[];
      var alert = getAlert();
      alert.map((alerte,index)=>{
             if(alerte.emails.includes(user)){
              notif+=1;
           }
        
      });
    
    return notif;  
    }



    export const getDocumentNumber=()=>{

      var targetSheet = getSheet("Data");
        var nomRows = targetSheet.getLastRow();  
       
        var state={
          total:nomRows-1,
          propal:0,
          courrier:0,
          cv:0,
          documentAmin:0,
          missionLeter:0,
          missionRaport:0,
        }
        
        
        
       var test= targetSheet.getRange(2,3,nomRows,1).getValues().map((x,index)=> {
         
        if(x[0]=="Courrier Entrant" || x[0]=="Courrier Sortant"){
        
          state.courrier+=1;
        } 
        if(x[0]=="Propale technique" || x[0]=="Propale Finacière"){
         state.propal+=1;
        }
        if(x[0]=="Dossier Administratifs"){
          
         state.documentAmin+=1;
        }
        if(x[0]=="Lettre de mission"){
         state.missionLeter+=1
        }
        if(x[0]=="Rapport de Mission"){
        state.missionRaport+=1;
       }
        if(x[0]=="Curriculum Vitae"){
        state.cv+=1;
      }
          
        });
          
       return state;
        
      }

      

      export const search =(val)=>{
        var targetSheet = getSheet("Data");
        var nomRows = targetSheet.getLastRow();  
          var found = targetSheet.getRange(1,2,nomRows-1).createTextFinder(val).matchCase(false).findAll();
         var data= found.map((range)=>{
                  return  gettarge(range.getRow())
                  });
          return data;
        }


        export const gettarge=(id)=>{
          var targetSheet = getSheet("Data");
          var test =  targetSheet.getRange(id,1,1,16).getValues(); 
           var x =test[0];
          var objet ={
            id: x[0],
            name : x[1],
            type : x[2],
            client :x[3],
            activityArea:x[4],
            serviceLine:x[5],
            country:x[6],
            season:x[7],
            description:x[8],
            fileName:x[9],
            fileType:x[10],
            fileId:x[11],
            dateAjout:x[12],
            user:x[13],
            download:x[14],
            editionLien:x[15],
                }
          return objet;
          
          }
        