
function FillTable(ListOfObject)
{
    console.log(ListOfObject);
    var headers = [];
    //console.log(Object.keys({list})[0]);
    var HeadName = `Table_${ListOfObject[0]}_Head`;  
    var BodyName = `Table_${ListOfObject[0]}_Body`;
    var TableName = `${ListOfObject[0]}TableID`;
    
    headers.push(ListOfObject[0]);
    ListOfObject.shift();
    
    // var TableHead = document.getElementById(HeadName);
    var TableBody = document.getElementById(BodyName);
    var TableHead = document.getElementById(HeadName);
    var MyTable = document.getElementById(TableName);
    
    if (MyTable == null || MyTable == undefined){return null ;}

    TableHead.innerHTML = GetTableHeaders(ListOfObject);
    
    ListOfObject.shift();
    
    var ListOfHTMLStringObject = ``;
    
    ListOfObject.forEach(element => {
        ListOfHTMLStringObject += FormatToTableBody(element);
    });
    // Inject HTML
    
    TableBody.innerHTML = ListOfHTMLStringObject;
    //populate headers 
    
    StyleTable(MyTable);
    
}

function StyleTable(table){
    
    console.log(table);
    
    let TableData = table.innerHTML ;
    
    // var tag = document.createElement("td");
    // tag.classList.add('col-md-4');
    // var text = document.createTextNode("");
    // tag.appendChild(text);
    
    var tag3 = `
    <div class = "col-md-4">
    </div>
    `;
    
    
    
    
    let StyledTable = "<row>"+tag3 ;
    StyledTable += TableData ;
    StyledTable += tag3 +"</row>"  ;
    
    // table.innerHTML = StyledTable ; 
    
}

function GetTableHeaders(names){
    let tds
    
    console.log(names);
    
    names[0].forEach(element => {
        
        tds +=  `
        <th scope="col">${element}</th>
        `;
        
    });
    
    //console.log(phrase)
    
    let phrase = `
    <tr>
    ${tds}
    </tr>`;
    
    //console.log(phrase)
    
    return phrase
}

function FormatToTableBody(rawphrase) {
    //if(list[0][0] == "X"){continue;}
    console.log(rawphrase);
    
    let phrase = "" ;
    rawphrase.forEach(element => {
        
           phrase += `
           <td scope="row" class="col-md-4">       
           ${element} 
           </td>`;
        });
        
        //console.log(phrase)
        
        return `<tr> ${phrase} </tr>`;
    }
    

    function Start()
{
    //Log To Console
    
    console.log("Starting Kovlyn Web ");
    
    // Create Objects
    
    var data = new Solver();

    //Initiate data

    console.log(data.lists);
    //Get HTML from 

    // Inject HTML
}

function GetToast(text,caption){
    return `
    <div class="toast">
  <div class="toast-header">
    ${caption}
  </div>
  <div class="toast-body">
    ${text}
  </div>
</div>
    `;
}

function GetAlert(text,caption){
    return `
    <div class="alert alert-danger alert-dismissible fade show">
    <strong> ${caption}</strong>  ${text}
  </div>
    `;
}
function GetToolTip(text){
    return `
    <a href="#" data-toggle="tooltip" title="Hooray!">Hover over me</a>
    `;
}
function GetPopOver(text){
    return `
    <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover">Toggle popover</a>
    `;
}

