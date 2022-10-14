class Vehicle {
  public drive():void{
    console.log(`chuge chuge`);
  }
  protected honk():void{
    console.log(`beep`);
  }
  color:string='red';
  constructor(color:string){
    this.color=color;
  }
  
}

class Car extends Vehicle{
  constructor(color:string){
    super('blue');
  }
  private driveE():void{
    console.log(`vroom`);
  }

  startDrivingProcess():void{
    this.driveE();
    this.honk();
  }
}

const vehicle = new Vehicle('green');
vehicle.drive();

const car = new Car('orange');
car.startDrivingProcess();