const count = 200,
  defaults = {
    origin: { y: 0.7 },
  }

export function fire(particleRatio: number, opts: unknown) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    }),
  )
}

const defaultsConfig = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
}

export function shoot() {
  confetti({
    ...defaultsConfig,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star'],
  })

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle'],
  })
}
