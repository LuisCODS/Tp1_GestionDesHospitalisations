
// <-- ============================== PATIENTS  -->

//OBJETS...
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

//TABLEAU vaux 10
var tbl_Patients = [Patient1,
					Patient2,
					Patient3,
					Patient4,
					Patient5,
					Patient6,
					Patient7,
					Patient8,
					Patient9,
					Patient10];

// <-- =============================== ETABLISSEMENTS  -->

//OBJETS...
var Etablissement1={Etablissement:1234,Nom:"Centre hospitalier Sud",Adresse:"1234 boul. Sud, Montreal, Qc",CodePostal:"H2M 3Y6",Telephone:"514-323-1234"};
var Etablissement2={Etablissement:2346,Nom:"Hopital Nord",Adresse:"7562 rue Souvenir, Noreville, Qc",CodePostal:"J4R 2Z5",Telephone:"450-222-3333"};
var Etablissement3={Etablissement:3980,Nom:"Hopital centre",Adresse:"4637, boul. de l'Eglise, Montreal, Qc",CodePostal:"H3J 4K8",Telephone:"514-123-5678"};
var Etablissement4={Etablissement:4177,Nom:"Centre hospitalier est",Adresse:"12 rue Bernard, repentigny, Qc",CodePostal:"JBR 3K5",Telephone:"450-589-2345"};
var Etablissement5={Etablissement:7306,Nom:"Hopital du salut",Adresse:"11 rue de la Redemtion, St-Basilie, Qc",CodePostal:"JBH 2D4",Telephone:"450-345-6789"};
var Etablissement6={Etablissement:8895,Nom:"Dernier recours",Adresse:"999 rue St-Pierre, Longueuil, Qc",CodePostal:"J7B 3J5",Telephone:"450-555-6741"};

//TABLEAU
var tbl_Etablissements =[Etablissement1,
						Etablissement2,
						Etablissement3,
						Etablissement4,
						Etablissement5,
						Etablissement6];

// <-- =============================== HOSPITALISATIONS  -->

//OBJETS...
var Hospitalisation1={CodeEtablissement:1234,NoDossierPatient:5,DateAdmission:"14-aout-00",DateSortie:"14-aout-01",Specialite:"medicine"};
var Hospitalisation2={CodeEtablissement:1234,NoDossierPatient:10,DateAdmission:"12-dec.92",DateSortie:"12-dec.92",Specialite:"chirurgie"};
var Hospitalisation3={CodeEtablissement:2346,NoDossierPatient:8,DateAdmission:"03-mars-03",DateSortie:"05-mars-03",Specialite:"medicine"};
var Hospitalisation4={CodeEtablissement:2346,NoDossierPatient:1,DateAdmission:"11-nov.-97",DateSortie:"12-nov.-97",Specialite:"orthopedie"};
var Hospitalisation5={CodeEtablissement:2346,NoDossierPatient:3,DateAdmission:"12-avr.-95",DateSortie:"30-avr.-95",Specialite:"medicine"};
var Hospitalisation6={CodeEtablissement:3980,NoDossierPatient:5,DateAdmission:"14-fev.-00",DateSortie:"14-mars-00",Specialite:"medicine"};
var Hospitalisation7={CodeEtablissement:3980,NoDossierPatient:5,DateAdmission:"01-jan.-01",DateSortie:"01-fev.-01",Specialite:"medicine"};
var Hospitalisation8={CodeEtablissement:3980,NoDossierPatient:9,DateAdmission:"03-ave.-95",DateSortie:"08-avr.-95",Specialite:"orthopedie"};
var Hospitalisation9={CodeEtablissement:3980,NoDossierPatient:7,DateAdmission:"27-nov.-99",DateSortie:"04-dec.-99",Specialite:"chirurgie"};
var Hospitalisation10={CodeEtablissement:3980,NoDossierPatient:10,DateAdmission:"28-avr.-97",DateSortie:"05-mai.-97",Specialite:"chirurgie"};
var Hospitalisation11={CodeEtablissement:4177,NoDossierPatient:3,DateAdmission:"03-aout-01",DateSortie:"05-dec.-01",Specialite:"medicine"};
var Hospitalisation12={CodeEtablissement:4177,NoDossierPatient:3,DateAdmission:"02-fev.-02",DateSortie:"23-fev.-02",Specialite:"orthopedie"};
var Hospitalisation13={CodeEtablissement:7306,NoDossierPatient:2,DateAdmission:"23-mai-98",DateSortie:"27-mai-98",Specialite:"orthopedie"};