function CreateTableScaffled(lists){
    
    let tablename = lists[0];
    lists.shift();
    let headers = lists[0];
    lists.shift();
    let body = lists ;

    let tablehtmlstringtemplate = `<div class="w-50 h-50 d-inline-block row" id = "${tablename}TableID">
    <div class"col-md-3">
    <table class="table table-responsive pre-scrollable table-dark table-striped">
         <thead class="" id="Table_${tablename}_Head">
` ;
    
    headers.forEach(element => {
        tablehtmlstringtemplate += `
        <th>       
        ${element} 
        </th>`;
    });

tablehtmlstringtemplate += `</thead>
<tbody class="" id="Table_${tablename}_Body">`;

    body.forEach(datamodel => {
        tablehtmlstringtemplate += `<tr>`;
        datamodel.forEach( data => {
// console.log(data);
            data.forEach( datastring =>{

                tablehtmlstringtemplate += `
                <td>       
                ${datastring} 
                </td>`;
            });

            tablehtmlstringtemplate += `</tr>`;
            
            // tablehtmlstringtemplate += `
            //     <td>       
            //     ${data} 
            //     </td>`;

        });
    });

    tablehtmlstringtemplate += ` </tbody>
    </table>
    </div>
    </div>`;

    return tablehtmlstringtemplate;
}
    function FormatToMediaObject(rawphrase) {
        //console.log(rawphrase,"from media method");
        //rawphrase = GetDataObject(rawphrase);
        //if(list[0][0] == "X"){continue;}
        let phrase = `
        <div class="modal-dialog modal-dialog-centered">
        <div class="media border p-3">
        <img src="${rawphrase[rawphrase.length-2]}" alt="${rawphrase[rawphrase.length-2]}" class="mr-3 mt-3 rounded-circle" style="width:60px;">
        <div class="media-body">
        <h4>${rawphrase[0]}<small><i>${rawphrase[rawphrase.length-3]}</i></small></h4>
        <p>${rawphrase[rawphrase.length-3]}${rawphrase[0]} , ${rawphrase[1]}</p>
        </div></div>
        </div>`;
        //console.log(phrase)
        
        return phrase
    }
    
    function FormatToModal(rawphrase) {
        //if(list[0][0] == "X"){continue;}
        let phrase = `<!-- The Modal -->
        <div class="modal" id="myModal">
        <div class="modal-dialog">
        <div class="modal-content">
        
        <!-- Modal Header -->
        <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
        Modal body..
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
        </div>
        </div>
        </div>`;
        //console.log(phrase)
        
        return phrase
    }
    
    function FormatToCard(rawphrase) {
        //if(list[0][0] == "X"){continue;}
        let phrase = `
        <div class="row align-items-center justify-content-center">
        <div class="card" style="width:400px ">
        <img class="card-img-top" src="${rawphrase[rawphrase.length-2]}" alt="${rawphrase[rawphrase.length-2]}">
        <div style="color:black" class="card-body">
          <h4 style="color:black" class="card-title">${rawphrase[0]}</h4>
          <p style="color:black" class="card-text">${rawphrase[1]}</p>
          <a href="#" class="btn btn-primary">${rawphrase[rawphrase.length-1]}</a>
        </div>
        </div>
      </div>`;
        //console.log(phrase)
        
        return phrase
    }

