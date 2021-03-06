// globals
import * as THREE from 'resources/three.module.js';
import {OrbitControls} from 'resources/OrbitControl.js';
import {DragControls} from 'resources/DragControl.js';
var scene, camera, renderer, cubeObj, orbitControls;
var objects = [];
var waganZAxisVal = 0;

init();
animate();


function init(){

	scene = new THREE.Scene();
	
	
	var axesHelper = new THREE.AxesHelper( 1000 );
	scene.add( axesHelper );
	
	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 450;
	camera.position.y = 50;
	camera.position.x = -550;
	 
	 var cubeGeo = new THREE.BoxGeometry( 200, 150, 100 );
	
	 var cubeGeoMaterial = new THREE.MeshPhongMaterial({color: 0x808080} );
	
	 cubeObj = new THREE.Mesh(cubeGeo, cubeGeoMaterial);
	 
	  cubeObj.position.x = -70;
	  cubeObj.position.y = -50;
	  cubeObj.position.z = 0;
	  cubeObj.rotation.x = 0.5; 
	  scene.add(cubeObj);
	 
	 var cubeGeo2 = new THREE.BoxGeometry( 200, 150, 100 );
	
	 var cubeGeoMaterial2 = new THREE.MeshPhongMaterial({color: 0x808080} );
	
	 cubeObj2 = new THREE.Mesh(cubeGeo2, cubeGeoMaterial2);
	 
	  cubeObj2.position.x = 160;
	  cubeObj2.position.y = -50;
	  cubeObj2.position.z = -5;
	  
	  cubeObj2.rotation.x = 0.5;

	 scene.add(cubeObj2);
	 
	 var cubeGeo3 = new THREE.BoxGeometry( 200, 150, 100 );
	
	 var cubeGeoMaterial3 = new THREE.MeshPhongMaterial({color: 0x808080} );
	
	 cubeObj3 = new THREE.Mesh(cubeGeo3, cubeGeoMaterial3);
	 
	  cubeObj3.position.x = 440;
	  cubeObj3.position.y = -50;
	  cubeObj3.position.z = 0;
	  
	  cubeObj3.rotation.x = 0.5;
 
	 scene.add(cubeObj3);
	 
	 renderer = new THREE.WebGLRenderer({
		antialias : true
	});
	
	var spotLight = new THREE.SpotLight( 0xffffff );
	spotLight.position.set( 100, 1000, 100 );

	spotLight.castShadow = true;

	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;

	spotLight.shadow.camera.near = 500;
	spotLight.shadow.camera.far = 4000;
	spotLight.shadow.camera.fov = 30;

	//scene.add( spotLight );
	
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
	scene.add( directionalLight );

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0xcce0ff);
	document.body.appendChild(renderer.domElement);
	
	orbitControls = new OrbitControls(camera, renderer.domElement);
  
	  var dragControls = new DragControls(objects, camera,
			 renderer.domElement);
	  dragControls.addEventListener('dragstart', function() {
		 orbitControls.enabled = true;
	  });
	  dragControls.addEventListener('dragend', function() {
		 orbitControls.enabled = true;
	  });
	 
	 document.addEventListener( 'keydown', onKeyDown, false );

	}
	
	function onKeyDown( event ) {

	const step = 5; // world units

	switch ( event.keyCode ) {

		case 37:
			camera.position.x -= step;
			break;

		case 39:
			camera.position.x += step;
		   	break;

	}

}

	function animate(){
		orbitControls.update();
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}
