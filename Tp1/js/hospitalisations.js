var Patient1  = {Dossier: 1,   Nom:"Leger",     Prenom:"Emile", 	Naissence: "26 mars 1917",     Sexe:"M"};
var Patient2  = {Dossier: 2,   Nom:"Bernard",   Prenom:"Marie", 	Naissence: "3 fevrier 1946",   Sexe:"F"};
var Patient3  = {Dossier: 3,   Nom:"Chartrand", Prenom:"Guy", 	    Naissence: "5 avril 1959",     Sexe:"M"};
var Patient4  =	{Dossier: 4,   Nom:"Cote",    	Prenom:"Andre", 	Naissence: "2 septembre 1978", Sexe:"M"};
var Patient5  =	{Dossier: 5,   Nom:"Lavoie",    Prenom:"Carole", 	Naissence: "4 novembre 1973",  Sexe:"F"};
var Patient6  =	{Dossier: 6,   Nom:"Martin",    Prenom:"Diane", 	Naissence: "2 decembre 1965",  Sexe:"F"};
var Patient7  =	{Dossier: 7,   Nom:"Lacroix",   Prenom:"Pauline",   Naissence: "25 janvier 1956",  Sexe:"F"};
var Patient8  =	{Dossier: 8,   Nom:"St-Jean",   Prenom:"Arthur", 	Naissence: "7 octobre 1912",   Sexe:"M"};
var Patient9  =	{Dossier: 9,   Nom:"Bechard",   Prenom:"Marc", 	    Naissence: "8 aout 1980",      Sexe:"M"};
var Patient10 =	{Dossier: 10,  Nom:"Chartrand", Prenom:"Mario",     Naissence: "23 juillet 1947",  Sexe:"M"};

var tbl_Patients = [Patient1,Patient2,Patient3,Patient4,Patient5,Patient6,Patient7,Patient8,Patient9,Patient10];


function initialize(){ 
    
     //var size = tbl_Patients.length;// vaux 10
	  document.getElementById('divZonaAffiche').style.visibility='visible';


//    
//        //Creer la table 
//    var x = document.createElement("TABLE");
//    x.setAttribute("id", "myTable");
//    document.body.appendChild(x);
//    
//    //Creer une ligne 
//    var y = document.createElement("TR");
//    y.setAttribute("id", "myTr");
//    
//    //Add igne to table
//    document.getElementById("myTable").appendChild(y);
//
//    var z = document.createElement("TD");
//    var t = document.createTextNode("cell");
//    z.appendChild(t);
//    document.getElementById("myTr").appendChild(z);
    
    
	  //document.getElementById("demo").innerHTML = tbl_Patients[0].Nom;
	  
	  
//	for(i=0; i < size; i++ ){		
//		var patien = tbl_Patients[i];		
//		for(var property in patien)		{
//			console.log(patien.Dossier+" "+patien.Nom+" "+patien.Prenom+" "+patien.Naissence+" "+patien.Sexe);
//		}
//	}

}


