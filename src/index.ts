import * as THREE from 'three';

import './player';
import './board';
import { render } from 'sass';

// init

const camera = new THREE.PerspectiveCamera(
	70,
	window.innerWidth / window.innerHeight,
	0.01,
	10
);
camera.position.z = 5;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();

const block = new THREE.BoxGeometry(3, 3, 0.2);
const planet = new THREE.Mesh(block, material);
scene.add(planet);

const player = new THREE.Mesh(geometry, material);
player.position.z = 1;
scene.add(player);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation

function animation(time: number) {
	// console.log(time);
	player.rotation.x = time / 2000;
	// mesh.rotation.y = time / 1000;
	// mesh.position.x = time / 1000;
	// keyDown(e);
	renderer.render(scene, camera);
}

const keyDown = (e: { code: string }) => {
	if (
		e.code === 'ArrowUp' ||
		e.code === 'ArrowDown' ||
		e.code === 'ArrowLeft' ||
		e.code === 'ArrowRight'
	) {
		// movement(mesh, e.code);
		// logKey(e.code);
		let arrowCode = e.code;
		let y: number = player.position.y,
			x: number = player.position.x;
		if (arrowCode === 'ArrowUp') {
			y = y + 0.05;
		}
		if (arrowCode === 'ArrowDown') {
			y = y - 0.05;
		}
		if (arrowCode === 'ArrowLeft') {
			x = x - 0.05;
		}
		if (arrowCode === 'ArrowRight') {
			x = x + 0.05;
		}
		player.position.y = y;
		player.position.x = x;
		camera.position.x = x - 0.01;
		camera.position.y = y - 0.01;
		// console.log(mesh.position.y, mesh.position.x);
		renderer.render(scene, camera);
	}

	function logKey(key: string): void {
		console.log(key);
	}
	return;
};

// // const newPlayer = document.createElement('div');
// // newPlayer.classList.add('player');

// // document.querySelector('.gameboard').appendChild(newPlayer);

// const player = document.querySelector('.player');

// //TODO #2:
// function movement(item: any, arrowCode: string): void {
// 	let element = item;
// 	let x, y;
// 	let bod = document.querySelector('body');
// 	let bodSize = bod.getBoundingClientRect();
// 	if (element && x == undefined && y == undefined) {
// 		x = element.position.x;
// 		y = element.position.y;
// 	}

// 	// console.log( arrowCode)
// 	if (arrowCode === undefined || item === undefined) return;
// 	if (arrowCode === 'ArrowUp') {
// 		y = y - 16;
// 	}
// 	if (arrowCode === 'ArrowDown') {
// 		y = y + 16;
// 	}
// 	if (arrowCode === 'ArrowLeft') {
// 		x = x - 16;
// 	}
// 	if (arrowCode === 'ArrowRight') {
// 		x = x + 16;
// 	}
// 	if (x < 8 || y < 8) {
// 		return;
// 	}
// 	if (arrowCode === 'ArrowRight' || arrowCode === 'ArrowLeft') {
// 		if (x < bodSize.width) {
// 			item.position.x = x;
// 			renderer.render(scene, camera);
// 		}
// 	}

// 	if (arrowCode === 'ArrowDown' || arrowCode === 'ArrowUp') {
// 		if (y < bodSize.height) {
// 			item.position.y = y;
// 			renderer.render(scene, camera);
// 		}
// 	}

// 	console.log(x, y);
// }
// // function makeSquares() {
// // 	console.log(window.innerWidth, window.innerHeight);
// // 	let bod = document.querySelector('body');
// // 	let bodSize = bod.getBoundingClientRect();
// // 	let boundaries = 16 * 16;
// // 	for (let i = 0; i < boundaries; i++) {
// // 		// console.log(i)
// // 		let bod = document.querySelector('.gameboard');
// // 		let square = document.createElement('div');
// // 		square.classList.add('square');
// // 		if (!bod) return;
// // 		bod.appendChild(square);
// // 	}
// // }

document.addEventListener('keydown', keyDown, false);
// window.addEventListener('load', () => {
// 	// makeSquares();
// });
