

// <-- ======================================== LES OBJES ======================================== -->

//PatientS...

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

//EtablissementS...

var Etablissement1=
{
    Etablissement:1234,
    Nom:"centre hospitalier xx",
    Adresse:"1234 boul. Sud, Montreal, Qc",
    Code Postal:"H2M 3Y6", 
    Telephone:"514-323-1234"
};
var Etablissement2=
{
    Etablissement:2346,
    Nom:"Hopital Nord",
    Adresse:"7562 rue Souvenir, Noreville, Qc",
    Code Postal:"J4R 2Z5", 
    Telephone:"450-222-3333"
};
var Etablissement3=
{
    Etablissement:3980,
    Nom:"Hopital centre",
    Adresse:"4637, boul. de l'Eglise, Montreal, Qc",
    Code Postal:"H3J 4K8", 
    Telephone:"514-123-5678"
};
var Etablissement4=
{
    Etablissement:4177,
    Nom:"Centre Hospitalier Est",
    Adresse:"12 rue Bernard, repentigny, Qc",
    Code Postal:"JBR 3K5", 
    Telephone:"450-589-2345"
};
var Etablissement5=
{
    Etablissement:7306,
    Nom:"Hopital du salut",
    Adresse:"11 rue de la Redemtion, St-Basilie, Qc",
    Code Postal:"JBH 2D4", 
    Telephone:"450-345-6789"
};
var Etablissement6=
{
    Etablissement:8895,
    Nom:"Dernier recours",
    Adresse:"999 rue St-Pierre, Longueuil, Qc",
    Code Postal:"J7B 3J5", 
    Telephone:"450-555-6741"
};


//HospitalisationS...

var Hospitalisation1=
{
    Code etablissement:1234, No dossier patient: 5 , Date admission:"14-aout-00", Date sortie:"14-aout-01",Specialite:"medicine" 
};
var Hospitalisation2=
{
    Code etablissement:1234,No dossier patient: 10,Date admission:"12-dec.92",Date sortie:"12-dec.92",Specialite:"chirurgie" 
};
var Hospitalisation3=
{
 Code etablissement:2346, No dossier patient: 8 , Date admission:"03-mars-03", Date sortie:"05-mars-03",  Specialite:"medicine" 
};
var Hospitalisation4=
{
Code etablissement:2346, No dossier patient: 1 , Date admission:"11-nov.-97", Date sortie:"12-nov.-97",  Specialite:"orthopedie"
};
var Hospitalisation5=
{
Code etablissement:2346, No dossier patient: 3 , Date admission:"12-avr.-95", Date sortie:"30-avr.-95",  Specialite:"medicine"
};
var Hospitalisation6=
{
Code etablissement:3980, No dossier patient: 5 , Date admission:"14-fev.-00", Date sortie:"14-mmars-00", Specialite:"medicine"
};
var Hospitalisation7=
{
Code etablissement:3980, No dossier patient: 5 , Date admission:"01-jan.-01", Date sortie:"01-fev.-01",  Specialite:"medicine" 
};
var Hospitalisation8=
{
Code etablissement:3980, No dossier patient: 9 , Date admission:"03-ave.-95", Date sortie:"08-avr.-95",  Specialite:"orthopedie" 
};
var Hospitalisation9=
{
Code etablissement:3980, No dossier patient: 7 , Date admission:"27-nov.-99", Date sortie:"04-dec.-99",  Specialite:"chirurgie" 
};
var Hospitalisation10=
{
Code etablissement:3980, No dossier patient: 10, Date admission:"28-avr.-97", Date sortie:"05-mai.-97",  Specialite:"chirurgie"
};
var Hospitalisation11=
{
Code etablissement:4177, No dossier patient: 3 , Date admission:"03-aout-01", Date sortie:"05-dec.-01",  Specialite:"medicine"
};
var Hospitalisation12=
{
Code etablissement:4177, No dossier patient: 3 , Date admission:"02-fev.-02", Date sortie:"23-fev.-02",  Specialite:"orthopedie" 
};
var Hospitalisation13=
{
Code etablissement:7306, No dossier patient: 2 , Date admission:"23-mai-98", Date sortie:"27-mai-98",    Specialite:"orthopedie" 
};


// <-- ======================================== LES TABLEAUX ======================================== -->

var tbl_Patients = [Patient1,Patient2,Patient3,Patient4,Patient5,Patient6,Patient7,Patient8,Patient9,Patient10];
var tbl_Etablissements =[Etablissement1,Etablissement2,Etablissement3,Etablissement4,Etablissement5,Etablissement6];
var tbl_Hospitalisations =[];


function showListPatients(){     
	
    var size = tbl_Patients.length;
    
   var table="<table border="+1+">";
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
    
    //document.write(table);
    document.getElementById('divTable').innerHTML=table;
}




