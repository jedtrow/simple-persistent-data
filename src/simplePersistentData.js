/**
 *  simplePersistentData is a tool that uses fileWrapper to 
 *  write and read files to persistent on device storage
 *  in cordova.
 *  
 *  Saves data in "app_data.txt" data should be a JSON
 *  object named "data" and must be in the global scope.
 *  
 *  
 *  
 *  USAGE
 *  
 *  save_data()
 *      saves the object "data" to either a persistent 
 *      on device storage location or if in DEVMODE to a
 *      localStorage property.
 *  
 *  load_data()
 *      loads previously saved data into the object "data" 
 *      from either a persistent on device storage 
 *      location or if in DEVMODE to a localStorage 
 *      property.
 */

function save_data(){   
    if(localStorage.getItem("DEVMODE")){
        localStorage.setItem("app_data", JSON.stringify(data));
    }else{
        fileWrapper.write(
            "app_data.txt", 
            JSON.stringify(data), 
            function(){ console.log("Wrote Data") }, 
            function(){ console.log("Failed to Write Data"); }
        );
    }
}

function load_data(success_callback, error_callback){
    if(localStorage.getItem("DEVMODE")){
        data = localStorage.getItem("app_data");
        success_callback();
    }else{
        fileWrapper.read(
            "app_data.txt", 
            function(d){ 
                data = JSON.parse(d);
                success_callback();
            }, 
            function(){ 
                data = "";
                error_callback();
            }
        );
    }
}