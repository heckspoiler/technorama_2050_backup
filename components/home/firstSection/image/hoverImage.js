import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const HoverImage = () => {
  const renderRef = useRef();

  useEffect(() => {
    let particles = [];
    let img;
    const PARTICLE_SIZE = 20;
    const RESOLUTION = 30;
    const MAX_FORCE = 10;
    const MIN_FORCE = 0;
    const EFFECT_DISTANCE = 50;

    const sketch = (p) => {
      p.preload = () => {
        img = p.loadImage('/images/home/hero_sketch.png');
      };

      p.setup = () => {
        let cnv = p.createCanvas(
          p.windowWidth / 1.2,
          p.windowHeight / 1.2,
          p.WEBGL
        );
        cnv.style('position', 'absolute');
        cnv.style('inset', 0);
        cnv.style('z-index', -1);
        cnv.style('top', '50%');
        cnv.style('left', '50%');
        cnv.style('transform', 'translate(-50%, -50%)');
        p.frameRate(15);
        spawnParticles();
      };

      p.draw = () => {
        p.clear();
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      };

      function spawnParticles() {
        for (let i = 0; i < p.width; i += RESOLUTION) {
          for (let j = 0; j < p.height; j += RESOLUTION) {
            let x = (i / p.width) * img.width;
            let y = (j / p.height) * img.height;
            const color = img.get(x, y);
            particles.push(
              new Particle(i + PARTICLE_SIZE, j + PARTICLE_SIZE, color)
            );
          }
        }
      }

      class Particle {
        constructor(x, y, color) {
          this.x = x;
          this.y = y;
          this.color = color;
          this.targetX = x;
          this.targetY = y;
        }

        update() {
          let mouseVector = p.createVector(p.mouseX, p.mouseY);
          let currentVector = p.createVector(this.x, this.y);
          let targetVector = p.createVector(this.targetX, this.targetY);

          let fromMouseToParticle = p5.Vector.sub(currentVector, mouseVector);
          let distanceToMouse = fromMouseToParticle.mag();

          let fromParticleToTarget = p5.Vector.sub(targetVector, currentVector);
          let distanceToTarget = fromParticleToTarget.mag();

          let totalForce = p.createVector(0, 0);

          if (distanceToMouse < EFFECT_DISTANCE) {
            let repulsionForce = p.map(
              distanceToMouse,
              0,
              EFFECT_DISTANCE,
              MAX_FORCE,
              MIN_FORCE
            );
            fromMouseToParticle.setMag(repulsionForce);
            totalForce.add(fromMouseToParticle);
          }

          if (distanceToMouse > 0) {
            let attractionForce = p.map(
              distanceToTarget,
              0,
              EFFECT_DISTANCE,
              MIN_FORCE,
              MAX_FORCE
            );
            fromParticleToTarget.setMag(attractionForce);
            totalForce.add(fromParticleToTarget);
          }

          this.x += totalForce.x;
          this.y += totalForce.y;
        }

        draw() {
          p.push();
          p.translate(this.x - p.width / 2, this.y - p.height / 2);
          p.fill(this.color);
          p.noStroke();
          p.ellipse(0, 0, PARTICLE_SIZE);
          p.pop();
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        particles = [];
        spawnParticles();
      };
    };

    const p5Instance = new p5(sketch, renderRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={renderRef}></div>;
};

export default HoverImage;
