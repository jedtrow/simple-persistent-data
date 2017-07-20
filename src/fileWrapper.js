/**
 *  fileWrapper is a tool that simlifies the cordova 
 *  file writing and reading API. 
 *  
 */
 
 window.fileWrapper = {
    /*
    *   Write a file
    */
    write: function(name, data, success, fail){
        
        var gotFileSystem = function (fileSystem) {
            fileSystem.root.getFile(name, { create: true, exclusive: false }, gotFileEntry, fail);
        };

        var gotFileEntry = function (fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        };

        var gotFileWriter = function (writer) {
            writer.onwrite = success;
            writer.onerror = fail;
            writer.write(data);
        };

        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, data.length || 0, gotFileSystem, fail);
        
    },
    
    /*
    *   read a file
    */
    read: function(name, success, fail){
        
        var gotFileSystem = function (fileSystem) {
            fileSystem.root.getFile(name, { create: false, exclusive: false }, gotFileEntry, fail);
        };

        var gotFileEntry = function (fileEntry) {
            fileEntry.file(gotFile, fail);
        };

        var gotFile = function (file) {
            reader = new FileReader();
            reader.onloadend = function () {
                success(this.result);
            };

            reader.readAsText(file);
        }

        window.requestFileSystem(window.LocalFileSystem.PERSISTENT, 0, gotFileSystem, fail);
        
    }
}