//TABLEAU
var tbl_Hospitalisations =[	Hospitalisation1,
							Hospitalisation2,
							Hospitalisation3,
							Hospitalisation4,
							Hospitalisation5,
							Hospitalisation6,
							Hospitalisation7,
							Hospitalisation8,
							Hospitalisation9,
							Hospitalisation10,
							Hospitalisation11,
							Hospitalisation12,
							Hospitalisation13];

							
							
							
							
// <-- =============================== (FUNCTIONS) =============================== -->
 function  hiddenDiv(){
	document.getElementById("divColAffiche").style.visibility = "hidden";
	document.getElementById("divColAfficheLeft").style.visibility = "hidden";
 }

/*  Affichera dans la «Zone d’affichage» la liste des patients. 
	La liste sera affichée dans un tableau HTML dont la 1ère ligne contiendra les attributs de la table en question.
*/
function showPatients(){   
	hiddenDiv();
    var size = tbl_Patients.length;
    
	var table="<table border="+1+"; class="+"table"+">";
    //FIRST COLONNES ADN LIGNE....
       table+="<tr>"+
                "<td>"+"Dossier"  +"</td>"+
                "<td>"+"Nom"      +"</td>"+
                "<td>"+"Prenom"   +"</td>"+
                "<td>"+"Naissence"+"</td>"+
                "<td>"+"Sexe"     +"</td>"+
               "</tr>";
    
	for(i=0; i < size; i++)	
	{
      table+=  "<tr>"+
                 "<td>"+tbl_Patients[i].Dossier+"</td>"+
                 "<td>"+tbl_Patients[i].Nom+"</td>"+
                 "<td>"+tbl_Patients[i].Prenom+"</td>"+
                 "<td>"+tbl_Patients[i].Naissence+"</td>"+
                 "<td>"+tbl_Patients[i].Sexe+"</td>"+
                "</tr>";                   
	}
    table+= "</table>";    
	document.getElementById("divColAffiche").style.visibility = "visible";
    document.getElementById('divColAffiche').innerHTML=table;
	
}

/*  Affichera dans la «Zone d’affichage» la liste des établissements. 
	La liste sera affichée dans un tableau HTML dont la 1ère ligne contiendra les attributs de la table en question.
*/
function showEtablissements(){     
    hiddenDiv();
    var size = tbl_Etablissements.length;
    
   var table="<table border="+1+">";
    //FIRST COLONNES ADN LIGNE....
       table+="<tr>"+
                "<td>"+"Etablissement"   +"</td>"+
                "<td>"+"Nom"             +"</td>"+
                "<td>"+"Adresse"         +"</td>"+
                "<td>"+"Code Postal"     +"</td>"+
                "<td>"+"Telephone"       +"</td>"+
               "</tr>";
    
	for(i=0; i < size; i++)	
	{
      table+=  "<tr>"+
                 "<td>"+tbl_Etablissements[i].Etablissement+"</td>"+
                 "<td>"+tbl_Etablissements[i].Nom+"</td>"+
                 "<td>"+tbl_Etablissements[i].Adresse+"</td>"+
                 "<td>"+tbl_Etablissements[i].CodePostal+"</td>"+
                 "<td>"+tbl_Etablissements[i].Telephone+"</td>"+
                "</tr>";                   
	}
    table+= "</table>";    
    document.getElementById("divColAffiche").style.visibility = "visible";
    document.getElementById('divColAffiche').innerHTML=table;
}