function GetDataObject(Object){
console.log(Object);
let compoenentModel =[];

Object.forEach(datamodel => {
        compoenentModel.push([datamodel[datamodel.length-4],datamodel[datamodel.length-3],datamodel[datamodel.length-2],datamodel[datamodel.length-1]]);
}); 
return compoenentModel;
}

    function readTextFile(file)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    console.log(allText);
                }
            }
        }
        rawFile.send(null);
    }
    
    class Project
    {
        
        constructor(id,projectname , projectdescription , projectid , projecttitle , projectImages , projectdate , projectlanuage , projectframework , projectide)
        {
            this.id = id ;
            this._ProjectName = projectname ;
            this._ProjectDescription = projectdescription ;
            this._ProjectId = projectid ;
            this._ProjectTitle = projecttitle ;
            this._ProjectImages = projectImages ;
            this._ProjectDate = projectdate ;
            this._ProjectLanguage = projectlanuage ;
            this._ProjectFramework = projectframework ;
            this._ProjectIDE = projectide ;
            
            
        }
        
    }

    class ModalObject{
    constructor(headers , body , footer , images , functions ){
        this.headers = headers;
        this.body = body ;
        this.footer = footer;
        this.images = images ;
        this.functions = functions;
    }

    }
    class MediaObject{
        constructor(headers , body , footer , images , functions ){
            this.headers = headers;
            this.body = body ;
            this.footer = footer;
            this.images = images ;
            this.functions = functions;
        }
    }

    

    class CardObject{
        constructor(headers , data , images , functions){
            this.headers = headers ;
            this.data = data;
            this.images = images;
            this.functions = functions;
        }

    }

    class MockedDb{
        constructor (){
            this.Languages = [["Languages"],["Language","Year Started","headers" , "data" , "images" , "functions"],
                                [["C#", " 2018 ","headers" , "data" , "Csimg.png" , "functions"] , 
                                ["Python","2011","headers" , "data" , "pythonimg.png" , "functions"],
                                ["C++","2011","headers" , "data" , "cimg.png" , "functions"],
                                ["Delphi","2011","headers" , "data" , "delphiimg.png" , "functions"],
                                ["Xml","2011","headers" , "data" , "xmlimg.png" , "functions"],
                                ["Css","2011","headers" , "data" , "cssimg.png" , "functions"],
                                ["Html","2011","headers" , "data" , "htmlimg.png" , "functions"],
                                ["Json","2011","headers" , "data" , "jsonimg.png" , "functions"],
                                ["Jquery","2011","headers" , "data" , "jqueryimg.png" , "functions"],
                                ["Ajax","2011","headers" , "data" , "jqueryimg.png" , "functions"],
                                ["Tensorflow","2011","headers" , "data" , "tsimg.png" , "functions"],
                                ["Java","2011","headers" , "data" , "javaimg.png" , "functions"],
                                ["Javascript","2011","headers" , "data" , "jsimg.png" , "functions"],
                                ["Sql","2011","headers" , "data" , "sqlimg.png" , "functions"],
                                ["HTML","2011","headers" , "data" , "htmlimg.png" , "functions"]
                             ]];

            this.Technologies = [["Technologies"],["IDE","Year Started","headers" , "data" , "images" , "functions"],
                                [ ["Unity","Year Started","headers" , "data" , "unityimg.png" , "functions"] ,
                                 ["Visual Studio","Year Started","headers" , "data" , "vsimg.png" , "functions"] ,
                                 ["PyCharm","Year Started","headers" , "data" , "pcimg.png" , "functions"] ,
                                 ["Gedot","Year Started","headers" , "data" , "gedotimg.png" , "functions"] ,
                                 ["Blender","Year Started","headers" , "data" , "blenderimg.png" , "functions"] ,
                                 ["Spine","Year Started","headers" , "data" , "spineimg.png" , "functions"] ,
                                 ["DreamWeaver","Year Started","headers" , "data" , "dwimg.png" , "functions"] ,
                                 ["Premier Pro","Year Started","headers" , "data" , "ppimg.png" , "functions"] ,
                                 ["PhotoShop","Year Started","headers" , "data" , "psimg.png" , "functions"] ,
                                 ["Android Studio","Year Started","headers" , "data" , "asimg.png" , "functions"] ,
                                 ["Delphi","Year Started","headers" , "data" , "delphiimg.png" , "functions"] ,
                                 ["PostMan","Year Started","headers" , "data" , "postman.png" , "functions"] ,
                                 ["GitHub","Year Started","headers" , "data" , "githubimg.png" , "functions"] ,
                                 ["IDE","Year Started","headers" , "data" , "StalkImage.png" , "functions"]
                            ]];

            this.Frameworks = [["Frameworks"],["Framework","Language","headers" , "data" , "images" , "functions"],
                                [["Xamarin","Year in frame","headers" , "data" , "netimg.png" , "functions"],
                                ["Bootstrap ","Year Started","headers" , "data" , "bsimg.png" , "functions"],
                                ["React","Year Started","headers" , "data" , "reactimg.png" , "functions"],
                                ["Angular","Year Started","headers" , "data" , "angularimg.png" , "functions"],
                                ["ASP.Net mvc","Year Started","headers" , "data" , "netimg.png" , "functions"],
                                ["Asp.net Web Forms","Year Started","headers" , "data" , "netimg.png" , "functions"],
                                ["ASP.core","Year Started","headers" , "data" , "netimg.png" , "functions"],
                                ["Unity","Year Started","headers" , "data" , "unityimg.png" , "functions"],
                                ["Gedot","Year Started","headers" , "data" , "gedotimg.png" , "functions"],
                                 ["Entity Framework Core","Year Started","headers" , "data" , "netimg.png" , "functions"]
                                ]];

                                this.Projects = [["Projects"],["Project Name","Project Framework" , "ProjectLanguage", "Project Technology","headers" , "data" , "images" , "functions"],
                                [
                                    ["Durban University of Technology","2019 ","2019 ","2019 ","headers" , "data" , "StalkImage.png" , "functions"]
                                ]];

            this.Institutes = [["Institutes"],["Institute","Attended","headers" , "data" , "images" , "functions"],
                                [["Woodview Primary","2004","headers" , "data" , "StalkImage.png" , "functions"] ,
                                
                                ["Stanmore Secondary","2013","headers" , "data" , "StalkImage.png" , "functions"] , 
                                
                                ["Durban University of Technology","2019 ","headers" , "data" , "StalkImage.png" , "functions"]
                            ]];

            this.Intrests = [["Intrests"],["Category"] ,[["test"],["test"]]];

            this.Experiences = [["Experiences"],["Language","Year Started","headers" , "data" , "images" , "functions"],
                                [ ["Experiences","Year Started","headers" , "data" , "StalkImage.png" , "functions"] ,
                                 ["IDE","Year Started","headers" , "data" , "StalkImage.png" , "functions"] ,
                                 ["IDE","Experiences","headers" , "data" , "StalkImage.png" , "functions"] ,
                                 ["IDE","Year Started","headers" , "Experiences" , "StalkImage.png" , "functions"] ,
                                 ["IDE","Year Started","headers" , "data" , "StalkImage.png" , "functions"] ,
                                
                                
                                 ["IDE","Year Started","headers" , "data" , "StalkImage.png" , "functions"]
                                ]];
                                
            this.PersonalInfo = [ ["PersonalInfo"],["Property","Details","headers" , "data" , "images" , "functions"],
                                [["DOB"," 07/02/2000 ","headers" , "data" , "imaStalkImage.pngges" , "functions"] , 
                                ["Age(2021)","21","headers" , "data" , "StalkImage.png" , "functions"] ,
                                 
                                ["ID","0002075679080","headers" , "data" , "StalkImage.png" , "functions"] ,
                                 
                                ["Home","032 505 3267","headers" , "data" , "StalkImage.png" , "functions"] ,
                                 
                                ["Cell","067 801 7809 ","headers" , "data" , "imaStalkImage.pngges" , "functions"] ,
                                 
                                ["Email","kovlyn.reddy@gmail.com","headers" , "data" , "StalkImage.png" , "functions"] ,
                                 
                                ["Resides",`33 Swallowhaven road
                                            Foresthaven
                                            4068
                                                                `,"headers" , "data" , "StalkImage.png" , "functions"] ,
                                 
                                ["First Names","Kovlyn Kyle ","headers" , "data" , "StalkImage.png" , "functions"] ,
                                ["LastName","Reddy","headers" , "data" , "imagStalkImage.pnges" , "functions"] ,
                                ["Health","Great","headers" , "data" , "StalkImage.png" , "functions"]
                            ]];
            
            this.namesoflists = ["Languages","Technologies","Frameworks","Projects","Institutes","Intrests","Experiences","PersonalInfo"];
            this.lists = [this.Languages , this.Technologies , this.Frameworks,this.Projects , this.Institutes  , this.Intrests , this.Experiences , this.PersonalInfo] ;
            
            this.listofhtmltablestrings = [];

            this.lists.forEach(element => {
        
                this.listofhtmltablestrings.push(CreateTableScaffled(element));
                
            });

        }
        TurnIntoHTML(functions,index)
         {
            let pagehtml ;
            let selectedlist = this.lists[index];

            console.log(selectedlist,"From ToHTML");
            selectedlist[0].forEach(element => {
                pagehtml = pagehtml + functions(element);
            });

            return pagehtml;
        }
    }

    function ChangePage (caller){

        let caption = caller ;

        if (!( typeof caller == 'string' )){
        caption = caller.text;
        }
        
        let page = document.getElementById("ContentDiv");
        
        let nav = document.getElementById("navId");
        page.style.paddingTop = nav.offsetHeight * 2;
        // console.log(caption);
        // console.log(filename);

        let db = new MockedDb();

        let tableselected = db.namesoflists.indexOf(caption);
        let pagehtmlstring = "";

        switch (caption) {

            case "Frameworks" : 

            // pagehtmlstring += GetAlert("Welcome","Frameworks");
            pagehtmlstring += db.TurnIntoHTML(FormatToMediaObject,tableselected);
            console.log("Case Frameworks");
            break;

            case "Languages" : 

            // pagehtmlstring = db.listofhtmltablestrings[tableselected];
            pagehtmlstring = db.TurnIntoHTML(FormatToMediaObject,tableselected);
            pagehtmlstring += GetToast("Hey","Languages");
            console.log("Case Languages");
            break;

            case "Technologies" : 

            pagehtmlstring = db.TurnIntoHTML(FormatToMediaObject,tableselected);
            console.log("Case Technologies");
            break;

            case "Institutes" : 

            pagehtmlstring = db.listofhtmltablestrings[tableselected];
            console.log("Case Institutes");
            break;

            case "Intrests" : 

            pagehtmlstring = db.TurnIntoHTML(FormatToCard,tableselected);
            console.log("Case Intrests");
            break;

            case "PersonalInfo" : 
            pagehtmlstring = db.listofhtmltablestrings[tableselected];

            // pagehtmlstring = db.TurnIntoHTML(FormatToMediaObject,tableselected);
            console.log("Case PersonalInfo");
            break;

            case "Experiences" : 

            pagehtmlstring = db.TurnIntoHTML(FormatToCard,tableselected);
            console.log("Case Experiences");
            break;

            case "Projects" : 

            pagehtmlstring = db.TurnIntoHTML(FormatToMediaObject,tableselected);
            console.log("Case Projects");
            break;
            
            case "Demos" : 

            pagehtmlstring = db.TurnIntoHTML(FormatToMediaObject,tableselected);
            console.log("Case Projects");
            break;

            default :
            
            pagehtmlstring = db.listofhtmltablestrings[tableselected];
            console.log("Case Default");
            
            break;

        }


    // pagehtmlstring = ;
         page.innerHTML = pagehtmlstring; 
         pagehtmlstring = page.innerHTML;

          console.log(pagehtmlstring);

    // pagehtmlstring = pagehtmlstring.substring(pagehtmlstring.indexOf(`<body id="${caption}">`),pagehtmlstring.indexOf("</body>"))
    // page.innerHTML = pagehtmlstring ; 
    
    SetNavPadding();

    return caption;
    }

    function SetNavPadding(){
        let page = document.getElementById("NavHeightId");
        
        let nav = document.getElementById("NavContainer");

        console.log(page);

        nav.offsetHeight = page.offsetHeight;
       

    }

  

  


    

