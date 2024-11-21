class  VehicleManagement{
    model;
    licenseplate;
    mileage;

    constructor( model , licenseplate , mileage){
        this. model = model;
        this. licenseplate = licenseplate;
        this. mileage = mileage;
    }
    drive(){
        console.log(this.model, "when you put in key in bike, and click the start button it will start");
    }
    mileage11(){
        console.log( this. mileage , "The pulsar given the mileage of 1leter  70 kph it is a new model of pulsar.");
    }
    mileage11(newname){
        console.log(newname);
    }

    

}

var bike1 = new VehicleManagement ("pulsar" , "5856" , "60kph" );
bike1.drive();
bike1.mileage11("70kph");
console.log(bike1);

