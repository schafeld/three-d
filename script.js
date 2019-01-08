// Avoid linting error, make THREE available globally, not just block-scoped, using 'var' 
var THREE = THREE || {};

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 15;

var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

var zoom = function () {
  if (camera.position.z > 2) {
    requestAnimationFrame( zoom );
  }

  camera.position.z -= 0.1;

  renderer.render( scene, camera );
};

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

animate();
zoom();
