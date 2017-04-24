const del = require('del');

del(['backstop_data/bitmaps_test']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});
