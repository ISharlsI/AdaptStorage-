-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2021 at 02:14 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prueba_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `archivos`
--

CREATE TABLE `archivos` (
  `id` int(100) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `tamanio` decimal(65,0) NOT NULL,
  `ruta` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `contenido` longtext NOT NULL,
  `nivel_seguridad` int(100) NOT NULL,
  `namePropietario` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `archivos`
--

INSERT INTO `archivos` (`id`, `titulo`, `tipo`, `tamanio`, `ruta`, `fecha`, `contenido`, `nivel_seguridad`, `namePropietario`) VALUES
(7, 'prueba_login', 'sql', '7705', 'uploads/prueba_login.sql', '2021-11-07', 'Prueba', 5, '1'),
(8, 'estadisticas', 'pdf', '368196', 'uploads/estadisticas.pdf', '2021-11-07', 'Prueba', 1, 'Carlos Alberto Conchas'),
(9, 'prueba_login', 'sql', '7705', 'uploads/prueba_login.sql', '2021-11-07', 'Prueba', 1, 'Juan'),
(10, 'estadisticas', 'pdf', '368196', 'uploads/estadisticas.pdf', '2021-11-07', 'Prueba', 1, 'Juan'),
(11, 'estadisticas', 'pdf', '368196', 'uploads/estadisticas.pdf', '2021-11-07', 'Prueba', 1, 'Juan'),
(12, '3er_avan_1_jgup-(bases-de-datos)', 'pdf', '1386831', 'uploads/3er_avan_1_jgup-(bases-de-datos).pdf', '2021-11-07', 'Prueba', 5, '1'),
(13, 'horario', 'xlsx', '11249', 'uploads/horario.xlsx', '2021-11-07', 'Prueba', 2, 'Juan Guillermo'),
(14, 'algoritmos-de-ordenamiento-(juan-uribe---19310177)', 'pdf', '268995', 'uploads/algoritmos-de-ordenamiento-(juan-uribe---19310177).pdf', '2021-11-08', 'Prueba', 1, 'Daniel Cervantes Hernandez Palma José Porfirio Hermenejildo de la Santisima Trinidad'),
(15, '3ro_avan_2_jgup-(des.-web)', 'pdf', '11884156', 'uploads/3ro_avan_2_jgup-(des.-web).pdf', '2021-11-08', 'Prueba', 1, 'Daniel Cervantes Hernandez Palma José Porfirio Hermenejildo de la Santisima Trinidad'),
(16, '2do_prac_2.7_jgup-(des.-web)', 'pdf', '1991290', 'uploads/2do_prac_2.7_jgup-(des.-web).pdf', '2021-11-08', 'Prueba', 4, 'Daniel Cervantes Hernandez Palma José Porfirio Hermenejildo de la Santisima Trinidad'),
(17, 'arrempujala,-arremangala-si,-arrempujala,-arremangala-no,-arrempujala,-arremangala-si,-arrempujala,-', 'txt', '0', 'uploads/arrempujala,-arremangala-si,-arrempujala,-arremangala-no,-arrempujala,-arremangala-si,-arrem', '2021-11-08', 'Prueba', 4, 'Daniel Cervantes Hernandez Palma José Porfirio Hermenejildo de la Santisima Trinidad'),
(18, 'juan', 'txt', '18', 'uploads/juan.txt', '2021-11-14', 'si te quiero mucho', 4, '1'),
(19, 'juan', 'txt', '18', 'uploads/juan.txt', '2021-11-14', 'si te quiero mucho', 4, '1'),
(20, 'juan', 'txt', '18', 'uploads/juan.txt', '2021-11-14', 'si te quiero mucho', 4, '1'),
(21, 'juan', 'txt', '18', 'uploads/juan.txt', '2021-11-14', 'si te quiero mucho', 4, '1'),
(22, 'asdasdadasd', 'txt', '9', 'uploads/asdasdadasd.txt', '2021-11-14', 'caramelos', 4, '1'),
(23, '1er_act_1.3_jgup', 'pdf', '420667', 'uploads/1er_act_1.3_jgup.pdf', '2021-11-14', 'A	lgoritmos de Ordenamiento	 	\nJuan Uribe	 	 	- 	 	19310177	 	\n \n 	\nProf. 	José Luis García Cerpas	 	\nInteligencia Artificial	  	 	 	 	27	/0	8	/21\n\nJuan Guillermo Uribe Parra	 	Grupo 4M	 	\n 	\n2 	\n \n- 	Contenido	 	\n- 	Introducción	 ................................	................................	. 3	 	\n- 	Algoritmos de Ordenamiento	 ................................	.......	 3	 	\n 	Notación asintótica	 ................................	..........................	 3 	\n 	Métodos Directos (Básicos)	 ................................	..............	 4 	\n 	Métodos Indirectos (Avanzados)	 ................................	......	 6 	\n- 	Conclusión	 ................................	................................	..	 10	 	\n- 	Bibliografía	 ................................	................................	..	 10\n\nJuan Guillermo Uribe Parra	 	Grupo 4M	 	\n 	\n3 	\n \n- 	Introducción	 	\nEn programación, los algoritmos de 	ordenamiento son herramientas básicas y fundamentales 	\npara optimizar la clasificación, guardado y búsqueda de registros en una lista, arreglo o base \nde datos.	 	\nExisten  distintos  métodos  de  ordenamiento,  cada  uno  con  su  nivel  de  complejidad, \nrendimiento y ca	racterísticas. Aunque un algoritmo de ordenamiento se mas veloz en papel, 	\nsiempre hay que considerar el caso en el que se implementará para reconocer sus ventajas y \ndesventajas.	 	\nA continuación, se expondrán distintos métodos de ordenamiento y sus caracterí	sticas.	 	\n- 	Algoritmos de Ordenamiento	 	\nLos  algoritmos  de  ordenamiento  son  herramientas  encargadas  de  ordenar  series  de  datos \nsegún un criterio. Por ejemplo, de tener una gran lista de números en desorden, un algoritmo \nde ordenamiento es capaz de 	ordenarlos de manera ascendente o descendente. Esto es muy 	\nimportante, pues el orden nos permite opti	mizar el almacenamiento y búsqueda de datos.	 	\nAunque  todos  los  algoritmos  de  ordenamiento  tienen  el  mismo  objetivo,  existen  distintas \nformas  de  llegar  al  mi	smo  resultado.  Cada  algoritmo  posee  sus  puntos  fuertes  y  puntos 	\ndébiles  según  el  contexto  en  el  que  se  utilice.  Es  por  esto  que  siempre  es  importante \nconsiderar la situación para asegurar el mejor rendimiento de un algoritmo de ordenamiento.	 	\nNotación asint	ótica	 	\nLa  notación  asintótica  es  una  herramienta  muy  útil  para  conocer  qué  tan  eficiente  es  un \nalgoritmo según el tamaño de su entrada o input. La notación asintótica revisa las iteraciones \nque requiere un algoritmo para lograr un resultado. 	 	\nPor ejemplo, p	ara una función…	 	\nFunction	 (n) {	 	\n  	return ( n + n );	 	\n} \n \nPodemos decir que  su 	Big	-O es de 	o(1)	.  Esto  significa  que  el  algoritmo  solo  ocurre una  vez, 	\nsin importar si 	n = 1	 o si 	n = 1000	. 	\n \nAhora, si tuviéramos un algoritmo que suma todos los números hasta 	n, como el siguiente:	 	\n \nfunction sumaDeEnteros(n) {	 	\n  	var sum = 0;	 	\n  	for (var i = 1; i <= n; i++) {	 	\n    	sum += i;	 	\n  	} 	\n  	return sum;	 	\n}\n\nJuan Guillermo Uribe Parra	 	Grupo 4M	 	\n 	\n4 	\n 	\nDiríamos  que  su 	Big	-O es  de 	o(n)	,  pues  la  cantidad  de  veces  que  la  función  itera  es 	\nexactamente el valor de la variable 	n. 	\nEn el siguiente gráfico se puede observar claramente la eficiencia de cada algoritmo según su \nBig	-O, mostrando la relación entre el tamaño de la variable 	n y la can	tidad de iteraciones.	 	\nMétodos Directos (Básicos)	 	\n• 	Burbuja	 	\nEl  ordenamiento  burbuja  funciona  intercambiando  elementos  adyacentes  en  la  lista \nsi  están  en  desorden.  Esto  es,  si  estamos  ordenando  una  lista  numérica  de  manera \nascendente, si el algoritmo lee 	que, uno junto a otro, está primero el 22 y luego el 13, 	\nentonces  intercambiará sus  posiciones, dejando primero  el 13  y luego  el 22.  Esto  se \nhace repetidamente hasta tener una lista ordenada.	 	\n \nMejor caso: 	El algoritmo se encuentra ordenado.	 	\n \nPeor caso:	 La 	lista se encuentra ordenada a la inversa al objetivo. Por ejemplo, si se 	\nintenta  ordenar  de  manera  ascendente  una  lista  previamente  ordenada  de  manera \ndescendente.	 	\n \nAlgoritmo:	 	\n \nvoid ordenarArray(tArray miArray){	 	\n 	float temporal;	 	\n 	 	\n 	for (int i = 0;i < 	DIM; i++){	 	\n 	 	for (int j = 0; j< DIM	-1; j++){	 	\n 	 	 	if (miArray[j] < miArray[j+1]){ 	 	\n 	 	 	temporal = miArray[j]; 	 	\n 	 	 	miArray[j] = miArray[j+1]; 	 	\n 	 	 	miArray[j+1] = temporal;	 	\n 	 	 	} 	\n 	 	} 	\n 	} 	\n}\n\nJuan Guillermo Uribe Parra	 	Grupo 4M	 	\n 	\n5 	\n 	\n 	\n• 	Selección	 	\nFunciona  recorriendo  el  arreglo  para  buscar  el  número  mas 	pequeño,  luego  lo 	\nintercambia  con  el  que  está  en  la  primera  posición.  Luego  repite  el  proceso  para  el \nsegundo  mas  pequeño  y  lo  intercambia  por  la  segunda  posición.  Así  sucesivamente \nhasta tener un arreglo ordenado.	 	\n \nMejor caso: 	A menor número de elementos,	 mejor rendimiento.	 	\n \nPeor caso:	 A mayor número de elementos, peor rendimiento.	 	\n \nAlgoritmo:	 	\n \nvoid selection_sort(int *vector, int taille)	 	\n{ \n     	int actual, mas_pequeno, j, temp;	 	\n  \n     	for (actual = 0; actual < taille 	- 1; actual++)	 	\n     	{ 	\n         	mas_pequeno = actual;	 	\n         	for (j = actual 1; j < taille; j++)	 	\n              	if (vector[j] < vector[mas_pequeno])	 	\n                  	mas_pequeno = j;	 	\n          	temp = vector[actual];	 	\n          	vector[actual] = vector[mas_pequeno];	 	\n          	vector[mas_pequeno] = temp;	 	\n     	} 	\n} \n 	\n• 	Inserción	 	\nEl algoritmo de inserción funciona tomando un elemento de la lista e insertándolo en \nla  posición  correcta  de  la  parte  ordenada.  El  algoritmo  no 	hace  nada  con  el  primer 	\nvalor, luego toma el segundo, lo compara con el primero y lo posiciona. Luego toma \nel tercero, lo compara con el primero y con el segundo y lo posiciona. Luego toma el \ncuarto, lo compara con los primeros tres y lo posiciona. Y así s	ucesivamente.	 	\n \nMejor caso: 	El arreglo se encuentra ordenado.	 	\n \nPeor caso:	 El arreglo se encuentra ordenado a la inversa.	 	\n \nAlgoritmo:\n\nJuan Guillermo Uribe Parra	 	Grupo 4M	 	\n 	\n6 	\n 	\nvoid Insertion_sort(int* t)	 	\n{ \n    	int i, j;	 	\n    	int actual;	 	\n  \n    	for (i = 1; i < 20; i++) {	 	\n        	actual = t[i];	 	\n        	for (j = i; j > 0 && t[j 	- 1] > actual; j	--	) {	 	\n            	t[j] = t[j 	- 1];	 	\n        	} 	\n        	t[j] = actual;	 	\n    	} 	\n} 	\nMétodos Indirectos (Avanzados)	 	\n• 	Shell	 	\nEl  método,  también  llamado 	ordenación  por  disminución  de  incrementos	,  funciona 	\ncomparando  elementos  distantes	 y  ordenándolos  de  manera  correcta.  La  distancia 	\nentre las comparaciones disminuye conforme se ejecuta el algoritmo. En la última fase \nse comparan 	elementos adyacentes.	 	\n \nMejor caso: 	El algoritmo está ordenado.	 	\n \nPeor caso:	 El caso peor ocurre cuando los elementos están ordenados a la inversa en 	\ncada comparación por secciones, haciendo que el algoritmo llegue al máximo número \nde pasos.	 	\n \nAlgoritmo:	 	\nvoid tri_insertion(int* t, int gap, int debut)	 	\n{ \n    	int j,en_cours;	 	\n    	for (int i = gap + debut; i < 20; i+=gap) {	 	\n        	en_cours = t[i];	 	\n        	for (j = i; j >= gap && t[j 	- gap] > en_cours; j	-=gap) {	 	\n            	t[j] = t[j 	- gap];	 	\n       	 } 	\n        	t[j] = en_cours;	 	\n    	} 	\n} \n  \nvoid tri_shell(int* t) {	 	\n    	int intervalles[5]={6,4,3,2,1};	 	\n    	for (int ngap=0;ngap<5;ngap++) {	 	\n        	for (int i=0;i<intervalles[ngap];i++)	 	\n            	tri_insertion(t,intervalles[ngap],i);	 	\n    	} 	\n}\n\nJuan Guillermo Uribe Parra	 	Grupo 4M	 	\n 	\n7 	\n 	\n• 	Ordenación rápida	 	\nElige un elemento	 de 	la lista, lo llamaremos pivote. 	Acomoda to	dos los elemento	s de 	\nla lista 	de modo que 	a un l	ado estén todos los elementos menores que él y del otro 	\nlado  todos  los  elementos  mayores  que  él.  De  este  modo,  el  pivo	te  está  justo  en  el 	\nlugar correcto. Este proceso se repite con a	mbas s	ubli	stas, los menores que el pivo	te 	\ny los mayores 	que el pivote. Y así sucesivamente 	hasta 	tener un arregl	o ordenado.	 	\n \nMejor caso: 	Su eficien	cia depen	de 	de la posición del pivote elegido. 	 	\n \nPeor  caso:	 Una 	lista	 ordenada  correctamente,  pero  desfasad	a por  un  valor.  Por 	\nejemplo: 2,	 3, 4, 5, 6, 7, 8, 9, 1.	 	\n \nAlgoritmo:	 	\n \nvoid quick_sort (int *vector, int tamano) {	 	\n    	int pared, actual, pivote, tmp;	 	\n    	if (tamano < 2) return;	 	\n    	// el elemento de pivote es la más a la derecha	 	\n    	pivote = vector[tamano 	- 1];	 	\n    	pared  = actual = 0;	 	\n    	while (actual<tamano) {	 	\n        	if (vector[actual] <= pivote) {	 	\n            	if (pared != actual) {	 	\n                	tmp=vector[actual];	 	\n       	         	vector[actual]=vector[pared];	 	\n                	vector[pared]=tmp;              	 	\n            	} 	\n            	pared ++;	 	\n        	} 	\n        	actual ++;	 	\n    	} 	\n    	quick_sort(vector, pared 	- 1);	 	\n    	quick_sort(vector + pared 	- 1, tamano 	- pared + 1);	 	\n} \n 	\n• 	Ordenación por mezcla	 	\nEl  ordenamiento  por  mezcla  di	vide 	la  lista 	por  la  mitad	. Si 	alguna  de  las  listas 	\nresultante	s está vacía o tiene so	lo un elemento, entonces 	se 	comparan los 	valores	. De 	\ntener  mas  de  un  elemento,  el  algoritmo 	vuelve	 a  llamar  una  ordenaci	ón  por  mezcla 	\npara continuar dividiendo la lista. Terminando de com	parar los valores, el algoritmo 	\ndespués mez	cla las listas ordenadas	.  	\n \nMejor caso: 	Ordenado correctamente.	 	\n \nPeor caso:	 Ordenado a la inversa.\n\nJuan Guillermo Uribe Parra	 	Grupo 4M	 	\n 	\n8 	\n 	\n \nAlgoritmo:	 	\n \n#include <stdio.h>	 	\n#include <	stdlib.h>	 	\n  \nvoid 	mezcla	 (int *a, int n, int m) {	 	\n    	int i, j, k;	 	\n    	int *x = malloc(n * sizeof (int));	 	\n    	for (i = 0, j = m, k = 0; k < n; k++) {	 	\n        	x[k] = j == n      ? a[i++]	 	\n             	: i == m      ? a[j++]	 	\n             	: a[j] < a[i] ? a[j++]	 	\n             	:               a[i++];	 	\n    	} 	\n    	for (i = 0; i < n; i++) {	 	\n        	a[i] = x[i];	 	\n    	} 	\n    	free(x);	 	\n} \n  \nvoid 	ordenamiento_mezcla	 (int *list	a, int ta	maño	) {	 	\n    	if (	tamaño	 < 2) retu	rn;	 	\n    	int m	edio	 = 	ta	maño	 / 2;	 	\n    	ordenamiento_mezcla	 (list	a, 	medio	);	 	\n    	ordenamiento_mezcla	 (list	a medio	, 	ta	maño	 - medio	);	 	\n    	mezcla	(list	a, 	ta	maño	, 	medio	);	 	\n} \n 	\n• 	Ra	dixsort	 	\nRadixsort  compa	ra  y  ordena  pr	imero  los  v	alores  según  el  dígito  en  las  unidades. 	\nTerminado, repite el proceso 	con el siguiente dígito	 (las 	decenas)	, pero 	manteniendo	 	\nel  o	rden  previamente  estableci	do  para  los  elementos  con 	el  mismo	 dígito.  Y  así 	\nsucesivamente ha	sta terminar con un arreglo ordenado	. 	\n \nMejor caso: 	A m	enor 	número de elementos	, mejor rendimiento	. 	\n \nPeor caso:	 A mayor número de elementos	, pe	or rendimiento.	 	\n \nAlgoritmo:	 	\n \nvoid radixSort(int *arr, int n, int max) {	 	\n   	int i, j, m, p = 1, index, temp, count = 0;	 	\n   	list<int> pocket	[10];      //radix of decimal number is 10	 	\n   	for(i = 0; i< max; i++) {	 	\n      	m = pow(10, i+1);	 	\n      	p = pow(10, i);\n\nJuan Guillermo Uribe Parra	 	Grupo 4M	 	\n 	\n9 	\n 	\n      	for(j = 0; j<n; j++) {	 	\n         	temp = arr[j]%m;	 	\n         	index = temp/p;      //find index for pocket array	 	\n         	pocket[index].	push_back(arr[j]);	 	\n      	} 	\n      	count = 0;	 	\n      	for(j = 0; j<10; j++) {	 	\n         	while(!pocket[j].empty()) {	 	\n            	arr[count] = *(pocket[j].begin());	 	\n            	pocket[j].erase(pocket[j].begin());	 	\n            	count++;	 	\n         	} 	\n      	} 	\n   	} 	\n}\n\nJuan Guillermo Uribe Parra	 	Grupo 4M	 	\n 	\n10	 	\n \n- 	Conclusión	 	\nLos 	algoritmos de  ordenamiento,  adem	ás de  ser herramientas  muy útiles 	para almacenar  y 	\nbuscar 	registros de manera eficiente, son 	muy buenos 	visualizado	res de la importancia de la 	\noptimización de los algoritmos.	 	\nMuchas  veces, 	plantear  un	 algoritmo 	capaz  de  cu	mplir  con  una  tarea  o  llevar  a  cabo  una 	\nfunción no es l	o mas 	difícil	, si no encontrar la mejor y mas óptima soluci	ón a dicha situación. 	\nA  estas  alturas  de  nuestras  carre	ras  es 	fácil	 asumir  que  unos  cuantos  milisegundos  mas  de 	\ntrabajo para el 	CPU no son l	a gran cosa, pero en empresas con operaciones mas grandes que 	\nreciben cientos de request	s por segundo, cada milisegundo optimizado cuenta y puede	 hacer 	\nmucho la di	ferencia. 	 	\nLa  optimización  es 	algo  qu	e  siempre  hay  que  tener  en  cuenta,  pe	ro  sin  perder  de  vista  la	 	\nfacilidad  de  compre	nsión  del  algoritmo  (	uno  de  los  motivos  por  lo  que  es  importante 	\ncomentar el códig	o) pues, 	al optimizar un 	algoritmo	, puede ser que otra per	sona que no esté 	\ntan famili	arizada con el proceso	 pueda perder el hilo del funcionamiento del programa.	 	\n 	\n- 	Bibliografía	 	\n1. Algoritmos de ordenamiento. (2016a). Recuperado 4 de septiembre de 2021, de \nhttp://lwh.free.fr/pages/algo/tri/tri_e	s.htm	 	\n2. Algoritmos de ordenamiento. (2016b). Recuperado 6 de septiembre de 2021, de \nhttp://lwh.free.fr/pages/algo/tri/tri_es.htm	 	\n3. Montero, L. (2018, 4 julio). Algoritmos y notación asintótica 	- Laboratoria Devs. 	\nRecuperado 4 de septiembre de 2021, de 	https://me	dium.com/laboratoria	-	\ndevelopers/algoritmos	-y-notaci%C3%B3n	-asint%C3%B3tica	-	\n817a666ca444#:%7E:text=En%20computaci%C3%B3n%2C%20la%20notaci%C3%B3n%2\n0asint%C3%B3tica,de%20la%20entrada%20(input).&text=Por%20esto%2C%20decimos%\n20que%20son,)%20es%20O(1)%20	. 	\n4. Ordenam	iento por selección. (2016). Recuperado 6 de septiembre de 2021, de 	\nhttp://lwh.free.fr/pages/algo/tri/tri_selection_es.html	 	\n5. Streams, D. (2016, 22 noviembre). Ordenar array utilizando el método de la burbuja en \nC++ 	- DAVID STREAMS. Recuperado 6 de septiembre	 de 2021, de 	\nhttps://www.davidstreams.com/2016/01/16/ordenar	-array	-utilizando	-el-metodo	-de	-la-	\nburbuja	-en	-c/', 4, '1'),
(24, '1er_act_1.1_jgup', 'docx', '54932', 'uploads/1er_act_1.1_jgup.docx', '2021-11-14', '\r\nHistoria y antecedentes de la IA-405442491706\r\nJuan Uribe-19310177\r\n35306058700400\r\nProf. José Luis García Cerpas\r\nInteligencia Artificial13/08/21\r\nIntroducciónLa inteligencia artificial hoy en día está en su punto más alto de desarrollo.\r\nCon investigación haciendo progreso activo en mejorar los métodos actuales de aprendizaje y entrenamiento de algoritmos, productos que utilizamos en el día a día que contienen complejos algoritmos para comprender comandos de voz, identificar texto en imágenes y hasta reconocer rostros y otras características humanas.\r\nLa IA es una herramienta mas útil que nunca, pero esta idea de computadoras capaces de pensar como humanos se ha planteado desde hace más de 100 años.\r\nA continuación, exploraremos una breve línea del tiempo del desarrollo de la inteligencia artificial, junto con algunos logros históricos que marcaron el camino.\r\nhttps://www.timetoast.com/timelines/2603360ConclusiónPara llegar al punto actual de la inteligencia artificial como la conocemos, hubieron cientos de científicos e investigadores dedicados a plantear las preguntas correctas y a hacer el progreso, no solo en el planteamiento de la IA, sino en la capacidad de procesamiento de las computadoras, las interfaces de interacción con las mismas, la complejidad de las herramientas de programación y las capacidades de las computadoras.\r\nHoy en día, gozamos de vivir en la época dorada de el desarrollo tecnológico. Es fundamental conocer y sobre todo apreciar el camino que recorrieron todos antes de nosotros para poder disfrutar de las herramientas que poseemos hoy en día.\r\nBibliografíaKevin Warwick, Coventry University. (2020, 2 abril). The Future of Artificial Intelligence and Cybernetics. Recuperado 14 de agosto de 2021, de https://www.technologyreview.com/2016/11/10/156141/the-future-of-artificial-intelligence-and-cybernetics/\r\nLufkin, B. (2017). Why the biggest challenge facing AI is an ethical one. Recuperado 14 de agosto de 2021, de https://www.bbc.com/future/article/20170307-the-ethical-challenge-facing-artificial-intelligence\r\nS. (2020, 23 abril). The History of Artificial Intelligence. Recuperado 14 de agosto de 2021, de https://sitn.hms.harvard.edu/flash/2017/history-artificial-intelligence/\r\nTate, K. (2014, 26 agosto). History of A.I.: Artificial Intelligence (Infographic). Recuperado 14 de agosto de 2021, de https://www.livescience.com/47544-history-of-a-i-artificial-intelligence-infographic.html\r\n', 4, '1'),
(25, '28523299464_557f756bd2_o', 'png', '177003', 'uploads/28523299464_557f756bd2_o.png', '2021-11-14', '', 4, '1');

-- --------------------------------------------------------

--
-- Table structure for table `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `idTipoUsuario` int(128) NOT NULL,
  `etiquetaTipoUsuario` varchar(128) NOT NULL,
  `descripcionTipoUsuario` varchar(256) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`idTipoUsuario`, `etiquetaTipoUsuario`, `descripcionTipoUsuario`) VALUES
(1, 'Nivel 1', 'Nivel de seguridad 1'),
(2, 'Nivel 2', 'Nivel de seguridad 2'),
(3, 'Nivel 3', 'Nivel de seguridad 3'),
(4, 'Nivel 4', 'Nivel de seguridad 4'),
(5, 'Nivel 5', 'Administrador ');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL COMMENT 'Identificador único para el usuario',
  `usuario` varchar(30) NOT NULL COMMENT 'correo electrónico',
  `clave` varchar(130) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `idTipoUsuario` int(128) NOT NULL,
  `estado` enum('habilitado','inhabilitado') NOT NULL DEFAULT 'habilitado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `clave`, `nombre`, `idTipoUsuario`, `estado`) VALUES
(7, '1', '$2y$10$5AZ.ldmyO7IYGhYlkTCrYO0TA35wWL/zLSdGR9hs34IwJU40ZiwNy', 'Juan Guillermo Uribe Parra', 4, 'habilitado'),
(27, 'jesu@jesu', '$2y$10$81QRGv1NlEYURXy.PwOheO8ILw47zIpwnP5nbibGxpWH7OIWg.yLu', 'Carlos ', 4, 'habilitado');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`idTipoUsuario`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `archivos`
--
ALTER TABLE `archivos`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `idTipoUsuario` int(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador único para el usuario', AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
