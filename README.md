# simple-persistent-data
A simple way to handing persistent data in a Cordova app.

Basically simplePersistentData allows you to have one JSON object that gets saved to persistent on device storage. This is incredibly usefull for simple apps that only need to save small amounts of data such as settings.

# Usage
Simply include the file simplePersistentData.min.js (includes fileWrapper.js).

Then after onDeviceReady you would:
```js
var data = {};

load_data(
    function(){
        // data successfully loaded
        // do whatever
    },
    function(){
        // an error occured
    }
);
```

Then whenever you want to save data to 'disk'
```js
save_data();
```

To mimic behaviour in the browser simply enter the following in your console.

```js
localStorage.DEVMODE = true;
```