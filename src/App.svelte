<script>
	import { Router, Route, Link } from "svelte-routing";
	import Home from './Home.svelte';
	import TopBar from './components/TopBar.svelte';
	
	// Ajoutez cette ligne pour importer la police Google Fonts
	import { onMount } from 'svelte';

	onMount(() => {
		const link = document.createElement('link');
		link.href = "https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	});

	export let url = "";

	function handleLinkedInConnect() {
		// Ajoutez ici la logique de connexion LinkedIn
		console.log("Connexion avec LinkedIn");
	}
</script>

<Router {url}>
	<main>
		<div class="animated-background">
			<div class="breathing-circle"></div>
			<div class="breathing-circle-large"></div>
			<div class="breathing-circle-larger"></div>
		</div>
		<TopBar />
		<Route path="/">
			<div class="content">
				<h1>LinkedIn <span class="highlight">sans effort</span> !</h1>
				<p class="subtitle">Ton agent LinkedIn s'informe, te prépare un post, tu valides et c'est tout.</p>
				<div class="video-container">
					<iframe
						src="https://www.youtube.com/embed/WctFUP4w0sc"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<div class="button-container">
					<button class="linkedin-button" on:click={handleLinkedInConnect}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
							<path fill="#ffffff" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
						</svg>
						Se connecter avec LinkedIn
					</button>
				</div>
				<div class="footer">
					<p>Intégration fluide avec LinkedIn</p>
					<p>Nous ne partagerons jamais vos informations personnelles</p>
				</div>
			</div>
		</Route>
		<Route path="/home" component={Home} />
	</main>
</Router>

<style>
	:global(body), :global(html) {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow-x: hidden;
		font-family: 'Inter', sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	main {
		width: 100vw;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.animated-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;
	}

	.breathing-circle, .breathing-circle-large, .breathing-circle-larger {
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 50%;
		transform: translate(-50%, -50%);
	}

	.breathing-circle {
		width: 1200px;
		height: 1200px;
		border: 5px solid rgba(45, 100, 188, 0.3);
		animation: breathe 5s ease-in-out infinite;
		box-shadow: 0 0 10px rgba(45, 100, 188, 0.5);
	}

	.breathing-circle-large {
		width: 1500px;
		height: 1500px;
		border: 5px solid rgba(45, 100, 188, 0.2);
		animation: breathe 5s ease-in-out infinite 1s;
		box-shadow: 0 0 15px rgba(45, 100, 188, 0.4);
	}

	.breathing-circle-larger {
		width: 1800px;
		height: 1800px;
		border: 5px solid rgba(45, 100, 188, 0.1);
		animation: breathe 5s ease-in-out infinite 2s;
		box-shadow: 0 0 20px rgba(45, 100, 188, 0.3);
	}

	@keyframes breathe {
		0%, 100% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 0.5;
		}
		50% {
			transform: translate(-50%, -50%) scale(1.1);
			opacity: 1;
		}
	}

	.content {
		max-width: 1200px;
		width: 90%;
		margin: 100px auto;
		text-align: center;
		color: white;
	}

	h1, .subtitle {
		color: #333; /* Changement de la couleur du texte pour un meilleur contraste */
	}

	h1 {
		font-size: 4rem;
		font-weight: 700;
		margin-bottom: 1rem;
		font-family: 'Caveat', cursive;
		color: #333;
		line-height: 1.2;
	}

	.highlight {
		position: relative;
		display: inline-block;
	}

	.highlight::after {
		content: '';
		position: absolute;
		left: -0.1em;
		right: -0.1em;
		bottom: 0.1em;
		height: 0.3em;
		background-color: rgba(45, 100, 188, 0.3); /* Changement de couleur ici */
		z-index: -1;
		transform: rotate(-2deg) skew(-2deg);
	}

	.subtitle {
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	.video-container {
		margin: 3rem auto;
		width: 70%;
		 aspect-ratio: 16 / 9;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.video-container iframe {
		width: 100%;
		height: 100%;
		border: none;
	}


	.footer {
		margin-top: 3rem;
		font-size: 1rem;
		color: #333; /* Changement de la couleur du texte en noir */
		opacity: 0.8;
	}

	@keyframes pulse {
		0% {
			text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
		}
		50% {
			text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
		}
		100% {
			text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
		}
	}

	.button-container {
		display: flex;
		justify-content: center;
		margin-top: 2rem;
	}

	.linkedin-button {
		background-color: #0a66c2;
		color: #ffffff;
		border: none;
		border-radius: 24px;
		padding: 12px 24px;
		font-size: 16px;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		transition: background-color 0.3s ease, transform 0.3s ease;
	}

	.linkedin-button:hover {
		background-color: #004182;
		transform: translateY(-2px);
	}

	svg {
		width: 24px;
		height: 24px;
	}

</style>