import Hapi from 'hapi';

//creating a new server instancce and attaching a new connection to it
const server = new Hapi.Server( {
    port: 3000,
    host: 'localhost'
});

//handler is the function which is executed when the specific path is hit
//So, in this case, the anonymous function will be executed if the user 
//visits the path /hello

server.route ({

    method: 'GET',
    path: '/hello',
    handler: ( request, reply ) => {
        reply('Hello, world!');
    }
});

server.start(err => {

    if (err) {

        console.error( 'Error was handled!' );
        console.error( err );
    }

    console.log( `Server started at ${ server.info.uri }`);
});

/*The server.info property contains an object which contains the 
following information:

created - the time the server instance was created;
started - the time the server instance was started;
host - the hostname of the machine;
port - the port to which the server the server is listening ;
protocol - the protocol on which the server is operating;
id - a unique ID of the server instance;
uri - the complete URI of the current server instance;
address - the address the server is bound to
*/