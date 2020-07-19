/**
 * @module App
 */
class App {
	/**
	 * Étape 1 : La balise
	 */
	static etape1() {
		//	--- HTML Résultant ---
		//	<div class="body" id="app">
		//		<h1>Ceci est un H1</h1>
		//		<h2>Ceci est un H2</h2>
		//		<h3>Ceci est un H3</h3>
		//		<p>Ceci est un P. Lorem ipsum dolor sit amet.</p>
		//	</div>
		
		var app, titre, soustitre, intertitre, paragraphe;
		app = document.getElementById("app");
		
	}
	/**
	 * Étape 2 : Les attributs
	 */
	static etape2() {
		//	--- HTML Résultant ---
		//	<div class="body" id="app">
		//		<h1 class="geant encadre" style="text-align:center;">
		//			Voici le favicon
		//		</h1>
		//		<img src="favicon.ico" alt="Le favicon">
		//		<a href="https://facebook.com" target="_blank">
		//			Aller ailleurs
		//		</a>
		//	</div>

		var app, titre, image, lien;
		app = document.getElementById("app");
		
	}
	/**
	 * Étape 3 : Classes et styles
	 * À partir du résultat de l'étape 1
	 */
	static etape3() {
		//	--- HTML Résultant ---
		//	<div class="body" id="app">
		//		<h1 class="geant encadre" style="text-align: center;">Ceci est tout un H1</h1>
		//		<h2 style="color: blue; border-bottom: 1px solid;">Ceci est un H2 stylisé</h2>
		//		<h3 class="important">Ceci est un H3 important</h3>
		//		<p style="font-family: cursive; width: 4in; margin: 0px auto;">Ceci est un P complet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit culpa rerum saepe! Perspiciatis, ratione. Natus, necessitatibus laudantium molestias fugit similique, assumenda sequi est, aliquid eligendi illo a voluptate eos?</p>
		//	</div>

		var app, titre, soustitre, intertitre, paragraphe;
		app = document.getElementById("app");
		
	}
	/**
	 * Étape 4 : Imbrication
	 */
	static etape4() {
		//	--- HTML Résultant ---
		//	<div class="body" id="app">
		//		<form style="border: 2px dashed red; padding: 1em;">
		//			<select size="7">
		//				<option value="dim">Dimanche</option>
		//				<option value="lun">Lundi</option>
		//				<option value="mar">Mardi</option>
		//				<option value="mer">Mercredi</option>
		//				<option value="jeu">Jeudi</option>
		//				<option value="ven">Vendredi</option>
		//				<option value="sam">Samedi</option>
		//			</select>
		//		</form>
		//	</div>

		var app, form, select, option;
		app = document.getElementById("app");

	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.etape1();
			// this.etape2();
			// this.etape3();
			// this.etape4();
		});
	}
}
App.init();
