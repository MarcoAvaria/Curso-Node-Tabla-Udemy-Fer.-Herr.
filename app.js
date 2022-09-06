const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

// option('l')
// listar
// boolean
// default: false

console.clear();
//console.log( process.argv );
console.log( argv );
//console.log('base: yargs', argv.base );
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );




// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');


//const base = 5
// let salida = '';

// for(let i = 0; i <= 10; i++){
//     salida += `${base} x ${i} = ${ i*base }\n`;
// }

/*fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${ base }.txt creado`);
})*/

// fs.writeFileSync( `tabla-${ base }.txt`, salida);

// console.log( `tabla-${ base }.txt creada` );
