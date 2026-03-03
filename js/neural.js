const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.getElementById('canvas-container').appendChild(renderer.domElement);

const network = new THREE.Group();
scene.add(network);

const nodeCount = 60;
const nodes = [];

// High-quality sphere geometry for neurons
const sphereGeom = new THREE.SphereGeometry(0.05, 16, 16);
const sphereMat = new THREE.MeshBasicMaterial({ color: 0x00f2ff });

for (let i = 0; i < nodeCount; i++) {
    const node = new THREE.Mesh(sphereGeom, sphereMat);
    node.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
    network.add(node);
    nodes.push({
        mesh: node,
        velocity: new THREE.Vector3((Math.random() - 0.5) * 0.004, (Math.random() - 0.5) * 0.004, (Math.random() - 0.5) * 0.004)
    });
}

camera.position.z = 6;

function animate() {
    requestAnimationFrame(animate);
    nodes.forEach(n => {
        n.mesh.position.add(n.velocity);
        if (Math.abs(n.mesh.position.x) > 5) n.velocity.x *= -1;
        if (Math.abs(n.mesh.position.y) > 5) n.velocity.y *= -1;
    });
    network.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();