// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2{
    constructor(cuboidProperty2){
        this.length = cuboidProperty2.length;
        this.width = cuboidProperty2.width;
        this.height = cuboidProperty2.height;
    }
    volume() {
        return this.length * this.height * this.width
    }
    surfaceArea(){
        return 2*(this.length * this.width + this.length * this.height + this.width * this.height)
    }
}


const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2{
    constructor(cubeProperty) {
        super(cubeProperty);
    }
    cubeSurfaceArea() {
        return 6 * (this.length * this.length)
    }
};
const cuber = new CubeMaker({
    length: 5,
    width: 5,
    height: 5,
});
console.log(cuber.cubeSurfaceArea());