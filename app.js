 /*  EXERCICES JAVASCRIPT-BASE 1:
 console.log("salut");
 var nom = "Dupont";
 var prénom = "David";
 var ville = "Auch";

 var result = nom + prenom + ville;
 alert(result); 


console.log("salut");
    var nom = "Dupont";
    var prénom = "David";
    var ville = "Auch";

    var saisie = prompt();
    alert("Boujour\n" + "nom: " + saisie); 



var NOM  = prompt('Entrez le nom :');
var PRENOM = prompt('Entrez le prenom :');
var VILLE = prompt('Entrez la ville :');
    //var result = NOM + PRENOM + VILLE; (Resultat qui fonctionne aussi)
    alert("Nom: " + (NOM) + "\n" + "Prénom: "  + (PRENOM) + "\n" + "Ville: " + (VILLE));
    alert(result); 

 var nb1 = (4);
 var nb2 = (4);
 var result = nb1 * nb2 ;
alert(result); 
 

function myFunction1()
{
    var num1 = prompt ("Entrez votre Premier nombre à virgule ");
    var num2 = prompt ("Entrez votre Deuxième ");
    var result = parsint (num1);
    var ss =     = num2;
    alert()
}       // INCOMPLET

function myFunction2()
{

}
\n
var result = prompt ("donne ta pointure...") * 2 + 5 * 50 - prompt ("donne...") + 1766;
  alert(result);

//EXO 1  LES TABLEAUX:
var mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 
                     'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        alert(mois [2]); // EXO 2
        alert(mois [5]); // EXO 3
        alert(mois [10]); // EXO 4
//EXO 5
mois[7] = 'Août';
       alert(mois[7]);
       alert(mois);

//EXO 7
var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
alert(array);

//EXO 8
array.push('Courgette');
alert(array);

//EXO 9
array[4].push('Citron');
alert(array[4]);
alert(array);

//EXO 10
array.splice(1, 1);
alert(array);

//EXO 11
array.splice(2, 0, 'Poire');
alert(array);

//EXO 1   LES FONCTIONS:
console.log("hello");
function myFunction() {
  return true;
}
alert(myFunction());

//EXO 2-3
function myFunction1() 
{
  var T = "chaine";
  var nb = 34;
  var Cal = T + nb;
  return Cal
}
alert(myFunction1());

//EXO 4
function myFunction2() {
var nb1 = prompt("saisie le premier nombre");
var nb2 = prompt("saisie le deuxieme nombre");

if ( nb1 > nb2 )
{
 alert("Le premier nombre est plus grand"); 
}
else if ( nb1 < nb2 ) 
{
 alert("Le premier nombre est plus petit");
}
else
{
 alert("Les deux nombres sont identiques");
}

}
myFunction2();

//EXO 5
function myFunction3() {
  var texte = "chaine de caractères";
  var nombre = 12;
  var Calcul = texte + nombre;
return Calcul
}
alert(myFunction3());

//EXO 6
function myFunction4() {
  var nom = "Zarrik ";
  var prénom = "Houssine ";
  var âge = 24;
  var msg1 = "Bonjour, ";
  var msg2 = "tu as ";
  var msg3 = " ans.";
  var opération = msg1 + nom + prénom + msg2 + âge + msg3;
return opération
}
alert(myFunction4());

//EXO 7
function myFunction5() {
var age = prompt( "Saisie ton âge." );
var genre = prompt( "Saisie ton sexe." );
var genre1 = "femme";
var genre2 = "homme";

if ( age < 18 && genre == genre2 )
{
 alert( "Vous êtes un Homme et vous êtes mineur" );
}
else if ( age >= 18 && genre == genre2 ) 
{
 alert( "Vous êtes un Homme et vous êtes majeur" );
}
else if ( age < 18 && genre == genre1 )
{
  alert( "Vous êtes une Femme et vous êtes mineur" );
}
else if ( age >= 18 && genre == genre1 ) 
{
  alert("Vous êtes une Femme et vous êtes majeur" );
}
else
{
 alert("Quitter"); 
}

}
myFunction5();

//EXO 8
document.getElementById("demo1").addEventListener("click", function myFunction6()
{
    var nb1 = 12;
    var nb2 = 34;
    var nb3 = 48;
    var opération = nb1 + nb2 + nb3;
     alert(opération);
  return opération;
}  
   );



//EXO 1   LES BOUCLES:
var i = 0;

for ( i = 0; i <= 10 ; i++ )
{
  alert(i);
}

//EXO 2
var i = 0;
var x = 5;

for ( i = 0; i <= 20 ; i++ )
{
  var resultat = i * x;
  alert(resultat);
}


//EXO 3
var a = 100;
var b = Math.floor(1 + (100 -1+1)*Math.random());
console.log(b);
for (var a = 100; a >= 10 ; a--)
{
  var res = a * b;
  document.write(res + "||");
}
*/


//EXO 4
var nb = 1;
for ( nb = 1; nb += 10; nb/2 ) 
{
  alert(nb);  
}

































