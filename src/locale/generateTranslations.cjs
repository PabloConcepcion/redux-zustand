// listFiles.js
const fs = require('fs');
const path = require('path');

// Función para leer un directorio y listar los archivos
function listFiles(dirPath) {
  // Leer los archivos en el directorio
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Error al leer el directorio:', err);
      return;
    }

    // Filtrar solo los archivos .json
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    // Generar los imports y la estructura del objeto resources
    // importStatement => import localeEn from './en.json';
    const imports = jsonFiles.map(file => {
      const localeName = path.basename(file, '.json');
      const fileName = localeName.charAt(0).toUpperCase() + localeName.slice(1);
      const importStatement = `import locale${fileName} from './${localeName}.json';`;
      return importStatement;
    });


    const resourceEntries = jsonFiles.map(file => {
      const localeName = path.basename(file, '.json');
      const fileName = localeName.charAt(0).toUpperCase() + localeName.slice(1);
      return `
      ${localeName}: {
        translation: locale${fileName}
      }`;
    });
    const resources = resourceEntries.join(',\n');
    // Generar el contenido del archivo .ts
    const tsContent = `${imports.join('\n')}
export const resources = {
        ${resources}
   };
       `;

    // Cambiar la ruta de destino para que sea /locale/resources.ts
    const tsFilePath = path.join(process.cwd(), 'src', 'locale', 'resources.ts');

    // Verificar si el directorio 'locale' existe, si no, crearlo
    if (!fs.existsSync(path.dirname(tsFilePath))) {
      fs.mkdirSync(path.dirname(tsFilePath), { recursive: true });
    }

    fs.writeFileSync(tsFilePath, tsContent, 'utf-8');
    console.log('Archivo "resources.ts" generado con éxito');
  });
}


const directoryPath = path.join(__dirname, '.');
listFiles(directoryPath);
