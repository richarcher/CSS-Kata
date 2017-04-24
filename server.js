const bs = require("browser-sync").create();

bs.init({
    server: '.',
    startPath: '/app/index.html',
    files: [
        './app/**/*.css',
        './app/**/*.html',
        './backstop_data/bitmaps_reference/*.png'
    ],
    port: 8080,
    rewriteRules: [
        {
            match: /{{header}}/g,
            replace: "<h1>CSS Kata</h1><nav><ul><li><a href='../app/index.html'>Home</a></li></ul></nav>"
        },
        {
            match: /{{meta}}/g,
            replace: "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link rel=\"stylesheet\" href=\"answers.css\">"
        }
    ]
});
