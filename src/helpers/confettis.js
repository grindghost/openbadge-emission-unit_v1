/* Script to display confettis  */
var count = 100;
var defaults = {
origin: { x:0.1, y: 0.4 }
};

function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
}

const launchConfettis = () => {
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
        });
        fire(0.2, {
        spread: 60,
        });
        fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
        });
        fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
        });
        fire(0.1, {
        spread: 120,
        startVelocity: 45,
        });
}

/* fire(0.25, {
spread: 26,
startVelocity: 55,
});
fire(0.2, {
spread: 60,
});
fire(0.35, {
spread: 100,
decay: 0.91,
scalar: 0.8
});
fire(0.1, {
spread: 120,
startVelocity: 25,
decay: 0.92,
scalar: 1.2
});
fire(0.1, {
spread: 120,
startVelocity: 45,
}); */

export { launchConfettis }