/*  Affichera dans la «Zone d’affichage» la liste des hospitalisations. 
	La liste sera affichée dans un tableau HTML dont la 1ère ligne contiendra les attributs de la table en question.
*/
function showHospitalisations(){     
    hiddenDiv();
	//document.getElementById('divColAffiche').innerHTML="";
    var size = tbl_Hospitalisations.length;
    
   var table="<table border="+1+">";
    //FIRST COLONNES ADN LIGNE....
       table+="<tr>"+
                "<td>"+"Code etablissement" +"</td>"+
                "<td>"+"No dossier patient" +"</td>"+
                "<td>"+"Date admission"     +"</td>"+
                "<td>"+"Date sortie"        +"</td>"+
                "<td>"+"Specialite"         +"</td>"+
               "</tr>";
    
	for(i=0; i < size; i++)	
	{
      table+=  "<tr>"+
                 "<td>"+tbl_Hospitalisations[i].CodeEtablissement+"</td>"+
                 "<td>"+tbl_Hospitalisations[i].NoDossierPatient+"</td>"+
                 "<td>"+tbl_Hospitalisations[i].DateAdmission+"</td>"+
                 "<td>"+tbl_Hospitalisations[i].DateSortie+"</td>"+
                 "<td>"+tbl_Hospitalisations[i].Specialite+"</td>"+
                "</tr>";                   
	}
    table+= "</table>";    
    document.getElementById("divColAffiche").style.visibility = "visible";
    document.getElementById('divColAffiche').innerHTML=table;
}

/* Affichera un champ SELECT avec le numéro de dossier de tous les patients (pris directement du tableau JSON).
   Lorsqu’on choisira le dossier du patient, un tableau HTML sera affiché selon le même 
   ...format que les listes précédentes.
*/
function showHospitalisationByPatient(){    

	document.getElementById("divColAffiche").style.visibility = "hidden";
	document.getElementById("divColAfficheLeft").style.visibility = "hidden";

    var selecDossier = document.getElementById('selectDossierPatient');//get select teg
		selecDossier.options.length=0;//on la vide. SelecDossier.options.length = 0
	
	//Create the first option to select: selecDossier.options.length= 1
    selecDossier.options[selecDossier.options.length]=new Option("Choisir dossier...");

    for (var prop in tbl_Patients) {
		//Select has, as options, patient's dossier number
        selecDossier.options[selecDossier.options.length] = new Option(tbl_Patients[prop].Dossier); 
    } 
    //now, selecDossier.options.length = 11
	//On disponibilise la div que contient le select
	document.getElementById("divColAfficheLeft").style.visibility = "visible";

}

function showTable(indexParm){	
	
	document.getElementById("divColAffiche").style.visibility = "hidden"; 
	 var patient;	 
	for(var i in  tbl_Patients)
	{	
		if(tbl_Patients[i].Dossier == indexParm)
		{
			patient = tbl_Patients[i];//On saisie le patient		
			for(var prop in patient)//Pour chaque proprieté de celui-ci...
			{
				var table="<table border="+1+" ; class="+"table"+">";
				//FIRST COLONNES ADN LIGNE....
				 table+="<tr>"+
							"<td>"+"Dossier"  +"</td>"+
							"<td>"+"Nom"      +"</td>"+
							"<td>"+"Prenom"   +"</td>"+
							"<td>"+"Naissence"+"</td>"+
							"<td>"+"Sexe"     +"</td>"+
						  "</tr>";
				
				  table+=  "<tr>"+
								 "<td>"+tbl_Patients[i].Dossier+"</td>"+
								 "<td>"+tbl_Patients[i].Nom+"</td>"+
								 "<td>"+tbl_Patients[i].Prenom+"</td>"+
								 "<td>"+tbl_Patients[i].Naissence+"</td>"+
								 "<td>"+tbl_Patients[i].Sexe+"</td>"+
							"</tr>";                   
				
				table+= "</table>";    
				document.getElementById("divColAffiche").style.visibility = "visible";
				document.getElementById('divColAffiche').innerHTML=table;
			}//end for	
		}//end if			
    }//end for		
}//methode end



 
  