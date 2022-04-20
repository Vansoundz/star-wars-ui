type Planet = {
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
}

type Person = {
    name: string
    height: string
    mass: string
    gender: string
    homeworld: Planet
  }

  export type {
    Person,
    Planet
  }
  