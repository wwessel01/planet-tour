export default class Planet {
    position: number;
    name: string;
    image: string;
    velocity: number;
    distance: number;
    description: string;

    constructor(position: number, name: string, image: string, velocity: number, distance: number, description: string) {
        this.position = position;
        this.name = name;
        this.image = image;
        this.velocity = velocity;
        this.distance = distance;
        this.description = description;
    }
}